import * as S from "./HeaderExit.style";

interface HeaderTitulo {
  titulo: string;
}

export const HeaderExit = ({ titulo }: HeaderTitulo) => {
  return (
    <>
      <S.Header>
        <S.ButtonVoltar>
          <S.StyledLink to={"/contatos"}>
            <S.ArrowBack />
          </S.StyledLink>
        </S.ButtonVoltar>
        <S.Titulo>{titulo}</S.Titulo>
      </S.Header>
    </>
  );
};
