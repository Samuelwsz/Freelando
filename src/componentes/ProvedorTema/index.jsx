import { ThemeProvider } from "@emotion/react"

const tema = {
  cores: {
    branco: "#FFF",
    atencao: "#FF0E0E",
    focus: "#B009FF",
    primarias: {
      a: "#5754ED",
      b: "#D93114",
      c: "#168070",
    },
    secundarias: {
      a: "#F8F8FD",
      b: "#FDF8F8",
      c: "#EBFCF9",
    },
    neutras: {
      a: "#373737",
      b: "",
      c: "#F5F5F5",
    },
    dark: {
      a: "#110EA0",
      b: "#B61B00",
    },
  },
  espacamentos: {
    s: "16px",
    l: "32px",
    m: "24px",
    xs: "8px",
    xl: "48px",
    xxl: "64px",
  },
  fontFamily: "'Montserrat', sans-serif;",
}

export default function ProvedorTema({ children }) {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>
}
