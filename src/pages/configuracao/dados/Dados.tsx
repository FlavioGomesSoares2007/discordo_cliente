import { useContext } from "react";
import { HeaderExit } from "../../../components/header exit/HeaderExit";
import * as S from "./Dados.style";
import { DadosUserContext } from "../../../contexts/DadosUserContext";

export const Dados = () => {
  const { user } = useContext(DadosUserContext);

  if (!user) return <div></div>;
  return (
    <>
      <HeaderExit titulo="Dados" url="/conf" />
      <S.Form>
        <S.DivInput>
          <S.Label htmlFor="email">Email:</S.Label>
          <S.Input
          $width={35}
            type="email"
            placeholder={user.email}
            id="email"
            autoComplete="off"
          />
        </S.DivInput>
        <S.DivInput>
          <S.Label htmlFor="senha">Nova Senha:</S.Label>
          <S.Input $width={25} type="text" id="senha" autoComplete="off" />
        </S.DivInput>
        <S.Button type="submit">Salvar</S.Button>
      </S.Form>
    </>
  );
};
