import styled from "styled-components";

export const Form = styled.form`
  background-color: #333;

  height: 15vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DivInput = styled.div`
  background-color: #444444;

  width: 60vw;
  height: 5vh;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  color: #fff;
`;

export const Input = styled.input`
  background-color: #444444;
  border: none;

  margin-left: 10px;

  color: #fff;
  width: 150px;
  height: 3vh;

  caret-color: #fff;

  &:focus {
    outline: none;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #444444 inset !important;

    -webkit-text-fill-color: white !important;
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
