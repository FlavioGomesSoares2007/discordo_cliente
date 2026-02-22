import { useContext } from "react";
import { Header } from "../../components/header/Header";
import * as C from "../../components/header2/Header2.style";
import * as S from "./Contatos.style";
import { FriendsContext, type Amigo } from "../../contexts/FriendsContext";

export const Contatos = () => {
  const { amigos } = useContext(FriendsContext);
  

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
           <S.DivContato key={dados.id_amigo}>
            <S.foto $img={dados.imagem}></S.foto>
            <S.Nome>
            {dados.nome}
            </S.Nome>
           </S.DivContato>
          ))
        ) : (
          <p>Nenhum amigo encontrado ou carregando...</p>
        )}
      </S.DivAmigos>
    </>
  );
};
