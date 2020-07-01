const express = require('express');
const server = express();

let PORT = 3001

server.get('/health', (req, res) => {
    return res.json({status: 'Up'})
})

server.listen(PORT, err => {
    if (err) console.error("Error while starting server")
    console.log(`Server started at port ${PORT}`)
})