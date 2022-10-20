import express from "express"

const router = express.Router()

router.post("/api/uruarios/conectar", (req, res) => {
  res.send("hi there")
})

export { router as conectarRouter }
