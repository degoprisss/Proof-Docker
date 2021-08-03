const express = require('express')
const { proofQuery } = require('./server')

const app = express()

const PORT = 3000
app.get('/', (req, res) => {
    try {
        res.send('Estamos trabajando')
    } catch (error) {
        console.log(error)
    }
})

proofQuery()

app.listen(PORT, () => {
    console.log('Estamos trabjando sobre el puerto ' + PORT)
})