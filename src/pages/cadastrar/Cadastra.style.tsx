import styled from "styled-components";
import wallpaper from "../../assets/cadastrar/ChatGPT Image 19 de fev. de 2026, 22_49_17.png";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-image: url(${wallpaper});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 50px;
  height: 340px;
  width: 250px;

  background-color: rgba(49, 51, 56, 0.8);

  backdrop-filter: blur(10px);

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 23px;

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


export const InputSenha = styled.input`
  background-color: #2c2c2c;
  border: none;

  margin-left: 10px;

  color: #fff;
  width: 65px;

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

export const Error = styled.span`
color: red;
font-size: 13px;
margin: -19px;

`
