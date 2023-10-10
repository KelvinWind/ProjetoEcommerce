import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutosV2 } from "../../componentes/ListaProdutosV2";
import { Home2 } from "../../pages/v2/Home2";

function MinhaRotas() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/produtos" element={<ListaProdutosV2 />} />
    </Routes>
    </BrowserRouter>
  );
}

export { MinhaRotas };
