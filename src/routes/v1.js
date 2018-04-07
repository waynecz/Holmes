const Router = require('koa-router')
const { userControl } = require('../controllors')
const router = new Router({ prefix: '/apis/v1' })

router.get('/managers', userControl.getManagers)

module.exports = router
