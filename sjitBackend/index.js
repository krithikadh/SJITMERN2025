const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Backend</h1>")
})

app.get("/static",(req,res)=>{
    res.sendFile("D:\\SJITMERN2025\\DAY 3\\index.html")
})

const PORT =3001

app.listen(PORT,()=>console.log("Server Started Successfully"))