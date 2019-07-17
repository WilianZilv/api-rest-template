const express = require('express')

const Base = require('../models/base')

const router = express.Router()

router.get('/', async (req, res) => {
    
    res.send()
    
})


module.exports = app => app.use('/base', router)