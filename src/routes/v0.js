const Router = require('koa-router')
const { userControl } = require('../controllors')
const router = new Router({ prefix: '/api/0' })

router.post('/login', userControl.login)
router.get('/user', userControl.get)

module.exports = router
