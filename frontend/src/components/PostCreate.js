import React, { useState } from "react"
import { Flex, Box, Button, Text, Input } from "@chakra-ui/react"
import axios from "axios"

const PostCreate = () => {
  const [title, setTitle] = useState("")

  const onSubmit = async (e) => {
    await axios.post("http://localhost:4000/posts", {
      title,
    })

    setTitle("")
  }

  return (
    <Flex as="form" onSubmit={onSubmit} w="100%" mt="1rem">
      <Box w="100%">
        <Input
          mt="1rem"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Titulo do post"
          variant="unstyled"
        />
        <Button type="submit" mt="5rem" p="1rem" mb="1rem" w="100%">
          Publicar
        </Button>
      </Box>
    </Flex>
  )
}

export default PostCreate
