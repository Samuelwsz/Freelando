import styled from "@emotion/styled"
import imagemBanner from "/images/imagens-freelando/Imagens/imagemBanner.png"
import { Container, Row, Col } from "react-grid-system"
import Tipografia from "../Tipografia"
import { Link } from "react-router-dom"
import Botao from "../Botao"

const ImgEstilizado = styled.img`
  max-width: 100%;
`

const FigureEstilizada = styled.figure`
  padding: ${(props) => props.theme.espacamentos.l};
  background: ${(props) => props.theme.cores.neutras.c};
  color: ${(props) => props.theme.cores.primarias.b};
  margin: 0;
`

export default function Banner() {
  return (
    <FigureEstilizada>
      <Container>
        <Row align="center">
          <Col md={5} sm={12}>
            <figcaption>
              <Tipografia componente="h1" variante="h1">
                Uma ponte entre os freelas mais talentosos e os projetos mais
                interessantes!
              </Tipografia>
            </figcaption>
            <div style={{ marginBottom: "10px" }}>
              <Link to="/selecao">
                <Botao>Quero me cadastrar</Botao>
              </Link>
            </div>
          </Col>
          <Col md={7} sm={12}>
            <ImgEstilizado src={imagemBanner} alt="imagem do banner" />
          </Col>
        </Row>
      </Container>
    </FigureEstilizada>
  )
}
