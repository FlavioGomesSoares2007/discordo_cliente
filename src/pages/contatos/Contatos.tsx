import { useContext } from "react";
import { Header } from "../../components/header/Header";
import * as C from "../../components/header2/Header2.style";
import * as S from "./Contatos.style";
import { DadosUserContext, type Amigo } from "../../contexts/DadosUserContext";

export const Contatos = () => {
  const { amigos } = useContext(DadosUserContext);

  if (!amigos)return <div></div>

  return (
    <>
      <Header />
      <C.Header2>
        <C.LinkStyled $ativo={true} to={"/contatos"}>
          Contatos {amigos.length}
        </C.LinkStyled>
      </C.Header2>
      <S.DivAmigos>
        {amigos && amigos.length > 0 ? (
          amigos.map((dados: Amigo) => (
            <S.StyledLink to={`/conversas/${dados.id_amigo}`}>
              <S.DivContato key={dados.id_amigo}>
                <S.foto $img={dados.imagem}></S.foto>
                <S.Nome>{dados.nome}</S.Nome>
              </S.DivContato>
            </S.StyledLink>
          ))
        ) : (
          <p>Nenhum amigo encontrado ou carregando...</p>
        )}
      </S.DivAmigos>
    </>
  );
};
