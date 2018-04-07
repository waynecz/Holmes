const { userModel } = require('../models')
const { Boom } = require('../utils/boom')

module.exports = async (ctx, next) => {
  if (ctx.session.user) {
    await next()
  } else if (['/ping', '/'].includes(ctx.url)) {
    await next()
  } else {
    throw Boom.unAuthorize()
  }
}
