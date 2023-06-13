import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutBase from "../../Paginas/LayoutBase"
import SelecaoCliente from "../../Paginas/cadastro/SelecaoCliente"
import Cabecalho from "../Cabecalho"
import Estilos from "../EstilosGlobais"
import LayoutBaseCadastro from "../LayoutBaseCadastro"
import ProvedorTema from "../ProvedorTema"
import Rodape from "../Rodape"
import DadosPessoais from "../../Paginas/cadastro/DadosPessoais"
import Interesses from "../../Paginas/cadastro/Interesses"
import Concluido from "../../Paginas/cadastro/Concluido"
import PaginaInicial from "../../Paginas/PaginaInicial/PaginaInicial"

export default function AppRoutes() {
  return (
    <>
      <ProvedorTema>
        <Estilos />
        <Cabecalho />
        <BrowserRouter>
          <Routes>
            <Route index element={<PaginaInicial />}></Route>
            <Route path="/" element={<LayoutBaseCadastro />}>
              <Route path="/selecao" element={<SelecaoCliente />}></Route>
              <Route path="selecao/interesses" element={<Interesses />}></Route>
              <Route path="/dadospessoais" element={<DadosPessoais />}></Route>
              <Route path="/cadastro/concluido" element={<Concluido />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Rodape />
      </ProvedorTema>
    </>
  )
}
