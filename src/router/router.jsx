import { BrowserRouter, Route, Routes } from "react-router-dom"
import SelecaoCliente from "@/Paginas/cadastro/SelecaoCliente"
import Cabecalho from "@/componentes/Cabecalho"
import LayoutBaseCadastro from "@/componentes/LayoutBaseCadastro"
import Rodape from "@/componentes/Rodape"
import DadosPessoais from "@/Paginas/cadastro/DadosPessoais"
import Interesses from "@/Paginas/cadastro/Interesses"
import Concluido from "@/Paginas/cadastro/Concluido"
import PaginaInicial from "@/Paginas/PaginaInicial/PaginaInicial"
import Pagina404 from "@/Paginas/Erro"
import Login from "@/Paginas/Login"
import AreaLogada from "@/Paginas/AreaLogada"

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />       
          <Routes>
            <Route path="/" element={<PaginaInicial />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/arealogada" element={<AreaLogada />}></Route>
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
