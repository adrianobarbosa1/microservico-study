import React from "react"
import { Flex, Avatar } from "@chakra-ui/react"

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content
    if (comment.status === "approved") {
      content = comment.content
    }

    if (comment.status === "pending") {
      content = "Esse comentario está esperando aprovação"
    }

    if (comment.status === "rejected") {
      content = "Esse comentario é improprio e foi rejeitado"
    }

    return (
      <Flex align="center" mt="1rem" key={comment.id}>
        <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
        <Flex
          align="center"
          h="30px"
          borderTopRadius="20px"
          borderBottomRadius="20px"
          p="1rem"
          ml="1rem"
          color="#65676b"
          bg="#e4e6e9"
        >
          {content}
        </Flex>
      </Flex>
    )
  })

  return <>{renderedComments}</>
}

export default CommentList
