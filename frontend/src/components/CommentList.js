import React, { useState, useEffect } from "react"
import { Flex, Avatar, Button, Box, Input } from "@chakra-ui/react"
import axios from "axios"

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([])

  const fetchComment = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    )
    setComments(res.data)
  }

  useEffect(() => {
    fetchComment()
  }, [])

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
