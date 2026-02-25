import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Cadastra } from "./pages/cadastrar/Cadastra";
import { Contatos } from "./pages/contatos/Contatos";
import { DadosUserProvider } from "./contexts/DadosUserContext";
import { AdicionarAmigo } from "./pages/amigos/adicionar/AdicionarAmigo";
import { AceitarAmigos } from "./pages/amigos/aceitar/AceitarAmigos";
import { Conversas } from "./pages/conversas/Conversas";
import { Configuracoes } from "./pages/configuraçao/Configuracoes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastra" element={<Cadastra />} />
      </Routes>{" "}
      <DadosUserProvider>
        <Routes>
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/adicionar/amigos" element={<AdicionarAmigo />} />
          <Route path="/aceitar/amigos" element={<AceitarAmigos />} />
          <Route path="/conversas/:id" element={<Conversas />} />
          <Route path="/conf" element={<Configuracoes />} />
        </Routes>
      </DadosUserProvider>
    </>
  );
}

export default App;
