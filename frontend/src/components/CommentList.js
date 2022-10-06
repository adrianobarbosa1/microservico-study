import React from "react"
import { Flex, Avatar } from "@chakra-ui/react"

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    return (
      <Flex align="center" mt="1rem">
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
          {comment.content}
        </Flex>
      </Flex>
    )
  })

  return <>{renderedComments}</>
}

export default CommentList
