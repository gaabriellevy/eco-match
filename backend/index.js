const port = 3335

const express = require("express") // importa o framework express
const db = require("./database") // importa o banco de dados

const app = express() // instancia o express

// const itemController = require('./controllers/item') // tudo relacionado ao item é controlado por essa classe para fim de abstração

app.use(express.json()) // transforma a requisição em formato json para objeto javascript

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`)) // sincroniza com o banco de dados

app.listen(port, () => { // escuta as requisições na porta declarada
    console.log(`Servidor iniciado na porta ${port}`)
})