import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Header = styled.div`
  background-color: #333;

  width: 100vw;
  height: 8vh;

  display: flex;
  align-items: center;
`;

export const ArrowBack = styled(BiArrowBack)`
  color: aliceblue;
  font-size: 250%;
`;

export const ButtonVoltar = styled.button`
  background-color: transparent;
  border: none;
  height: 8vh;
  width: 13vw;
`;

export const Titulo = styled.span`
color: aliceblue;
font-size: 25px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`;


