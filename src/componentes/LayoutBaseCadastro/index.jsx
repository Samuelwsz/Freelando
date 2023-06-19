import { Row, Col, Container } from "react-grid-system"
import Card from "../Card"
import { Outlet } from "react-router-dom"
import { CadastroUsuarioProvider } from "../../Contexto/CadastroUsuario"

export default function LayoutBaseCadastro() {
  return (
    <>
      <CadastroUsuarioProvider>
        <Container>
          <Row justify="center" style={{ margin: "auto" }}>
            <Col lg={6} md={8} sm={12} style={{ margin: "80px" }}>
              <Card>
                <Outlet />
              </Card>
            </Col>
          </Row>
        </Container>
      </CadastroUsuarioProvider>
    </>
  )
}
