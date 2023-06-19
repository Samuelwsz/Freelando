import styled from "@emotion/styled"
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro"
import erro404 from "./erro-404.png"
import { FiArrowLeft } from "react-icons/fi"
import Botao from "@/componentes/Botao"
import { Link } from "react-router-dom"
import { Col, Row } from "react-grid-system"

const ImagemEstilizada = styled.img`
  max-width: 100%;
`

export default function Pagina404() {
  return (
    <>
      <CabecalhoCadastro titulo="Ops... Página não encontrada :(" />
      <figure
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImagemEstilizada src={erro404} alt="Imagem da página de erro" />
      </figure>
      <CabecalhoCadastro subtitulo="Não encontramos a página que você está buscando, mas temos muitas outras para você navegar! " />
      <Row justify="center">
        <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
          <Link to="/">
            <Botao variante="secundaria">
              <FiArrowLeft
                style={{ marginRight: "5px", verticalAlign: "middle" }}
              />
              Voltar para home
            </Botao>
          </Link>
        </Col>
      </Row>
    </>
  )
}
