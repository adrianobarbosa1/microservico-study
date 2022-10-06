import { Flex, Avatar, Text, Box, Divider } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import axios from "axios"
import CommentCreate from "./CommentCreate"
import CommentList from "./CommentList"

const CardPostList = () => {
  const [post, setPost] = useState({})

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts")
    setPost(res.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  const renderPostList = Object.values(post).map((post) => {
    return (
      <Flex
        boxShadow="md"
        p="1rem"
        rounded="md"
        bg="white"
        borderRadius="md"
        mt="1rem"
        direction="column"
        key={post.id}
      >
        <Flex align="center">
          <Avatar src="https://bit.ly/sage-adebayo" />
          <Text ml="1rem">Adriano Barbosa</Text>
        </Flex>
        <Box h="200px" mt="2rem" boxShadow="inner" borderRadius="md">
          <Text ml="1rem" mt="1rem">
            {post.title}
          </Text>
        </Box>
        <Divider color="gray" />
        <CommentCreate postId={post.id} />
        <CommentList postId={post.id} />
      </Flex>
    )
  })

  return <div>{renderPostList}</div>
}

export default CardPostList
