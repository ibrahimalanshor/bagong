const Service = require('../lib/service')

class TestService extends Service {

  async update(id) {
    await this.checkValidId(id)

    return id
  }

}

const test = new TestService

console.log( test.update('id') )