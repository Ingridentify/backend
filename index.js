require('dotenv').config()
const express = require('express')
const route = require("./src/routes/route.js")
const cors = require('cors')

//Middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//routing
app.get("/", (req, res) => {
    res.send("<h1>Selamat datang di backend Ingridentify</h1>");
  })
app.use ("/ingridentify", route)

//server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Ingridentify listening to port ${port}`)
})