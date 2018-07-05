const Koa = require('koa')
const app = new Koa()
const Routes = require('./routes/v0')
const userSession = require('./middlewares/session')
const errCatcher = require('./middlewares/errCatcher')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')

require('./db')

app.keys = ['secret', 'key']

const CONFIG = {
  key: 'koa:user' /** (string) cookie key (default is koa:sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
}

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin)
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE, PATCH')
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type')
  ctx.set('Access-Control-Allow-Credentials', true)
  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = 204
    return
  }
  await next()
})

app.use(session(CONFIG, app))
app.use(errCatcher)
app.use(userSession)
app.use(logger())
app.use(bodyParser())
app.use(Routes.routes())

app.listen(6666)
console.log('Server is running at 6666...')
module.exports = app
