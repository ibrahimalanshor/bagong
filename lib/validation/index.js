const validator = {
  required: body => {
    return body.exists().withMessage('required').bail()
  },
  string: body => {
    return body.isString().withMessage('must be string').bail()
  },
  min: (body, min) => {
    return body.isLength({ min }).withMessage(`min ${min} char`).bail()
  },
  unique: (body, { model, key, update = false, reject = null }) => {
    if (!update) {
      return body.custom(value => model.exists({ [key]: value }).then(exists => {
        if (exists) {
          return Promise.reject(`${key} exists`)
        }
      }))
    } else {
      return body.custom((value, { req }) => {
        const id = req.params[reject]

        return model.findOne({ [key]: value }).select({ _id: 1 }).lean().then(exists => {
          if (!!exists && exists._id != id) {
            return Promise.reject(`${key} exists`)
          }
        })
      })
    }
  }
},
exists: (body, { model, key }) => {
  return body.custom(value => model.exists({ [key]: value }).then(exists => {
    if (!exists) {
      return Promise.reject(`${key} does not exists`)
    }
  }))
}

const make = (body, rules) => {
  rules.forEach(rule => {
    if (typeof rule === 'string') {
      validator[rule](body)
    } else if (typeof rule === 'object') {
      validator[rule.type](body, rule.value)
    }
  })

  return body
}

module.exports = {
  rules: ['required', 'string'],
  make
}