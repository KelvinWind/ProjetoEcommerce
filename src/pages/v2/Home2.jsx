import { Container } from "react-bootstrap";
import { ListaProdutosV2 } from "../../componentes/ListaProdutosV2";
import CarouselAnuncio from "../../componentes/v2/CarouselV2";
import NavBar from "../../componentes/NavBar";

function Home2() {
  return (
    <Container>
      <NavBar />
      <CarouselAnuncio />
      <ListaProdutosV2 />
    </Container>
  );
}

export { Home2 };
