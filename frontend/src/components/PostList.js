import React, { useState, useEffect } from "react"
import axios from "axios"
import CommentCreate from "./CommentCreate"
import CommentList from "./CommentList"

const PostList = () => {
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
      <div key={post.id}>
        <div>
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
          <CommentList postId={post.id} />
        </div>
      </div>
    )
  })

  return <div>{renderPostList}</div>
}

export default PostList
