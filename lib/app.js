const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const { error } = require('./middlewares')

class App {

  constructor({ routes, middlewares, port }) {
    this.app = express()
    this.port = port

    this.initConfig()
    this.initMiddleware(middlewares)
    this.initRoutes(routes)
    this.initError()
  }

  initConfig() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())

    this.app.use(morgan('tiny'))
    this.app.use(cors())
  }

  initRoutes(routes) {
    for (let router of routes) {
      this.app.use(router)
    }
  }

  initMiddleware(middlewares) {
    middlewares.forEach(middleware => this.app.use(middleware))
  }

  initError() {
    this.app.use(error)
  }

  listen() {
    this.app.listen(this.port)
  }

  async connectDatabase({ host, port, name }) {
    try {
      await mongoose.connect(`${host}:${port}/${name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    } catch (err) {
      console.log(err)
    }
  }

}

module.exports = App