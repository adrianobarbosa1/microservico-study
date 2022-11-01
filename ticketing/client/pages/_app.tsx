import * as React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "../styles/createEmotionCache"
import theme from "../styles/theme"
import BuildClient from "../api/build-client"
import Header from "../components/header"
import { GetServerSideProps } from "next"

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    usuarioAtual,
  } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header usuarioAtual={usuarioAtual} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.getInitialProps = async (appCtx) => {
  const client = await BuildClient(appCtx.ctx)
  const { data } = await client.get("/api/usuarios/usuarioAtual")

  let pageProps = {}
  if (appCtx.Component.getInitialProps) {
    pageProps = await appCtx.Component.getInitialProps(appCtx.ctx)
  }

  return {
    pageProps,
    ...data,
  }
}

export default MyApp
