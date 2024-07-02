import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://root:root@cluster0.9gvwkkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

let documentosColecao;

try {
    await cliente.connect()

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado com sucesso ao MongoDB")
} catch (error) {
    console.log(error)
}

export  {documentosColecao};