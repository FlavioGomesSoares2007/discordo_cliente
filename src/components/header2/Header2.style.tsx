import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header2 = styled.div`
  background-color: #333;

  width: 100vw;
  height: 10vh;


  display: flex;
  gap: 10px;
`;

export const LinkStyled = styled(Link)<{ $ativo: boolean }>`
  border: ${(props) =>
    props.$ativo ? `2px, solid #689e7d` : `2px, solid #c3c3c3`};
  border-radius: 15px;

  background-color: ${(props) => (props.$ativo ? `#1c693b` : ` #333`)};

  color: ${(props) => (props.$ativo ? ` #c3c3c3` : `#fff`)};
  text-decoration: none;

  padding: 5px;

  margin: 4px 0 10px 14px;

  height: 3vh;
`;
