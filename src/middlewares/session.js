const { Boom } = require('../utils')
const whiteList = ['/ping', '/api/0/login']

module.exports = async (ctx, next) => {
  if (ctx.session.user) {
    await next()
  } else if (whiteList.includes(ctx.url)) {
    await next()
  } else {
    throw Boom.unAuthorize()
  }
}
