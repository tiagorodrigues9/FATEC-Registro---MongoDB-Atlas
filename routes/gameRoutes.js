import express from 'express'
const gameRoutes = express.Router()
import gameController from '../controllers/gameController.js'

// Endpoint para listar todos os games (rota)
gameRoutes.get("/games", gameController.getAllGames)

gameRoutes.post("/games", gameController.createGame)

gameRoutes.delete("/games/:id", gameController.deleteGame)

gameRoutes.put("/games/:id", gameController.updateGame)

gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes