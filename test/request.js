const app = require('../src/app')
const appObj = app.listen(4000)
const request = require('supertest')(appObj)

module.exports = request
