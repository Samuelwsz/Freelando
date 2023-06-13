import Tipografia from "@/componentes/Tipografia"
import { Col, Row } from "react-grid-system"
import Botao from "@/componentes/Botao"

import { Link, useNavigate } from "react-router-dom"
import GrupoRadio from "@/componentes/Radio/GrupoRadio"
import { useEffect, useState } from "react"
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro"
import { useCadastroUsuarioContext } from "../../Contexto/CadastroUsuario"

const opcoes = [
  {
    valor: 1,
    label: "Ti e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Tradução",
  },
  {
    valor: 5,
    label: "Transcrição",
  },
  {
    valor: 6,
    label: "Marketing",
  },
]

export default function Interesses() {
  const { usuario, setInteresse, possoSelecionarInteresse } =
    useCadastroUsuarioContext()

  const navegar = useNavigate()

  useEffect(() => {
    if (!possoSelecionarInteresse()) {
      navegar("/selecao")
    }
  }, [navegar, possoSelecionarInteresse])

  return (
    <>
      <CabecalhoCadastro titulo="Crie seu cadastro" />
      <CabecalhoCadastro subtitulo="  Qual sua área de interesse?" />
      <div style={{ textAlign: "center" }}>
        <GrupoRadio
          opcoes={opcoes}
          valor={usuario.interesse}
          onChange={setInteresse}
        />
        <Row>
          <Col lg={6} md={6} sm={6}>
            <div style={{ textAlign: "left" }}>
              <Link to="/selecao">
                <Botao variante="secundaria">Anterior</Botao>
              </Link>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div style={{ textAlign: "right" }}>
              <Link to="/dadospessoais">
                <Botao>Proxima</Botao>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
