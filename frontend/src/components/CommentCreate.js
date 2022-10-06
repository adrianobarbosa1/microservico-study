import React, { useState } from "react"
import { Flex, Avatar, Divider, Button, Text, Input } from "@chakra-ui/react"
import axios from "axios"

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("")

  const onSubmit = async (e) => {
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    })

    setContent("")
  }

  return (
    <Flex as="form" onSubmit={onSubmit} align="center" mt="1rem">
      <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
      <Input
        ml="1rem"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Criar Comentario"
      />
      <Button ml="1rem" type="submit">
        Enviar
      </Button>
    </Flex>
  )
}

export default CommentCreate
