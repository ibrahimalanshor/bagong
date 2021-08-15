const routing = require('../lib/router')

const routes = [
  {
    path: '/',
    end: {
      get: (req, res) => res.send('ok base'),
    }
  },
  {
    path: '/:id',
    end: {
      put: [
        (req, res) => res.send('validate'),
        (req, res) => res.send('Ok gaming')
      ]
    }
  }
]

console.log( routing(routes) )