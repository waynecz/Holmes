module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log('error', error)
    let { status = 500, name = 'UNKNOWN_ERROR', message } = error

    if (!message) message = name

    ctx.status = status
    ctx.body = { name, message }
  }
}
