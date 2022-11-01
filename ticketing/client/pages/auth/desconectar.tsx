import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Desconectar = () => {
  const [errors, setErrors] = useState([])
  const router = useRouter()

  const doRquest = async () => {
    try {
      const response = await axios.post("/api/usuarios/desconectar")
      response.data
      router.push("/")
    } catch (err) {
      setErrors(err.response?.data.errors)
    }
  }

  useEffect(() => {
    doRquest()
  }, [])

  return <h1>Desconectando...</h1>
}

export default Desconectar
