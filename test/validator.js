const validator = require('../lib/validator')

const rules = {
  name: ['required', 'string']
}

console.log( validator(rules) )