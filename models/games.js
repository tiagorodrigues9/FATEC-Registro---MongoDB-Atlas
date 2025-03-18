import mongoose from "mongoose";

// Documento aninhado

const descriptionSchema  = new mongoose.Schema({
    genre: String,
    plataform: String,
    rating: String
})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: [descriptionSchema] //Array de ojetos
})

// Aqui está sendo cirado a coleção games no banco de dados
const game = mongoose.model('game', gameSchema)
const description = mongoose.model('description', descriptionSchema)

export default game