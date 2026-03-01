import React, { useState } from "react";
import { Header } from "../../../components/header/Header";
import * as C from "../../../components/header2/Header2.style";
import * as S from "./AdicionarAmigo.style";
import { api } from "../../../service/api";

export const AdicionarAmigo = () => {
  const [nome, setNome] = useState<string>("");
  const [carregando, setCarregando] = useState<boolean>(false);

  const convidar = async (e:React.BaseSyntheticEvent) => {
    e.preventDefault()
    setCarregando(true);
    try {
     const response =  await api.post("/request", {
        nome: nome,
      });

      alert(response.data)
    } catch (error: any) {
      console.log(error);

    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <Header />
      <C.Header2>
        <C.LinkStyled $ativo={true} to={"/adicionar/amigos"}>
          Adicionar
        </C.LinkStyled>
        <C.LinkStyled $ativo={false} to={"/aceitar/amigos"}>
          Aceitar
        </C.LinkStyled>
      </C.Header2>
      <S.Form onSubmit={convidar}>
        <S.DivInput>
          <S.Label htmlFor="nome">Nome:</S.Label>
          <S.Input
            id="nome"
            value={nome}
            autoComplete="off"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
          />
        </S.DivInput>
        <S.Button type="submit">
          {carregando ? "Carregando..." : "Enviar"}
        </S.Button>
      </S.Form>
    </>
  );
};
