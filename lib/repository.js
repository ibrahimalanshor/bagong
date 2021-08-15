const { NotFound } = require('./exceptions')

class Repository {

  async result(model) {
    if (!model) throw new NotFound('Not Found')

    return model
  }

}

module.exports = Repository