import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "next/link"

export default function ButtonAppBar({ usuarioAtual }) {
  const links = [
    !usuarioAtual && { label: "Cadastrar", href: "/auth/cadastrar" },
    !usuarioAtual && { label: "Login", href: "/auth/conectar" },
    usuarioAtual && { label: "Sair", href: "/auth/desconectar" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href}>
          <Link href={href}>{label}</Link>
        </li>
      )
    })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          {links}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
