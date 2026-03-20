import styled from "styled-components";

export const Form = styled.form`
  background-color: #333;

  height: 35vh;
  width: 100vw;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DivInput = styled.div`
  background-color: #444444;

  width: 60vw;
  height: 5vh;

  border-radius: 10px;

  display: flex;
  align-items: center;

  @media (min-width: 550px) {
    width: 60vw;
    height: 5vh;
  }
`;
export const Label = styled.label`
  color: #fff;
  margin-left: 2%;
`;

export const Input = styled.input`
  background-color: #444444;
  border: none;

  margin-left: 10px;

  color: #fff;
  width: 45vw;
  height: 4vh;

  caret-color: #fff;

  &:focus {
    outline: none;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #444444 inset !important;

    -webkit-text-fill-color: white !important;
  }
   @media (min-width: 550px) {
    width: 54vw;
  }
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;

  border-radius: 10px;
  border: none;

  background-color: #4e73f6;
  color: #fff;
  margin: 5% 0 0 35%;
`;
