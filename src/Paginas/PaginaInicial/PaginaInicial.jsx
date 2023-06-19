import Banner from "@/componentes/Banner"
import Bloco from "./Bloco"
import { cardsCliente, cardsFreela, habilidades } from "./Dados"
import { Col, Container } from "react-grid-system"
import CardFreela from "./Vantagens/cards/CardFreela"
import CardCliente from "./Vantagens/cards/CardCliente"
import Chip from "@/componentes/Chip"

export default function PaginaInicial() {
  return (
    <>
      <Banner />
      <Container>
        <Bloco cards={cardsCliente} titulo="Vantagens para contratantes">
          {cardsCliente.map((card) => (
            <CardCliente
              key={card.texto}
              icone={card.icone}
              texto={card.texto}
            />
          ))}
        </Bloco>
        <Bloco cards={cardsFreela} titulo="Vantagens para freelas">
          {cardsFreela.map((card) => (
            <CardFreela
              key={card.texto}
              icone={card.icone}
              texto={card.texto}
            />
          ))}
        </Bloco>
        <Bloco
          cards={cardsFreela}
          titulo="Quais habilidades você encontra por aqui?"
        >
          <Col sm={12}>
            {habilidades.map((habilidade) => (
              <Chip key={habilidade}>{habilidade}</Chip>
            ))}
          </Col>
        </Bloco>
      </Container>
    </>
  )
}
