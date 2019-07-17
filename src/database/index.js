const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bossabox', { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose