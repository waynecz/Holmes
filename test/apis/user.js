const request = require('../request')
const { userModel } = require('../../src/models')
const assert = require('assert')
const { keys, mockUser, password } = require('../data/user')

describe('test login', () => {
  before(async () => {
    await userModel.create(mockUser)
  })

  describe(`GET /api/0/login`, () => {
    let API = '/api/0/login'

    it('return 200 when login', async () => {
      let res = await request
        .post(API)
        .send({
          name: mockUser.name,
          password
        })
        .expect(200)

      keys.forEach(key => {
        assert(Object.keys(res.body).includes(key))
      })
    })
  })

  after(async () => {
    await userModel.remove({})
  })
})
