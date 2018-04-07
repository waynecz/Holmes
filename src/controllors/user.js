const { userModel } = require('../models')

exports.get = async ctx => {
  const { email } = ctx.session.user

  ctx.body = await userModel.findOne({ email })
}
