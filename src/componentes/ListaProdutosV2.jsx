import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../_service/api";
import { useEffect } from "react";
import { CardProdutoV2 } from "./v2/CardProdutoV2";
import { Navbar } from "react-bootstrap";

function ListaProdutosV2() {

    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        buscarProdutos();
    },[]);

    function mensagemDeErro(mensagem = "Mensagem de erro") {
        toast.error(mensagem, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      async function buscarProdutos() {
        try {
          const response = await api.get("/productlistbyremark/home");
          setProdutos(response.data);
        } catch (error) {
          mensagemDeErro("Erro para buscar os produtos.");
        }
      }

      return (
        <>
          <Row className="justify-content-md-center">
            <Col md={4}>
              <h1>Lista de Produtos</h1>
            </Col>
          </Row>
          <Row>
            {produtos.map((produto, index) => {
              return (
                <Col className="m-2" key={index}>
                  <CardProdutoV2
                    idProduto={produto.id}
                    nome={produto.title}
                    preco={produto.price}
                    linkImagem={produto.image}
                    descricao={produto.category}
                  />
                </Col>
              );
            })}
          </Row>
        </>
      );
    }
    
    export { ListaProdutosV2 };