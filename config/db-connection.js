import mongoose, { mongo } from "mongoose";

const dbUser = "tlrodrigues"
const dbPassword = "2925183030Actdf!"

const connect = () =>{
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.vbirz.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
    )

    const connection = mongoose.connection
    connection.on("error",()=>{
        console.log("Erro ao conectar com o mongoDB")
    })
    connection.on("open", ()=>{
        console.log("Conectado ao mongoDB com sucesso")
    })
}

connect()

export default mongoose