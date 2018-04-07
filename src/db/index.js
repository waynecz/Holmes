const config = require('config')
const mongoose = require('mongoose')
mongoose.Promise = Promise
;(async () => {
  await mongoose.connect('mongodb://localhost:30017/million', {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
  })
  mongoose.connection.on('error', console.error)
})()
