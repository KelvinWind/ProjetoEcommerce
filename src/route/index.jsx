import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutosV2 } from "../componentes/ListaProdutosV2";
import { Login } from "../pages/Login";
import { Home2 } from "../pages/v2/Home2";
import { Carrinho } from "../pages/Carrinho";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/produtos" element={<ListaProdutosV2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho />} />


      </Routes>
    </BrowserRouter>
  );
}
