import styled from "styled-components";
import fotoPadrao from "../../../assets/perfil/ChatGPT Image 21 de fev. de 2026, 23_14_37.png";
import { BiUserCheck, BiUserX } from "react-icons/bi";


export const DivPedidos = styled.div`
  width: 100vw;
  height: 84.5vh;
  background-color: #333;

  overflow-y: auto;
`;

export const DivPedido = styled.div`
  background-color: #333;
  height: 9vh;
  width: 90vw;

  display: flex;
  position: absolute;

  margin: 5px 14px 0 14px;
`;

export const Nome = styled.p`
  color: #fff;
  margin: 10px 0 0 5px;
`;

export const foto = styled.div<{ $img: string | null }>`
  background-image: ${(props) =>
    props.$img ? `url(${props.$img})` : `url(${fotoPadrao})`};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 50px;
  width: 50px;
  border-radius: 50%;

  background-color: aliceblue;
  margin: 3px 0 0 3px;
`;

export const Check = styled(BiUserCheck)`
  color: #fff;
  font-size: 25px;
`;

export const reject = styled(BiUserX)`
  color: #fff;
  font-size: 24px;
`;

export const ButtonAceitar = styled.button`
  background-color: transparent;
  border: none;
  height: 7vh;
  width: 10vw;

  
  position: relative;
  left: 45%;
  margin: 2% 0 0 0;
`;
export const ButtonRejeitar = styled.button`
  background-color: transparent;
  border: none;
  height: 7vh;
  width: 10vw;

  position: relative;
  left: 50%;
  margin: 2% 0 0 0;
`;
