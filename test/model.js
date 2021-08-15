const Model = require('../lib/model')

class TodoModel extends Model {

  model = 'todo'

  property() {
    return {
      name: String,
      done: Boolean
    }
  }

  attribute() {
    return {
      timestamps: true
    }
  }

  methods() {
    return {
      slugify: this.slugify
    }
  }

  pre() {
    return {
      save: async function () {
        await this.slugify()
      }
    }
  }

  slugify() {
    this.slug = slugify(this.name)
  }

}

console.log( new TodoModel().get() )