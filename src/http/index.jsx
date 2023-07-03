import axios from "axios"
import { ArmazenadorToken } from "../utils/ArmazenadorToken"

const http = axios.create({
  baseURL: "http://localhost:8081/",
})

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = ArmazenadorToken.accessToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      console.log("Token adicionado")
    }
    return config
  },
  function (error) {
    // Do something with request error return
    Promise.reject(error)
  }
)

const rotasIgnoradasPelosErros = ["auth/login", "auth/refresh"]

const tentarRenovarToken = async () => {
  const token = ArmazenadorToken.refreshToken
  return axios
    .get("http://localhost:8081/auth/refresh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resposta) => {
      ArmazenadorToken.definirTokens(
        resposta.data.access_token,
        resposta.data.refresh_token
      )
    })
}

const lidarComErro401 = async (erro) => {
  await tentarRenovarToken().then(() => http(erro.config))
  return Promise.reject(erro)
}

// Add a response interceptor
http.interceptors.response.use(
  (response) => response,
  function (error) {
    if (
      !rotasIgnoradasPelosErros.includes(error.config.url) &&
      error.response.status === 401
    ) {
      return lidarComErro401(error)
    }

    return Promise.reject(error)
  }
)

export default http
