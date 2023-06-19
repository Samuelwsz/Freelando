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
import Pagina404 from "../../Paginas/Erro"
import Login from "../../Paginas/Login"

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<PaginaInicial />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<LayoutBaseCadastro />}>
            <Route path="/selecao" element={<SelecaoCliente />}></Route>
            <Route path="selecao/interesses" element={<Interesses />}></Route>
            <Route path="/dadospessoais" element={<DadosPessoais />}></Route>
            <Route path="/cadastro/concluido" element={<Concluido />}></Route>
            <Route path="*" element={<Pagina404 />}></Route>
          </Route>
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  )
}
