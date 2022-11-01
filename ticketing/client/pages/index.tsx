import { NextPage } from "next"
import BuildClient from "../api/build-client"

interface Props {
  usuarioAtual?: string
}

const Home: NextPage<Props> = ({ usuarioAtual }) => {
  return usuarioAtual ? (
    <h1>você está conectado</h1>
  ) : (
    <h1>voce NÃO está conectado</h1>
  )
}

Home.getInitialProps = async (ctx) => {
  const client = await BuildClient(ctx)
  const { data } = await client.get("/api/usuarios/usuarioAtual")
  return data
}
export default Home
