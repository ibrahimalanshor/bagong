const { HttpException, ValidationError, AuthenticationError, NotFound } = require('../exceptions')

module.exports = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.status).json(err)
  } else if (err instanceof AuthenticationError) {
    return res.status(err.status).json(err)
  } else if (err instanceof NotFound) {
    return res.status(err.status).json(err)
  } else if (err instanceof HttpException) {
    return res.status(err.status).json(err)
  }

  return res.status(500).json({
    status: 500,
    message: err.message
  })
}