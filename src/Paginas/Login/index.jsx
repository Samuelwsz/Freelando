import { Col, Container, Row } from "react-grid-system"
import Logo from "./icones/Logo"
import Card from "@/componentes/Card"
import Tipografia from "@/componentes/Tipografia"
import styled from "@emotion/styled"
import CampoTexto from "@/componentes/CampoTexto"
import Botao from "@/componentes/Botao"
import IconeBotaoLogin from "./icones/IconeBotaoLogin"
import { Link } from "react-router-dom"
import Links from "@/componentes/Links"
import { useState } from "react"
import { useSessaoUsuarioContext } from "@/Contexto/SessaoUsuario"

const FormEstilizado = styled.form`
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.cores.primarias.a};
  padding-bottom: ${(props) => props.theme.espacamentos.l};
`

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const { login } = useSessaoUsuarioContext()

  const tentarEfetuarLogin = async (evento) => {
    evento.preventDefault()
    login(email, senha)
  }

  return (
    <>
      <Container>
        <Row justify="center">
          <Col
            xxx={6}
            xxl={6}
            xl={6}
            lg={6}
            md={8}
            sm={12}
            style={{ margin: "80px 0" }}
          >
            <div style={{ textAlign: "center" }}>
              <Logo />
            </div>
            <Card>
              <div style={{ textAlign: "center" }}>
                <Tipografia variante="h1" componente="h1">
                  Efetuar login
                </Tipografia>
              </div>
              <FormEstilizado onSubmit={tentarEfetuarLogin}>
                <CampoTexto
                  titulo="E-mail"
                  valor={email}
                  onChange={setEmail}
                  tipo="email"
                ></CampoTexto>
                <CampoTexto
                  titulo="Senha"
                  valor={senha}
                  onChange={setSenha}
                  tipo="password"
                ></CampoTexto>
                <div style={{ textAlign: "right" }}>
                  <Link to="/">
                    <Tipografia componente="legenda" variante="legenda">
                      Esqueceu sua senha?
                    </Tipografia>
                  </Link>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Botao>
                    Login
                    <IconeBotaoLogin />
                  </Botao>
                </div>
              </FormEstilizado>
              <div style={{ textAlign: "center" }}>
                <Tipografia componente="legenda" variante="legenda">
                  Ainda não criou sua conta no Freelando?
                </Tipografia>
              </div>
              <div style={{ textAlign: "center" }}>
                <Links variante="secundario">
                  <Link>Cadastre-se clicando aqui!</Link>
                </Links>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
