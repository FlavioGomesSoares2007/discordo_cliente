import styled from "styled-components";
import fotoPadrao from "../../assets/perfil/ChatGPT Image 21 de fev. de 2026, 23_14_37.png";

export const DivAmigos = styled.div`
  width: 100vw;
  height: 84.5vh;
  background-color: #333;
  
  overflow-y: auto;
`;

export const DivContato = styled.div`
  background-color: #333;
  height: 9vh;
  width: 90vw;

  display: flex;

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
