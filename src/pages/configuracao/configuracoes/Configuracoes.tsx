import { useContext } from "react";
import { HeaderExit } from "../../../components/header exit/HeaderExit";
import { DadosUserContext } from "../../../contexts/DadosUserContext";
import * as S from "./Configuracoes.style";

export const Configuracoes = () => {
  const { user } = useContext(DadosUserContext);

  if (!user) {
    return <div></div>;
  }

  return (
    <>
      <HeaderExit titulo="Configurações" url="/contatos" />
      <S.DivConfiguracoes>
        <S.StyleLink to={"/perfil"}>
          <S.Configuracao>
            <S.Foto $img={user!.imagem}></S.Foto>
            <S.DivSobre>
              <S.Text>Perfil</S.Text>
              <S.Detalhe>Alterar Nome e Foto</S.Detalhe>
            </S.DivSobre>
          </S.Configuracao>
        </S.StyleLink>

        <S.StyleLink to={"/dados"}>
          <S.Configuracao>
            <S.DivIcone>
              <S.Key />
            </S.DivIcone>
            <S.DivSobre>
              <S.Text>Dados</S.Text>
              <S.Detalhe>Alterar Email e Senha</S.Detalhe>
            </S.DivSobre>
          </S.Configuracao>
        </S.StyleLink>
      </S.DivConfiguracoes>
    </>
  );
};
