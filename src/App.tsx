import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Cadastra } from "./pages/cadastrar/Cadastra";
import { Contatos } from "./pages/contatos/Contatos";
import { DadosUserProvider } from "./contexts/DadosUserContext";
import { AdicionarAmigo } from "./pages/amigos/adicionar/AdicionarAmigo";
import { AceitarAmigos } from "./pages/amigos/aceitar/AceitarAmigos";
import { Conversas } from "./pages/conversas/Conversas";
import { Configuracoes } from "./pages/configuracao/configuracoes/Configuracoes";
import { Perfil } from "./pages/configuracao/Perfil/Perfil";
import { Dados } from "./pages/configuracao/dados/Dados";

function App() {
  return (
    <>
      <DadosUserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastra" element={<Cadastra />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/adicionar/amigos" element={<AdicionarAmigo />} />
          <Route path="/aceitar/amigos" element={<AceitarAmigos />} />
          <Route path="/conversas/:id" element={<Conversas />} />
          <Route path="/conf" element={<Configuracoes />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/dados" element={<Dados/>}/>
        </Routes>
      </DadosUserProvider>
    </>
  );
}

export default App;
