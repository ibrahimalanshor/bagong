const { validationResult } = require('express-validator')
const { ValidationError } = require('../exceptions')

module.exports = (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      throw new ValidationError('Validation error', errors.mapped())
    }

    next()
  } catch (err) {
    next(err)
  }
}