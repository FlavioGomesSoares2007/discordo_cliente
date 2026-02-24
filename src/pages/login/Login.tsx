import React, { useState } from "react";
import * as S from "./Login.style";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { socket } from "../../service/socket";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [fechando, setFechando] = useState(false);
  const [carregar, setCarregar] = useState<boolean>(false);

  const navegar = useNavigate();

  const Login = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    setCarregar(true);
    try {
      const response = await api.post("login", {
        email: email,
        senha: senha,
      });

      localStorage.setItem("@Discordo:token", response.data);

      navegar("/contatos");
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setCarregar(false);
    }
  };

  const fecharErro = () => {
    setFechando(true);

    setTimeout(() => {
      setError(false);
      setFechando(false);
    }, 500);
  };

  return (
    <>
      <S.Background>
        <S.img_robo></S.img_robo>
        {error && (
          <S.ErrorAlert isClosing={fechando}>
            <S.TextoError>⚠️ E-mail ou senha incorretos!</S.TextoError>
            <S.ButtonError onClick={fecharErro}>OK</S.ButtonError>
          </S.ErrorAlert>
        )}

        <S.Formulario onSubmit={Login}>
          <S.Titulo>Bem vindo de volta</S.Titulo>
          <S.Box_input>
            <S.Label htmlFor="email">Email:</S.Label>
            <S.Input
              type="email"
              id="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </S.Box_input>

          <S.Box_input>
            <S.Label htmlFor="senha">Senha:</S.Label>
            <S.Input
              type="password"
              id="senha"
              value={senha}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSenha(e.target.value)
              }
            />
          </S.Box_input>

          <S.Button type="submit">
            {carregar ? "Carregando..." : "Entrar"}
          </S.Button>
          <S.Span>
            Ainda não tem uma conta?
            <S.StyledLink to={"/cadastra"}>Cadastre-se</S.StyledLink>
          </S.Span>
        </S.Formulario>
      </S.Background>
    </>
  );
};
