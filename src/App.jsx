import { Col, Container, Row } from "react-grid-system"
import Cabecalho from "./componentes/Cabecalho"
import CampoTexto from "./componentes/CampoTexto"
import Card from "./componentes/Card"
import Estilos from "./componentes/EstilosGlobais"
import ProvedorTema from "./componentes/ProvedorTema"
import Rodape from "./componentes/Rodape"
import Tipografia from "./componentes/Tipografia"
import Botao from "./componentes/Botao"

export default function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Container style={{ margin: "auto", padding: '70px 0' }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h3" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo="Estado"></CampoTexto>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="E-mail"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha"></CampoTexto>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a senha"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "left" }}>
                    <Botao variante="secundaria">Anterior</Botao>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Botao>Proxima</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Rodape />
    </ProvedorTema>
  )
}
