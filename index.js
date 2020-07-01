const express = require('express');
const server = express();
const portfolioRoutes = require('./routes/portfolios')

let PORT = 3001

server.get('/health', (req, res) => {
    return res.json({status: 'Up'})
})


server.use('/api/v1', portfolioRoutes);

server.listen(PORT, err => {
    if (err) console.error("Error while starting server")
    console.log(`Server started at port ${PORT}`)
})