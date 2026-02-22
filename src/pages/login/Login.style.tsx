import styled, { keyframes } from "styled-components";
import wallpaper from "../../assets/login/ChatGPT Image 19 de fev. de 2026, 16_32_03.png";
import robo from "../../assets/login/ChatGPT Image 19 de fev. de 2026, 16_13_46.png";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const img_robo = styled.div`
  background-image: url(${robo});
  position: fixed;
  z-index: 999;
  top: 1ch;
  left: 80%;

  height: 200px;
  width: 200px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: -55px;
`;

export const Formulario = styled.form`
  margin-top: 50px;
  height: 240px;
  width: 250px;

  background-color: rgba(49, 51, 56, 0.8);

  backdrop-filter: blur(10px);

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: 20px;
`;

export const Box_input = styled.div`
  background-color: #2c2c2c;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 30px;

  border-radius: 5px;
`;

export const Label = styled.label`
  color: #fff;
`;

export const Input = styled.input`
  background-color: #2c2c2c;
  border: none;

  margin-left: 10px;

  color: #fff;
  width: 130px;

  caret-color: #fff;

  &:focus {
    outline: none;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #333 inset !important;

    -webkit-text-fill-color: white !important;
  }
`;

export const Button = styled.button`
  height: 30px;
  width: 150px;

  border-radius: 10px;
  border: none;

  background-color: #4e73f6;
  color: #fff;
`;

export const Span = styled.span`
  color: #fff;
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  color: #3cff00;
  margin-left: 5px;
  text-decoration: none;
`;

const slideIn = keyframes`
  from { transform: translate(-50%, -50px); opacity: 0; }
  to { transform: translate(-50%, 0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translate(-50%, 0); opacity: 1; }
  to { transform: translate(-50%, -50px); opacity: 0; }
`;

export const ErrorAlert = styled.div<{ isClosing: boolean }>`
  height: 150px;
  width: 300px;

  background-color: rgba(49, 51, 56, 0.8);
  backdrop-filter: Blur(10px);

  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation-name: ${props => props.isClosing ? slideOut : slideIn};
  animation-duration: 1s;
`;

export const TextoError = styled.p`
  color: #fff;
  text-align: center;
  margin: 30px 0 0 0;
`;

export const ButtonError = styled.button`
  height: 30px;
  width: 50px;

  border-radius: 10px;
  border: none;

  background-color: #4e73f6;
  color: #fff;
  margin: 20px 0 0 190px;
`;
