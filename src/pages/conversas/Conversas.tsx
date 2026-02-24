import { useContext, useEffect, useRef} from "react";
import * as S from "./Conversas.style";
import {
  DadosUserContext,
  type Amigo,
  type message,
} from "../../contexts/DadosUserContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  enviarMensageSchemas,
  type enviarMensagetype,
} from "../../schemas/enviarMensageSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../service/api";

export const Conversas = () => {
  const { messages, userId, amigos } = useContext(DadosUserContext);
  const mensagensEndRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<enviarMensagetype>({
    resolver: zodResolver(enviarMensageSchemas),
    mode: "all",
  });

  const { id } = useParams();
  const idAmigo = Number(id);

  const mineOrNot = (id: number) => {
    if (id === userId) {
      return true;
    } else {
      return false;
    }
  };

  const scrollToBottom = () => {
    mensagensEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Monitora as mensagens do contexto

  const enviarMensage = async (dados: enviarMensagetype) => {
    try {
      if (errors.message) {
        alert(errors.message.message);
      } else {
        await api.post(`/message/${idAmigo}`, {
          message: dados.message,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <>
      <S.header>
        <S.ButtonVoltar>
          <S.LinkStyle to={"/contatos"}>
            <S.ArrowBack />
          </S.LinkStyle>
        </S.ButtonVoltar>
        {amigos && amigos.filter(
            (amigo)=> amigo.id_amigo === idAmigo
          ).map((dados:Amigo)=>(
            <S.MiniPerfil key={dados.id_amigo}>
                <S.Foto $img={dados.imagem}></S.Foto>
             <S.Nome>{dados.nome}</S.Nome>
            </S.MiniPerfil>
          ))

          }
      </S.header>
      <S.DivParede>
        {messages &&
          messages
            .filter(
              (mensagens) =>
                (mensagens.id_sender === userId &&
                  mensagens.id_recipient === idAmigo) ||
                (mensagens.id_sender === idAmigo &&
                  mensagens.id_recipient === userId),
            )
            .map((dados: message) => (
              <S.BalaoConversa
                $enviadaPorMim={mineOrNot(dados.id_sender)}
                key={dados.id_message}
              >
                <S.Texto>{dados.message}</S.Texto>
              </S.BalaoConversa>
            ))}
        <div ref={mensagensEndRef} />
      </S.DivParede>
      <S.Form onSubmit={handleSubmit(enviarMensage)}>
        <S.DivInput>
          <S.Input
            type="text"
            autoComplete="off"
            placeholder="Mensagem"
            {...register("message")}
          />
        </S.DivInput>
        <S.Button type="submit">
          <S.PaperPlane />
        </S.Button>
      </S.Form>
    </>
  );
};
