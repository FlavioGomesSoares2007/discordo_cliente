import { useState } from "react";
import * as S from "./Cadastra.style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  cadastroSchema,
  type CadastroFormData,
} from "../../schemas/cadastroSchemas";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export const Cadastra = () => {
  const [carregar, setCarregar] = useState<boolean>(false);
  const navegar = useNavigate();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
    mode: "all",
  });

  const cadastrar = async (data: CadastroFormData) => {
    setCarregar(true);
    try {
      await api.post("user", {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      });
      navegar("/");
    } catch (error: any) {
      alert(error.response?.data?.message);
      console.log(error);
    } finally {
      setCarregar(false);
    }
  };

  return (
    <>
      <S.Background>
        <S.Form onSubmit={handleSubmit(cadastrar)}>
          <S.Titulo>Cadastrar</S.Titulo>

          <S.Box_input>
            <S.Label htmlFor="nome">Nome:</S.Label>
            <S.Input type="text" id="nome" {...register("nome")} />
          </S.Box_input>

          {errors.nome && <S.Error>{errors.nome?.message}</S.Error>}

          <S.Box_input>
            <S.Label htmlFor="email">Email:</S.Label>
            <S.Input type="email" id="email" {...register("email")} />
          </S.Box_input>

          {errors.email && <S.Error>{errors.email?.message}</S.Error>}

          <S.Box_input>
            <S.Label htmlFor="senha">Senha:</S.Label>
            <S.Input type="password" id="senha" {...register("senha")} />
          </S.Box_input>

          {errors.senha && <S.Error>{errors.senha?.message}</S.Error>}

          <S.Box_input>
            <S.Label htmlFor="confirme_senha">Confirma Senha:</S.Label>
            <S.InputSenha
              type="password"
              id="confirme_senha"
              {...register("confirmarSenha")}
            />
          </S.Box_input>

          {errors.confirmarSenha && (
            <S.Error>{errors.confirmarSenha?.message}</S.Error>
          )}

          <S.Button>{carregar ? "Carregando..." : "Cadastre-se"}</S.Button>

          <S.Span>
            já tenho uma conta <S.StyledLink to={"/"}>Login</S.StyledLink>
          </S.Span>
        </S.Form> 
      </S.Background>
    </>
  );
};