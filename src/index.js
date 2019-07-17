const express = require('express')
const app = express()

app.use(express.json())

require('./controllers/baseController')(app)

app.listen(3000)
