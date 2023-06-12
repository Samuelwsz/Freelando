import { RouterProvider } from "react-router-dom"
import { router } from "./componentes/router/routers"
import ProvedorTema from "./componentes/ProvedorTema"
import Estilos from "./componentes/EstilosGlobais"

export default function App() {
  return (
    <>
      <ProvedorTema>
        <Estilos />
        <RouterProvider router={router} />
      </ProvedorTema>
    </>
  )
}
