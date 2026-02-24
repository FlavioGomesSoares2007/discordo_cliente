import { createContext, useState, useEffect, type ReactNode } from "react";
import { api } from "../service/api";
import { socket } from "../service/socket";

interface novoAmigo {
  id_user: number;
  nome: string;
  imagem: string | null;
}
export interface Amigo {
  id_amigo: number;
  nome: string;
  imagem: string | null;
}

export interface pedidosRecebidos {
  id_friend_Request: number;
  id_sender: number;
  nome: string;
  imagem: string | null;
}

export interface message {
  id_message: number;
  id_sender: number;
  id_recipient: number;
  message: string;
  data: string;
}

interface DadosUserContextData {
  userId: number;
  messages: message[];
  recipient: pedidosRecebidos[];
  amigos: Amigo[];
}

export const DadosUserContext = createContext<DadosUserContextData>(
  {} as DadosUserContextData,
);

export const DadosUserProvider = ({ children }: { children: ReactNode }) => {
  const [amigos, setAmigos] = useState<Amigo[]>([]);
  const [recipient, setRecipient] = useState<pedidosRecebidos[]>([]);
  const [messages, setMessages] = useState<message[]>([]);
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const buscarDadosIniciais = async () => {
      try {
        const response = await api.get("/user/see/data");
        setUserId(response.data.id_user);
        setAmigos(response.data.friends || []);
        setRecipient(response.data.recipient || []);

        socket.connect();
        socket.emit("join", { id: Number(response.data.id_user) });

        const message = await api.get("/message");
        setMessages(message.data || []);
      } catch (error) {
        console.error("Erro ao carregar lista de amigos:", error);
      } 
    };

    buscarDadosIniciais();

    socket.on("newFriend", (dados: any) => {
      const novoAmigo: novoAmigo = dados.newFriend;

      setAmigos((listaAnterior) => {
        const jaExiste = listaAnterior.some(
          (amigo) => amigo.id_amigo === novoAmigo.id_user,
        );

        if (jaExiste) return listaAnterior;

        const amigoFormatado: Amigo = {
          id_amigo: novoAmigo.id_user,
          nome: novoAmigo.nome,
          imagem: novoAmigo.imagem,
        };

        return [...listaAnterior, amigoFormatado];
      });

      setRecipient((pedidosAnterior) => {
        return pedidosAnterior.filter(
          (pedido) => pedido.id_sender !== novoAmigo.id_user,
        );
      });
    });
    socket.on("request_sent", (dados: any) => {
      if (dados.sender) {
        interface novoPedido {
          id_friend_Request: number;
          id_user: number;
          nome: string;
          imagem: string | null;
        }
        const novoPedido: novoPedido = dados.sender;
        setRecipient((pedidosAnterior) => {
          const existe = pedidosAnterior.find(
            (pedido) => pedido.id_sender === novoPedido.id_user,
          );

          if (existe) return pedidosAnterior;

          const pedidoFormatado: pedidosRecebidos = {
            id_friend_Request: novoPedido.id_friend_Request,
            id_sender: novoPedido.id_user,
            nome: novoPedido.nome,
            imagem: novoPedido.imagem,
          };

          return [...pedidosAnterior, pedidoFormatado];
        });
      }
    });

    socket.on("requestRemoved", (dados: any) => {
      interface excluir {
        id: number;
        id_sender: number;
        id_recipient: number;
      }
      const excluir: excluir = dados;

      setRecipient((pedidosAnterior) => {
        return pedidosAnterior.filter(
          (pedido) => pedido.id_sender !== excluir.id_sender,
        );
      });
    });

    socket.on("new_message", (dados: any) => {
      const novaMensage: message = dados;

      setMessages((messagensAnterios) => {
        const exist = messagensAnterios.some(
          (message) => message.id_message === novaMensage.id_message,
        );
        if (exist) return messagensAnterios;

        const messageFormatado: message = {
          id_message: novaMensage.id_message,
          id_sender: novaMensage.id_sender,
          id_recipient: novaMensage.id_recipient,
          message: novaMensage.message,
          data: novaMensage.data,
        };

        return [...messagensAnterios, messageFormatado];
      });
    });

    return () => {
      socket.off("newFriend");
      socket.off("request_sent");
      socket.off("requestRemoved");
      socket.off("new_message");
    };
  }, []);

  return (
    <DadosUserContext.Provider
      value={{ userId, messages, recipient, amigos}}
    >
      {children}
    </DadosUserContext.Provider>
  );
};
