import React from "react"
import { ChakraProvider, Box, Container } from "@chakra-ui/react"

import CardPostCreate from "./components/CardPostCreate"
import CardPostList from "./components/CardPostList"

const App = () => {
  return (
    <ChakraProvider>
      <Box bg="#f0f2f5">
        <Container>
          <CardPostCreate />
          <CardPostList />
        </Container>
      </Box>
    </ChakraProvider>
  )
}
export default App
