import styled from "styled-components";

import fotoPadrao from "../../../assets/perfil/ChatGPT Image 21 de fev. de 2026, 23_14_37.png";

export const Foto = styled.div<{ $img: string | null }>`
  background-image: ${(props) =>
    props.$img ? `url(${props.$img})` : `url(${fotoPadrao})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 50%;

  height: 23vh;
  width: 40vw;
`;

export const Conteiner = styled.form`
  height: 92vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BoxInputImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxInput = styled.div`
  background-color: #333;

  margin-top: 5%;
  margin-left: 9%;

  border-radius: 20px;

  width: 60vw;
  height: 7vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelImg = styled.label`
  font-size: 120%;
  margin-left: 1%;
  margin-top: auto;
  color: #37dc37;
`;

export const Label = styled.label`
  font-size: 100%;
  margin-left: 1%;
  color: #cecece;
`;

export const InputImg = styled.input`
  display: none;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 40vw;
  height: 5vh;
  color: #ffffff;

  margin-left: 3%;
`;

export const Button = styled.button`
  border: none;
  background-color: #4e73f6;

  color: #fff;

  height:5vh;
  width: 20vw;
  border-radius: 30px;
`;
