const express = require('express')
const bodyParser = require('body-parser')
const userRoutes  = require('../node.js api/routes/userRoute')
const cors = require ('cors')

const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use('/api', userRoutes)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})