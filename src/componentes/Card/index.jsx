import styled from "@emotion/styled"

const DivEstilizada = styled.div`
  padding: ${(props) => props.theme.espacamentos.l};
  background: ${(props) =>
    props.variante === "primaria"
      ? props.theme.cores.secundarias.a
      : props.theme.cores.secundarias.c};
  border: ${(props) => (props.comBorda ? "1px solid" : "none")};
  border-color: ${(props) =>
    props.variante === "primaria"
      ? props.theme.cores.primarias.a
      : props.theme.cores.primarias.c};
  border-radius: ${(props) => props.theme.espacamentos.s};
`

export default function Card({
  children,
  comBorda = true,
  variante = "primaria",
}) {
  return (
    <DivEstilizada comBorda={comBorda} variante={variante}>
      {children}
    </DivEstilizada>
  )
}
