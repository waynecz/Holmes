const mongoose = require('mongoose')

const uesrSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    security_level: Number
  },
  {
    collection: 'users',
    timestamps: true
  }
)

module.exports = mongoose.model('User', uesrSchema)
