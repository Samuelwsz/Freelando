import styled from "@emotion/styled"
import Tipografia from "../../componentes/Tipografia"
import { Row } from "react-grid-system"

const ContainerEstilizado = styled.div`
  text-align: center;
  padding-top: ${(props) => props.theme.espacamentos.s};
`

export default function Bloco({ titulo, children }) {
  return (
    <ContainerEstilizado>
      <Tipografia componente="h2" variante="h2">
        {titulo}
      </Tipografia>
      <Row>{children}</Row>
    </ContainerEstilizado>
  )
}
