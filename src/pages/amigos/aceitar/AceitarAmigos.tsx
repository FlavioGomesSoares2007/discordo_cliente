import { useContext } from "react";
import { Header } from "../../../components/header/Header";
import * as C from "../../../components/header2/Header2.style";
import {
  DadosUserContext,
  type pedidosRecebidos,
} from "../../../contexts/DadosUserContext";
import * as S from "./AceitarAmigos.style";
import { api } from "../../../service/api";

export const AceitarAmigos = () => {
  const { recipient } = useContext(DadosUserContext);

  const aceitar = async (id: number) => {
    try {
      await api.post(`/request/accept/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const excluir = async (id: number) => {
    try {
      await api.delete(`/request/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <C.Header2>
        <C.LinkStyled $ativo={false} to={"/adicionar/amigos"}>
          Adicionar
        </C.LinkStyled>
        <C.LinkStyled $ativo={true} to={"/aceitar/amigos"}>
          Aceitar
        </C.LinkStyled>
      </C.Header2>
      <S.DivPedidos>
        {recipient &&
          recipient.map((dados: pedidosRecebidos) => (
            <S.DivPedido key={dados.id_sender}>
              <S.foto $img={dados.imagem}></S.foto>
              <S.Nome>{dados.nome}</S.Nome>
              <S.ButtonAceitar onClick={() => aceitar(dados.id_friend_Request)}>
                <S.Check />
              </S.ButtonAceitar>
              <S.ButtonRejeitar
                onClick={() => excluir(dados.id_friend_Request)}
              >
                <S.reject />
              </S.ButtonRejeitar>
            </S.DivPedido>
          ))}
      </S.DivPedidos>
    </>
  );
};
