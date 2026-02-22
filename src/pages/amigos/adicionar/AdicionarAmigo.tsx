import { Header } from "../../../components/header/Header";
import * as C from "../../../components/header2/Header2.style";

export const AdicionarAmigo = () => {
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
        <C.LinkStyled $ativo={false} to={"/pedidos/amigos"}>
          Pedidos
        </C.LinkStyled>
      </C.Header2>

      
    </>
  );
};
