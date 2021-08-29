const { Router } = require('express')
const router = Router()

const routing = ({ path: name, routes }) => {
  routes.forEach(route => {
    const path = router.route(name + route.path)

    for (let [name, handler] of Object.entries(route.end)) {
      path[name](handler)
    }
  })

  return router
}

module.exports = routing