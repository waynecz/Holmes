const { mongoHost, collectionName } = require('config')
const mongoose = require('mongoose')
mongoose.Promise = Promise
;(async () => {
  await mongoose.connect(
    `mongodb://${mongoHost}/${collectionName}`,
    {
      useMongoClient: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000
    }
  )
  mongoose.connection.on('error', console.error)
})()
