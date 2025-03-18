import gameService from '../services/gameService.js'
import { ObjectId } from 'mongodb'

const getAllGames = async (req, res) =>{
    try{
        const games = await gameService.getAll()
        // Requisição feita com sucesso - Cod. 200 (OK)
        res.status(200).json({games : games})
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Erro interno do servidor.'})
    }
}

// Função para cadastrar jogos

const createGame = async(req, res)=>{
    try{
        // Cpturando valores
        const {title, year, price, descriptions} = req.body
        // Cadastrando no banco
        await gameService.Create(title, year, price, descriptions)
        res.sendStatus(201)
    }catch(error){
        console.log(error)
        res.status(500).jason({error: 'Erro interno do servidor'})
    }
}

const deleteGame = async(req, res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            gameService.Delete(id)
            res.sendStatus(204)
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Erro interno do servidor'})
    }
}

const updateGame = async (req, res) =>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const {title, year, price, descriptions} = req.body
            gameService.Update(id, title, year, price, descriptions)
            res.sendStatus(200)
        }else{
            res.sendStatus(400)
        }
    }catch (error){
        console.log(error)
        res.status(500).json({error: "Erro interno no servidor"})
    }
}

const getOneGame = async (req,res) =>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const game = await gameService.getOne(id)
            if(!game){
                res.sendStatus(404)
            }else{
                res.status(200).json({ game })
            }
        }else{
            res.sendStatus(400)
        }

    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

export default {getAllGames, createGame, deleteGame, updateGame, getOneGame}