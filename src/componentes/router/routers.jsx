import { createBrowserRouter } from "react-router-dom"
import SelecaoCliente from "../../Paginas/cadastro/SelecaoCliente"
import LayoutBase from "../../Paginas/LayoutBase"
import LayoutBaseCadastro from "../LayoutBaseCadastro"
LayoutBaseCadastro

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "cadastro",
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: "",
            element: <SelecaoCliente />,
          },
        ],
      },
    ],
  },
])
