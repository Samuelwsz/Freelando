import styled from "@emotion/styled"

import Tipografia from "@/componentes/Tipografia"

import Botao from "@/componentes/Botao"
import ImgConcluido from "/images/imagens-freelando/Imagens/CadastroProntoClienteCrop.png"
import { Link } from "react-router-dom"
import { Col, Row } from "react-grid-system"
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro"

const ImagemEstilizada = styled.img`
  max-width: 100%;
`

export default function Concluido() {
  return (
    <>
      <CabecalhoCadastro titulo="  Seu perfil está completo!" />
      <CabecalhoCadastro
        subtitulo="   Agora é so começar a se conectar com os melhores freelancers do
          mercado!"
      />

      <figure style={{ margin: "0 0 20px 0" }}>
        <ImagemEstilizada src={ImgConcluido} alt="imagem de perfil concluido" />
      </figure>

      <Row justify="center">
        <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
          <Link to="/">
            <Botao variante="secundaria">Voltar para home</Botao>
          </Link>
        </Col>
      </Row>
    </>
  )
}
