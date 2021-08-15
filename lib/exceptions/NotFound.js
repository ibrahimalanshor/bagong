const HttpException = require('./HttpException')

class NotFound extends HttpException {

  constructor(message) {
    super(message, 404)
  }

}

module.exports = NotFound