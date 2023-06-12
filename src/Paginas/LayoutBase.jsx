import { Outlet } from "react-router-dom"
import Cabecalho from "../componentes/Cabecalho"
import Rodape from "../componentes/Rodape"

export default function LayoutBase() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}
