import styled, { keyframes } from "styled-components";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Header = styled.div`
  background-color: #333;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;
  box-sizing: border-box;

  z-index: 1000;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: 30px;
`;

export const three = styled(PiDotsThreeOutlineVerticalFill)`
  color: #fff;
  font-size: 25px;
`;

export const Menu = styled.button`
  background-color: #333;

  border: none;

  height: 50px;
  width: 50px;

  cursor: pointer;
`;

const slideIn = keyframes`
  from { transform: translate(-0.2%, -200px);}
  to { transform: translate(-0.2%, 0);  }
`;

const slideToTheSide = keyframes`
  from { transform: translate(-0.2%, 0);}
  to { transform: translate(-0.2%, -300px);}
`;

export const MenuLateral = styled.div<{ $ativo: boolean }>`
  z-index: 1000;

  background-color: #393838;
  height: auto;
  width: 40vw;

  border-radius: 10px;

  position: fixed;
  left: 59%;

  animation-name: ${(props) => (props.$ativo ? slideIn : slideToTheSide)};
  animation-duration: ${(props) => (props.$ativo ? ` 1s` : `0.2s`)};
`;

export const ButtonMenu = styled.button`
  border: none;
  width: 100%;
  height: 35px;

  background-color: #393838;

  border-radius: 10px;
`;

export const ButtonEnv = styled.button`
  background-color: transparent;
  border: none;

  height: 100%;
  width: 100%;

  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

export const LintStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
