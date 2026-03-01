import { createContext, useState, useEffect, type ReactNode } from "react";
import { api } from "../service/api";
import { socket } from "../service/socket";

// --- Interfaces ---
interface novoAmigo {
  id_user: number;
  nome: string;
  imagem: string | null;
}

export interface User {
  id_user: number;
  email: string;
  nome: string;
  imagem: string | null;
  senha: string;
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
  user: User | null;
  messages: message[];
  recipient: pedidosRecebidos[];
  amigos: Amigo[];
  buscarDadosIniciais: () => Promise<void>;
}

export const DadosUserContext = createContext<DadosUserContextData>(
  {} as DadosUserContextData,
);

export const DadosUserProvider = ({ children }: { children: ReactNode }) => {
  const [amigos, setAmigos] = useState<Amigo[]>([]);
  const [recipient, setRecipient] = useState<pedidosRecebidos[]>([]);
  const [messages, setMessages] = useState<message[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const buscarDadosIniciais = async () => {
    const token = localStorage.getItem("@Discordo:token");
    if (!token) return;

    try {
      const response = await api.get("/user/see/data");
      setUser(response.data);
      setAmigos(response.data.friends || []);
      setRecipient(response.data.recipient || []);

      socket.connect();
      socket.emit("join", { id: Number(response.data.id_user) });

      const messageResponse = await api.get("/message");
      setMessages(messageResponse.data || []);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  useEffect(() => {
    buscarDadosIniciais();

    socket.on("newFriend", (dados: any) => {
      const novoAmigo: novoAmigo = dados.newFriend;
      setAmigos((prev) => {
        if (prev.some((a) => a.id_amigo === novoAmigo.id_user)) return prev;
        return [
          ...prev,
          {
            id_amigo: novoAmigo.id_user,
            nome: novoAmigo.nome,
            imagem: novoAmigo.imagem,
          },
        ];
      });
      setRecipient((prev) =>
        prev.filter((p) => p.id_sender !== novoAmigo.id_user),
      );
    });

    socket.on("request_sent", (dados: any) => {
      if (dados.sender) {
        const novoPedido = dados.sender;
        setRecipient((prev) => {
          if (prev.find((p) => p.id_sender === novoPedido.id_user)) return prev;
          return [
            ...prev,
            {
              id_friend_Request: novoPedido.id_friend_Request,
              id_sender: novoPedido.id_user,
              nome: novoPedido.nome,
              imagem: novoPedido.imagem,
            },
          ];
        });
      }
    });

    socket.on("requestRemoved", (dados: any) => {
      setRecipient((prev) =>
        prev.filter((p) => p.id_sender !== dados.id_sender),
      );
    });

    socket.on("new_message", (novaMensagem: message) => {
      setMessages((prev) => {
        if (prev.some((m) => m.id_message === novaMensagem.id_message))
          return prev;
        return [...prev, novaMensagem];
      });
    });

    socket.on("update", (update: User) => {
      setAmigos((prev) => {
        const filtrada = prev.filter((a) => a.id_amigo !== update.id_user);
        return [
          ...filtrada,
          {
            id_amigo: update.id_user,
            email: update.email,
            imagem: update.imagem,
            nome: update.nome,
            senha: update.senha,
          },
        ];
      });
    });

    return () => {
      socket.off("newFriend");
      socket.off("request_sent");
      socket.off("requestRemoved");
      socket.off("new_message");
      socket.off("update");
    };
  }, []);

  return (
    <DadosUserContext.Provider
      value={{ user, messages, recipient, amigos, buscarDadosIniciais }}
    >
      {children}
    </DadosUserContext.Provider>
  );
};
