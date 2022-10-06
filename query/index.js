const express = require("express")
const { randomBytes } = require("crypto")
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get("/posts", (req, res) => {
  res.send(posts)
})

app.post("/events", (req, res) => {
  const { type, data } = req.body

  if (type === "PostCriado") {
    const { id, title } = data
    posts[id] = { id, title, comments: [] }
  }

  if (type === "ComentarioCriado") {
    const { id, content, postId } = data
    const post = posts[postId]
    post.comments.push({ id, content })
  }

  console.log(posts)

  res.send(posts)
})

app.listen(4002, () => {
  console.log("Executando na porta 4002 Query")
})
