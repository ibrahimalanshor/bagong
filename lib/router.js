const { Router } = require('express')
const router = Router()

const routing = routes => {
  routes.forEach(route => {
    const path = router.route(route.path)

    for (let [name, handler] of Object.entries(route.end)) {
      path[name](handler)
    }
  })

  return router
}

module.exports = routing