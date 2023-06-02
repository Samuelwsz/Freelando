import { Col, Container, Row } from "react-grid-system"
import Cabecalho from "./componentes/Cabecalho"
import CampoTexto from "./componentes/CampoTexto"
import Card from "./componentes/Card"
import Estilos from "./componentes/EstilosGlobais"
import ProvedorTema from "./componentes/ProvedorTema"
import Rodape from "./componentes/Rodape"
import Tipografia from "./componentes/Tipografia"
import Botao from "./componentes/Botao"
import ListaSuspensa from "./componentes/ListaSuspensa"

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
]

export default function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Container
        style={{ margin: "auto", padding: "70px 20px", position: "relative" }}
      >
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
                <Col lg={4} md={6} sm={4}>
                  <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros} />
                </Col>
                <Col lg={8} md={6} sm={8}>
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
