const { Types } = require('mongoose')
const { NotFound } = require('./exceptions')

class Service {

  async checkValidId(id) {
    try {
      if (!Types.ObjectId.isValid(id)) throw 'Not Found'

      return true
    } catch (err) {
      throw new NotFound(err)
    }
  }

}

module.exports = Service