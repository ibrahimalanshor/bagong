const Repository = require('../lib/repository')

class TestRepository extends Repository {

  async get(id) {
    const test = null

    this.result(test)
  }

}

const test = new TestRepository

console.log( test.get(2) )