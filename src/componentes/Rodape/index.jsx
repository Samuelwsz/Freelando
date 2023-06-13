import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"
import Tipografia from "../Tipografia"
import FreelandoLogo from "../Icones/FreelandoLogo"
import { ListaInline } from "../Lista/ListaInline"
import { ItemListaInline } from "../Lista/ItemListaInline"
import IconeWhatsApp from "../Icones/IconeWhatsApp"
import IconeTwitch from "../Icones/IconeTwitch"
import IconeInstagram from "../Icones/IconeInstagram"
import IconeTwitter from "../Icones/IconeTwitter"

const Footer = styled.footer`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl};
  color: ${(props) => props.theme.cores.branco};
  margin-top: ${(props) => props.theme.espacamentos.xl};
`

export default function Rodape() {
  return (
    <Footer>
      <Container>
        <Row align="center">
          <Col>
            <FreelandoLogo height={40} width={170} />
            <Tipografia variante="legenda" componente="legenda">
              Desenvolvido por Alura. Projeto fictício sem fins comerciais.
            </Tipografia>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Tipografia variante="legenda" componente="legenda">
              Acesse nossas redes:
            </Tipografia>
            <ListaInline>
              <ItemListaInline>
                <a href="/" aria-label="Link para o WhatsApp">
                  <IconeWhatsApp />
                </a>
              </ItemListaInline>
              <ItemListaInline>
                <a href="/" aria-label="Link para a Twitch">
                  <IconeTwitch />
                </a>
              </ItemListaInline>
              <ItemListaInline>
                <a href="/" aria-label="Link para a Instagram">
                  <IconeInstagram />
                </a>
              </ItemListaInline>
              <ItemListaInline>
                <a href="/" aria-label="Link para a Twitter">
                  <IconeTwitter />
                </a>
              </ItemListaInline>
            </ListaInline>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}
