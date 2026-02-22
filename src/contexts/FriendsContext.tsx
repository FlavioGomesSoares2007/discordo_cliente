import { createContext, useState, useEffect, type ReactNode } from "react";
import { api } from "../service/api";
import { socket } from "../service/socket";

export interface Amigo {
  id_amigo: number;
  nome: string;
  imagem: string | null;
}

interface FriendsContextData {
  amigos: Amigo[];
  loading: boolean;
}

export const FriendsContext = createContext<FriendsContextData>(
  {} as FriendsContextData,
);

export const FriendsProvider = ({ children }: { children: ReactNode }) => {
  const [amigos, setAmigos] = useState<Amigo[]>([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const buscarDadosIniciais = async () => {
      try {
        const response = await api.get("/user/see/data");
        setAmigos(response.data.friends || []);
        socket.connect();
        socket.emit("join", { id: Number(response.data.id_user) });
      } catch (error) {
        console.error("Erro ao carregar lista de amigos:", error);
      } finally {
        setLoading(false);
      }
    };

    buscarDadosIniciais();

    socket.on("newFriend", (dados: any) => {
      console.log("Evento newFriend recebido!", dados);
      const novoAmigo = dados.newFriend;

      setAmigos((listaAnterior) => {
        const jaExiste = listaAnterior.find(
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
    });

    return () => {
      socket.off("newFriend");
    };
  }, []);

  return (
    <FriendsContext.Provider value={{ amigos, loading }}>
      {children}
    </FriendsContext.Provider>
  );
};
