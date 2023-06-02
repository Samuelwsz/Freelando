import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"
import FreelandoLogo from "../Icones/FreelandoLogo"
import Link from "../Link"

const Header = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.m};
  text-align: center;
`

export default function Cabecalho() {
  return (
    <Header>
      <Container>
        <Row align="center">
          <Col> 
            <FreelandoLogo />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Link>Login</Link>
          </Col>
        </Row>
      </Container>
    </Header>
  )
}
