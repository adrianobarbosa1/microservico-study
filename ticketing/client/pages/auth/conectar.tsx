import * as React from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Conectar() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [errors, setErrors] = useState([])
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/usuarios/conectar", {
        email,
        senha,
      })
      console.log(response)
      response.data
      router.push("/")
    } catch (err) {
      setErrors(err.response?.data.errors)
    }
  }

  return (
    <Box height="100vh" sx={{ backgroundColor: "#EEEEF2" }}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon sx={{ backgroundColor: "primary.main" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Conectar
          </Typography>
          <Box
            sx={{
              boxShadow: 3,
              p: "2rem",
              borderRadius: "0.5rem",
              mt: "2rem",
              backgroundColor: "#fff",
            }}
          >
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="senha"
                    label="Senha"
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </Grid>
              </Grid>
              {errors?.length > 0 && (
                <Grid>
                  <List>
                    <ListItem>
                      {errors?.map((err) => (
                        <ListItemText key={err.message}>
                          {err.message}
                        </ListItemText>
                      ))}
                    </ListItem>
                  </List>
                </Grid>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* <Link href="#" variant="body2"> */}
                  <Link href="#">Já tem uma conta? Conectar</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
