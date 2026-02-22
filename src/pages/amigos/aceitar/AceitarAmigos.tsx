import { Header } from "../../../components/header/Header"
import * as C from "../../../components/header2/Header2.style"

export const AceitarAmigos = () => {
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
            <C.LinkStyled $ativo={false} to={"/pedidos/amigos"}>
              Pedidos
            </C.LinkStyled>
          </C.Header2>
        </>
  )
}
