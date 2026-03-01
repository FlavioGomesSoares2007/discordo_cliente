import React, { useContext, useState } from "react";
import { HeaderExit } from "../../../components/header exit/HeaderExit";
import { DadosUserContext } from "../../../contexts/DadosUserContext";
import * as S from "./Perfil.style";
import { api } from "../../../service/api";

export const Perfil = () => {
  const { user, buscarDadosIniciais } = useContext(DadosUserContext); // Pegamos a busca para atualizar a tela depois
  const [preview, setPreview] = useState<string | null>(null);
  const [fotoArquivo, setFotoArquivo] = useState<File | null>(null); // Guardamos o arquivo real aqui
  const [nome, setNome] = useState<string>("");

  if (!user) return <div></div>;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFotoArquivo(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const enviar = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const formData = new FormData();
    if (nome) formData.append("nome", nome);
    if (fotoArquivo) formData.append("capa", fotoArquivo);
    try {
       await api.patch("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      await buscarDadosIniciais();
    } catch (error) {
      console.log("Erro ao atualizar:", error);
    }
  };

  return (
    <>
      <HeaderExit titulo="Perfil" url="/conf" />
      <S.Conteiner onSubmit={enviar}>
        <S.BoxInputImg>
          <S.Foto $img={preview || user.imagem}></S.Foto>
          <S.LabelImg htmlFor="foto">Alterar</S.LabelImg>
          <S.InputImg
            type="file"
            id="foto"
            accept="image/*"
            autoComplete="off"
            onChange={handleImageChange}
          />
        </S.BoxInputImg>
        <S.BoxInput>
          <S.Label htmlFor="nome">Nome:</S.Label>
          <S.Input
            type="text"
            id="nome"
            autoComplete="off"
            placeholder={user.nome}
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNome(e.target.value);
            }}
          />
        </S.BoxInput>

        <S.Button type="submit">Salvar</S.Button>
      </S.Conteiner>
    </>
  );
};
