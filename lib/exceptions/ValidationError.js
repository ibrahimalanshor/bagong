const HttpException = require('./HttpException')

class ValidationError extends HttpException {

  constructor(message, errors) {
    super(message, 422)

    this.errors = errors
  }

}

module.exports = ValidationError