const express = require('express')
const cors = require('cors')
const router = require('./nodeMysql/src/routes/routes')
const app = express()
const port = 3001
var path = require('path')
app.use(cors())
app.use(express.json())
app.use(router)

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    const number = Math.random()
    response.render(path.join(__dirname, 'src/views/index.ejs'), {variavel: number})
})

app.listen(port,() => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})

