import styled from "styled-components";
import PapelParede from "../../assets/conversas/ChatGPT Image 23 de fev. de 2026, 23_42_19.png";
import { BiPaperPlane, BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import fotoPadrao from "../../assets/perfil/ChatGPT Image 21 de fev. de 2026, 23_14_37.png";

export const DivParede = styled.div`
  background-image: url(${PapelParede});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  width: 100vw;
  height: 84vh;
`;

export const LinkStyle = styled(Link)``;

export const BalaoConversa = styled.div<{ $enviadaPorMim: boolean }>`
  max-width: 70%;
  padding: 12px;
  margin: 2% 0 2% 0 ;

  border-radius: 15px;
  word-wrap: break-word;

  align-self: ${(props) => (props.$enviadaPorMim ? "flex-end" : "flex-start")};

  background-color: ${(props) => (props.$enviadaPorMim ? "#005c4b" : "#333")};
  color: white;

  border-bottom-right-radius: ${(props) =>
    props.$enviadaPorMim ? "0" : "15px"};
  border-bottom-left-radius: ${(props) =>
    props.$enviadaPorMim ? "15px" : "0"};
`;

export const Texto = styled.p`
  color: #fff;
`;

export const header = styled.div`
  background-color: #333;

  width: 100vw;
  height: 8vh;

  display: flex;
`;

export const MiniPerfil = styled.div`
  background-color: #333;
  width: 100vw;
  height: 8vh;

  display: flex;
`;

export const Foto = styled.div<{ $img: string | null }>`
  background-image: ${(props) =>
    props.$img ? `url(${props.$img})` : `url(${fotoPadrao})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin: 1.5% 0 0 0;

  height: 7vh;
  width: 12vw;

  border-radius: 50%;
`;

export const Nome = styled.span`
  margin: 2% 0 0 2%;
  font-size: 20px;
  color: aliceblue;
`;

export const Form = styled.form`
  background-image: url(${PapelParede});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 8vh;

  display: flex;
  justify-content: center;

  position: fixed;
`;

export const DivInput = styled.div`
  background-color: #333;
  border-radius: 20px;
  width: 80vw;
  height: 6vh;
`;

export const Input = styled.input`
  border: none;
  background-color: #333;
  border-radius: 20px;
  width: 72vw;
  height: 6vh;

  caret-color: white;

  color: white;
  padding: 0 15px;

  &:focus {
    outline: none;
  }
`;

export const PaperPlane = styled(BiPaperPlane)`
  color: aliceblue;

  padding: 0 1% 0 0;

  font-size: 20px;
`;

export const Button = styled.button`
  background-color: green;

  border: none;
  border-radius: 20px;

  height: 6vh;
  width: 10vw;

  margin: 0 0 0 2%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowBack = styled(BiArrowBack)`
  color: aliceblue;
  font-size: 250%;
`;

export const ButtonVoltar = styled.button`
  background-color: transparent;
  border: none;
  height: 8vh;
  width: 13vw;
`;
