import React from "react"
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react"

import PostList from "./components/PostList"
import CardPost from "./components/CardPost"
import CardPostList from "./components/CardPostList"

const App = () => {
  return (
    <ChakraProvider>
      <Box bg="#f0f2f5">
        <Container>
          <CardPost />
          <CardPostList />
        </Container>
      </Box>
    </ChakraProvider>
  )
}
export default App
