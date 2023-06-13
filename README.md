<h1>Curso da Alura Freelando, em andamento...</h1>

<h3>Iniciar</h3>

Após baixar o projeto, abra o terminal e digite npm i para instalar as dependências do projeto. Após a instalação, digite npm run dev no terminal para iniciar o servidor de desenvolvimento. Neste projeto foi utilizado o Vite como ferramenta de build, tornando a inicialização do servidor mais rápida e eficiente do que o método tradicional utilizando o npm start.

<h3>Aprendizado</h3>

Nesse curso aprendi que o Emotion é uma biblioteca popular de CSS em JavaScript, que permite estilizar componentes React de forma mais flexível e dinâmica. Ele usa uma sintaxe baseada em tagged template strings para definir estilos no JavaScript.

Com o Emotion, é possível aplicar estilos globais para toda a sua aplicação, bem como estilos específicos para componentes individuais.

```
emotion - npm i @emotion/styled @emotion/react
```

```
EstilosGlobais/index.jsx
import { Global, css } from "@emotion/react"

const estilos = css`
  * {
    font-family: "Montserrat", sans-serif;
  }
`

export const Estilos = () => {
  return <Global styles={estilos} />
}
```
```
App.jsx
import { Estilos } from "./componentes/EstilosGlobais"

export default function App() {
  return (
    <div>
      <Estilos />
      <h1>Freelando</h1>
    </div>
  )
}
```

Foi desenvolvido um componente que tem como objetivo fornecer os temas para a aplicação. Esse componente utiliza a biblioteca "styled" para consumir e aplicar o tema escolhido.

```
ProvedorTema/index.jsx
import { ThemeProvider } from "@emotion/react"

const tema = {
    },
    secundarias: {
       },
    neutras: {
    },
    dark: {
    },
  },
  espacamentos: {
  },
}

export default function ProvedorTema({ children }) {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>
}
```
```
Card/index.jsx
import styled from "@emotion/styled"

const DivEstilizada = styled.div`
  padding: ${(props) => props.theme.espacamentos.l};
  background: ${(props) => props.theme.cores.secundarias.a};
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.primarias.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
`

export default function Card({ children }) {
  return <DivEstilizada>{children}</DivEstilizada>
}
```
em App.jsx o card fica dentro de ProvedorTema

```
em App.jsx o card fica dentro de ProvedorTema
<ProvedorTema>
<Card>conteudo...</Card>
</ProvedorTema>
```

Foi criado um componente chamado "Tipografia" que permite selecionar dinamicamente uma tag HTML para ser utilizada em outros componentes durante a execução da aplicação. Esse recurso possibilita a flexibilidade de definir a estrutura de marcação de forma dinâmica, adaptando-se às necessidades do usuário em tempo real.

```
Tipografia/index.jsx
import styled from "@emotion/styled"

const componentes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  bodyBold: "strong",
  body2: "p",
  body2Bold: "strong",
  legenda: "p",
}

const estilos = {
  h1: `
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
  `,
  h2: `
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    `,
  h3: `
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    `,
  body: `
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  `,
  bodyBold: `
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    `,
  body2: `
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    `,
  body2Bold: `
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    `,
  legenda: `
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    `,
}
export default function Tipografia({ variante, componente, children }) {
  const tag = componentes[componente]
  const ComponenteUtilizado = styled[tag]`
    ${estilos[variante]}
  `

  return <ComponenteUtilizado>{children}</ComponenteUtilizado>
}
```
```
App.jsx
 <Tipografia variante="h3" componente="h1">
          Freelando
 </Tipografia>
```

Adquiri conhecimento sobre o Grid System, que é uma biblioteca utilizada para criar layouts responsivos. Através dela, é possível trabalhar com containers, linhas e colunas, permitindo a organização e disposição dos elementos na página de maneira eficiente. Uma funcionalidade importante é a capacidade de atribuir pesos diferentes para as colunas, com base na largura da tela, possibilitando um ajuste automático e adaptável conforme o dispositivo utilizado.
```
npm install react-grid-system --save
```
```
   <Container style={{ margin: "auto", padding: '70px 0' }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h3" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo="Estado"></CampoTexto>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="E-mail"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha"></CampoTexto>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a senha"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "left" }}>
                    <Botao variante="secundaria">Anterior</Botao>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Botao>Proxima</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
```
