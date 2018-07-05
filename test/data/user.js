const md5 = require('md5')

module.exports = {
  mockUser: {
    name: 'mockUser',
    email: 'mockUser@sth.com',
    password: md5('123456qq')
  },
  password: '123456qq',
  keys: ['_id', 'name', 'email']
}
