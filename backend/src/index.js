const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
require("dotenv").config()
const port = process.env.PORT

// MIDDLEWARE
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = require("./config/db")


// ROUTES 
const user = require("./routes/user/users") 
app.use("/user", user)

// REPONSE DU SERVEUR
app.get("/", (req,res) =>{
    res.send("weeeeesh")
})
app.listen(port, () => {
    console.log("serveur ca marche le s")
})   