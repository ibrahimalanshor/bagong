const { Schema, model } = require('mongoose')

class Model {

  constructor() {
    this.setSchema()
    this.setMethod()
    this.setMiddleware()
  }

  setSchema() {
    this.schema = new Schema(this.property(), this.attribute())
  }

  setMethod() {
    for (let [name, method] of Object.entries(this.methods())) {
      this.schema.methods[name] = method
    }
  }

  setMiddleware() {
    for (let [name, middleware] of Object.entries(this.pre())) {
      this.schema.pre(name, middleware)
    }
  }

  get() {
    return model(this.model, this.schema)
  }

}

module.exports = Model