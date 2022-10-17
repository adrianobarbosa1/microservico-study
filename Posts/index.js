const express = require("express")
const { randomBytes } = require("crypto")
const cors = require("cors")
const axios = require("axios")

const app = express()
app.use(express.json())
app.use(cors())

//banco de dados na memoria
const posts = {}

app.get("/posts", (req, res) => {
  res.send(posts)
})

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex")
  const { title } = req.body

  posts[id] = {
    id,
    title,
  }

  await axios.post("http://event-bus-srv:4005/events", {
    type: "PostCriado",
    data: {
      id,
      title,
    },
  })

  res.status(201).send(posts[id])
})

app.post("/events", (req, res) => {
  console.log("evento recebido", req.body.type)

  res.send({})
})

app.listen(4000, () => {
  console.log("Executando na porta 4000 POST")
})
