import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"
import FreelandoLogo from "../Icones/FreelandoLogo"

import { Link } from "react-router-dom"
import Links from "../Links"

import { useSessaoUsuarioContext } from "../../Contexto/SessaoUsuario"

const Header = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.m};
  text-align: center;
`

export default function Cabecalho() {
  const { usuarioEstaLogado, logout } = useSessaoUsuarioContext()

  return (
    <Header>
      <Container>
        <Row align="center">
          <Col>
            <FreelandoLogo />
          </Col>
          <Col style={{ textAlign: "right" }}>
            {usuarioEstaLogado ? (
              <Link to='/login'>
                <Links onClick={logout}>Logout</Links>
              </Link>
            ) : (
              <Link to="/login">
                <Links>Login</Links>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </Header>
  )
}
