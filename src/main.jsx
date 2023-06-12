import React from "react"
import ReactDOM from "react-dom/client"
import AppRoutes from "./componentes/router/router.jsx"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
