class Collection {

  constructor(response, { status = 200, data = [], message = '' }) {
    this.response = response
    this.status = status
    this.data = data
    this.message = message
  }

  getStatusText() {
    switch(this.status) {
      case 200:
        return 'success'
        break
      case 201:
        return 'created'
        break
      default:
        return ''
        break
    }
  }

  get() {
    return this.response.status(this.status).json({
      status: this.getStatusText(),
      message: this.message,
      data: this.data
    })
  }

}

const make = (response, data) => {
  if (typeof data === 'string') {
    return new Collection(response, { message: data }).get()
  } else if (Array.isArray(data)) {
    return new Collection(response, { data }).get()
  } else if (typeof data === 'object') {
    const isCollection = data.hasOwnProperty('status') || data.hasOwnProperty('data') || data.hasOwnProperty('message')

    if (!isCollection) {
      return new Collection(response, { data }).get()
    }
  }

  return new Collection(response, data).get()
}

module.exports = make