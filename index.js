import express from 'express'
import mongoose from 'mongoose'
import game from "./models/games.js"
const app = express()

// Importando as rotas (Endpoints) de Games
import gameRoutes from './routes/gameRoutes.js'

// Configurações do Express
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/", gameRoutes)

// Iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegame")

// Rota Principal
app.get("/", (req, res) =>{
   // res.send("API iniciado com sucesso!")
   const games = [
    {
        title: "Game 1",
        year: 2020,
        plataform: "PC",
        price: 20
   },
   {
        title: "Game 2",
        year: 2025,
        plataform: "Playstation 5",
        price: 200,
   },
   ]
   res.json(games)
})

// Iniciando o servidor
const port = 4000
app.listen(port, (error) =>{
    if(error){
        console.log(error)
    } else {
        console.log(`API rodando em http://localhost:${port}.`)
    }
})