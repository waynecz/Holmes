class Boom {
  badRequest(message = 'Bad Request') {
    return { status: 400, name: message }
  }

  unAuthorize(message = '') {
    return { status: 401, name: `Unauthorize ${message}` }
  }

  conflictError(message = 'params') {
    return { status: 409, name: `Conflict ${message}` }
  }

  otherError(message = '') {
    return { status: 500, name: `Service Error: ${message}` }
  }
}

exports.Boom = new Boom()
