const { userModel } = require('../models')
const { Boom } = require('../utils')
const md5 = require('md5')

exports.get = async ctx => {
  const { _id } = ctx.session.user

  const user = await userModel.findById(_id).select('email name')

  if (!user) throw Boom.badRequest('User not found')

  ctx.body = user
}

exports.login = async ctx => {
  const { name, password } = ctx.request.body

  if (!name || !password) {
    throw Boom.badRequest('Wrong username or password')
  }

  const user = await userModel.findOne({ name })

  if (!user) {
    throw Boom.badRequest('Wrong username')
  }

  if (md5(password) !== user.password) {
    throw Boom.badRequest('Wrong password')
  }

  const sessionUser = { _id: user._id, name: user.name, email: user.email }

  ctx.session.user = sessionUser
  ctx.body = sessionUser
}
