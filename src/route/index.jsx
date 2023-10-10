import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutosV2 } from "../componentes/ListaProdutosV2";
import { Produto } from "../pages/Produto";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaProdutosV2/>} />
        <Route path="/produto" element={<Produto/>} />
 
  
      </Routes>
    </BrowserRouter>
  );
}
