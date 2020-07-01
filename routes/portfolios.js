const express = require('express');
const router = express.Router();

router.get('/portfolio', (req, res) => {
    res.json({message: "This will return my portfolios"})
})

module.exports = router;