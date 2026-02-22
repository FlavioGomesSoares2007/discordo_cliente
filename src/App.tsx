import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Cadastra } from "./pages/cadastrar/Cadastra";
import { Contatos } from "./pages/contatos/Contatos";
import { FriendsProvider } from "./contexts/FriendsContext";
import { AdicionarAmigo } from "./pages/amigos/adicionar/AdicionarAmigo";
import { Pedidos } from "./pages/amigos/pedidos/Pedidos";
import { AceitarAmigos } from "./pages/amigos/aceitar/AceitarAmigos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastra" element={<Cadastra />} />
      </Routes>{" "}
      <FriendsProvider>
        <Routes>
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/adicionar/amigos" element={<AdicionarAmigo />} />
          <Route path="/aceitar/amigos" element={<AceitarAmigos />} />
          <Route path="/pedidos/amigos" element={<Pedidos />} />
        </Routes>
      </FriendsProvider>
    </>
  );
}

export default App;
