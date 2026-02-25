import { useContext } from "react";
import { HeaderExit } from "../../components/header conf/HeaderExit";
import { DadosUserContext } from "../../contexts/DadosUserContext";
import * as S from "./Configuracao";

export const Configuracoes = () => {
  const { user } = useContext(DadosUserContext);

  if (!user) {
    return <div></div>;
  }

  return (
    <>
      <HeaderExit titulo="Configurações" />
      <S.DivConfiguracoes>
        <S.StyleLink to={"#"}>
          <S.Configuracao>
            <S.Foto $img={user!.imagem}></S.Foto>
            <S.Text>{user.nome}</S.Text>
          </S.Configuracao>
        </S.StyleLink>
        
        <S.StyleLink to={"#"}>

          <S.Configuracao>
            <S.Text>
              <S.DivIcone><S.Key /></S.DivIcone>
               Dados
            </S.Text>
          </S.Configuracao>
        </S.StyleLink>

      </S.DivConfiguracoes>
    </>
  );
};
