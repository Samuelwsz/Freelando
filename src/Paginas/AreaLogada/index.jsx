import imgBanner from "./imagens/perfil-bg.png"
import imgUsuario from "./imagens/avatar.png"

import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"

import Card from "@/componentes/Card"
import Tipografia from "@/componentes/Tipografia"
import CampoTexto from "@/componentes/CampoTexto"
import Botao from "@/componentes/Botao"
import { useEffect } from "react"
import http from "../../http"
import { ArmazenadorToken } from "../../utils/ArmazenadorToken"

const TituloEstilizado = styled.h1`
  background: url(${imgBanner}) no-repeat;
  margin-top: 0;
  font-weight: 600;
  font-size: 40px;
  background-position: center;
  line-height: 246px;
  text-align: center;
`

const ImgEstilizada = styled.img`
  max-width: 100%;
  margin: 0 auto;
`

export default function AreaLogada() {
  const token = ArmazenadorToken.accessToken

  useEffect(() => {
    http
      .get("profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resposta) => console.log(resposta))
      .catch((erro) => console.error(erro))
  }, [])

  const aoSubmeterForm = (evento) => {
    evento.preventDefault()
  }

  return (
    <>
      <TituloEstilizado>Perfil</TituloEstilizado>
      <Container>
        <form onSubmit={aoSubmeterForm}>
          <Row>
            <Col sm={12} md={5}>
              <Card>
                <div style={{ textAlign: "center" }}>
                  <Tipografia componente="h3" variante="h3">
                    Nome Completo
                  </Tipografia>
                  <ImgEstilizada src={imgUsuario} />
                </div>
              </Card>
            </Col>
            <Col sm={12} md={7}>
              <Tipografia componente="h3" variante="h3">
                Revise seus dados
              </Tipografia>
              <CampoTexto titulo="Nome" />
              <CampoTexto titulo="Sobrenome" />
              <Row>
                <Col sm={12} md={6}>
                  <CampoTexto titulo="Celular" />
                </Col>
                <Col sm={12} md={6}>
                  <CampoTexto titulo="E-mail" tipo="email" />
                </Col>
                <Col sm={12} md={6}>
                  <CampoTexto titulo="Código postal" />
                </Col>
                <Col sm={12} md={6}>
                  <CampoTexto titulo="País" />
                </Col>
                <Col sm={12} md={6}>
                  <Botao fluido>Salvar</Botao>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}
