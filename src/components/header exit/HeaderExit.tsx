import * as S from "./HeaderExit.style";

interface Header {
  titulo: string;
  url: string;
}


export const HeaderExit = ({ titulo,  url  }: Header) => {
  return (
    <>
      <S.Header>
        <S.ButtonVoltar>
          <S.StyledLink to={url}>
            <S.ArrowBack />
          </S.StyledLink>
        </S.ButtonVoltar>
        <S.Titulo>{titulo}</S.Titulo>
      </S.Header>
    </>
  );
};
