const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("DevOps CI/CD Pipeline Running 🚀")
})

app.listen(3000, () => {
  console.log("Server started")
})
