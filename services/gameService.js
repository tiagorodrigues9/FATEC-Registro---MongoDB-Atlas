import game from "../models/games.js"

class gameService{
    // game.find().then(game =>{
    // Sucesso
    // }).catch(error =>{
    //     // Falha
    // })

    // Async / Await
    // Função para listar os jogos
    async getAll(){
        try{
            const games = await game.find()
            return games
        }catch(error){
            console.log(error)
        }
    }

    async Create(title, year, price, descriptions){
        try{
            const newGame = new game({
                title,
                year, 
                price, 
                descriptions
            })
            // Método do mongoose para cadastrar .save()
            await newGame.save()
        }catch(error){
            console.log(error)
        }
    }

    async Delete(id){
        try{
            await game.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi excluído com sucesso.`)
        }catch(error){
            console.log(error)
        }
    }

    async Update(id, title, year, price, descriptions){
        try{
            await game.findByIdAndUpdate(id,{
                title, 
                year, 
                price, 
                descriptions
            })
            console.log(`Dados do game com a id: ${id} alterados com sucesso.`)
        }catch(error){
            console.log(error)
        }
    }

    async getOne(id){
        try{
            const games = await game.findOne({ _id:id })
            return games
        }catch(error){
            console.log(error)
        }
    }
}

export default new gameService()