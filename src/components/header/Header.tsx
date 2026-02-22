import { useState } from "react";
import * as S from "./Header.style";

export const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <S.Header>
        <S.Titulo>Discordo</S.Titulo>
        <S.Menu onClick={() => setMenu(true)}>
          <S.three />
        </S.Menu>
      </S.Header>

      {menu && (
        <S.MenuLateral $ativo={menu}>
          <S.ButtonMenu>
            <S.LintStyled to={"/conf"}>Configuração</S.LintStyled>
          </S.ButtonMenu>
          <S.ButtonMenu>
            <S.LintStyled to={"/adicionar/amigos"}>Novos Amigos</S.LintStyled>
          </S.ButtonMenu>
            <S.ButtonMenu>
            <S.LintStyled to={"/contatos"}>Conversas</S.LintStyled>
          </S.ButtonMenu>
        </S.MenuLateral>
      )}

      {menu && <S.ButtonEnv onClick={() => setMenu(false)}></S.ButtonEnv>}
    </>
  );
};
