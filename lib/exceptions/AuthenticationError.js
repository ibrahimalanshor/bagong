const HttpException = require('./HttpException')

class AuthenticationError extends HttpException {

  constructor(message) {
    super(message, 401)
  }

}

module.exports = AuthenticationError