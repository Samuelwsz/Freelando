import { Col } from "react-grid-system"
import Card from "@/componentes/Card"
import Tipografia from "@/componentes/Tipografia"
import styled from "@emotion/styled"

const SpanEstilizado = styled.span`
  color: ${(props) => props.theme.cores.primarias.a};
`

export default function CardCliente({ icone, texto }) {
  return (
    <Col sm={6} md={6} lg={3} style={{ marginBottom: "24px" }}>
      <Card comBorda={false}>
        {icone}
        <Tipografia componente="body" variante="body">
          <SpanEstilizado>{texto}</SpanEstilizado>
        </Tipografia>
      </Card>
    </Col>
  )
}
