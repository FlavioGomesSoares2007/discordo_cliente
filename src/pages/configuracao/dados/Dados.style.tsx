import styled from "styled-components";

export const Form = styled.form`
  margin-top: 2vh;
  height: 90vh;
  width: 100vw;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5%;
`;

export const DivInput = styled.div`
  background-color: #4a4a4a;
  height: 5vh;
  width: 50vw;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

export const Input = styled.input<{ $width: number }>`
  background-color: #4a4a4a;
  border: none;
  margin-left: 2%;
  height: 4vh;
  width: ${(prosps)=> prosps.$width && `${prosps.$width}vw`};
  color: #ebebeb;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  color: #fff;
`;

export const Button = styled.button`
  height: 30px;
  width: 50px;

  border-radius: 10px;
  border: none;

  background-color: #4e73f6;
  color: #fff;
`;
