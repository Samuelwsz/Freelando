import Tipografia from "@/componentes/Tipografia"
import { Col, Row } from "react-grid-system"

import Cliente from "/images/imagens-freelando/Imagens/ImagemCliente.png"
import Freela from "/images/imagens-freelando/Imagens/ImagemFreela.png"
import Links from "@/componentes/Links"
import { Link } from "react-router-dom"
import CabecalhoCadastro from "@/componentes/CabecalhoCadastro"

import { useCadastroUsuarioContext } from "../../Contexto/CadastroUsuario"

export default function SelecaoCliente() {
  const { setPerfil } = useCadastroUsuarioContext()

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <CabecalhoCadastro titulo="  Crie seu cadastro" />
        <CabecalhoCadastro subtitulo=" Como podemos te ajudar?" />
        <Row>
          <Col md={6} sm={12}>
            <Link
              to="interesses"
              onClick={() => setPerfil("cliente")}
              style={{ textDecoration: "none" }}
            >
              <img src={Cliente} alt="Imagem cliente" />
              <Tipografia variante="body" componente="body">
                Sou cliente e preciso de um freela!
              </Tipografia>
            </Link>
          </Col>
          <Col md={6} sm={12}>
            <img src={Freela} alt="Imagem cliente" />
            <Tipografia variante="body" componente="body">
              Sou freela e preciso de clientes!
            </Tipografia>
          </Col>
        </Row>
        <div>
          <Tipografia variante="body2" componente="body2">
            Já tem conta?
          </Tipografia>
          <p>
            <Links variante="secundaria">Faça login!</Links>
          </p>
        </div>
      </div>
    </>
  )
}
