import express from "express"

const router = express.Router()

router.post("/api/uruarios/desconectar", (req, res) => {
  res.send("hi there")
})

export { router as desconectarRouter }
