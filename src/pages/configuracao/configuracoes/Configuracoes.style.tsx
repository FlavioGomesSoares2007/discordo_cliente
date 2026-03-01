import styled from "styled-components";
import { Link } from "react-router-dom";
import fotoPadrao from "../../../assets/perfil/ChatGPT Image 21 de fev. de 2026, 23_14_37.png";
import { BiSolidKey } from "react-icons/bi";

export const DivConfiguracoes = styled.div`
  background-color: #333;
  height: 92vh;
  width: 100vw;

  overflow-y: auto;
`;

export const Configuracao = styled.div`
  background-color: #333;
  align-items: center;
  width: 100%;

  padding-top: 1%;

  display: flex;
`;

export const StyleLink = styled(Link)`
  background-color: transparent;
  display: flex;
  width: 100vw;

  text-decoration: none;
`;

export const Foto = styled.div<{ $img: string | null }>`
  background-image: ${(props) =>
    props.$img ? `url(${props.$img})` : `url(${fotoPadrao})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: ${(props) => (props.$img ? `9vh` : `10vh`)};
  width: ${(props) => (props.$img ? `9vh` : `13vh`)};

  margin: 0 0 0 4%;

  border-radius: 30px;
`;

export const Text = styled.span`
  margin: 0 0 1% 3%;
  font-size: 20px;
  color: aliceblue;

  display: flex;
  justify-content: center;
`;

export const Nome = styled.span`
  margin: -5.5% 0 0 6%;
  font-size: 20px;
  color: aliceblue;

  display: flex;
  justify-content: center;
`;

export const Key = styled(BiSolidKey)`
  color: #a2a2a2;
  font-size: 50px;
`;

export const DivIcone = styled.div`
  background-color: transparent;

  height: 8vh;
  width: 8vw;

  margin-left: 6%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Detalhe = styled.span`
  color: #8b8b8b;
`;

export const DivSobre = styled.div`
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;
