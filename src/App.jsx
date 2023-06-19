import ProvedorTema from "./componentes/ProvedorTema"
import Estilos from "./componentes/EstilosGlobais"
import AppRoutes from "./router/router"
import { SessaoUsuarioProvider } from "./Contexto/SessaoUsuario"

export default function App() {
  return (
    <>
      <ProvedorTema>
        <Estilos />
        <SessaoUsuarioProvider>
          <AppRoutes />
        </SessaoUsuarioProvider>
      </ProvedorTema>
    </>
  )
}
