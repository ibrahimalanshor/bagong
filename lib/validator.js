const { body } = require('express-validator')
const validating = require('./validation')
const handle = require('./helpers/validate')

const validator = rules => {
  const results = []

  for (let [name, rule] of Object.entries(rules)) {
    const result = validating.make(body(name), rule)

    results.push(result)
  }

  return [results, handle]
}

module.exports = validator