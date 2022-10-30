import axios from "axios"
import { NextPage } from "next"

interface Props {
  usuarioAtual?: string
}

const Home: NextPage<Props> = ({ usuarioAtual }) => {
  console.log(usuarioAtual)
  return (
    <div>
      <h1>teste</h1>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/usuarios/usuarioAtual",
      {
        headers: req.headers,
      }
    )
    return data
  } else {
    const { data } = await axios.get("/api/usuarios/usuarioAtual")
    return data
  }
}

export default Home
