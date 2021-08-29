# Bagong

Frameworok

## Install

```bash
npm install bagong --save
```

## Run

Create a home route (home.route.js)

```js
const router = require('bagong').Router

const routes = [
  {
    path: '/',
    end: {
      get: (req, res) => res.send('woi bagong')
    }
  }
]

module.exports = routing({
  path: '/',
  routes
})
```

Create router file (routes.js)

```js
module.exports = [
  require('./home.route')
]
```

Create bagong instance


```js
const Bagong = require('bagong').App
const routes = require('./routes')

const app = new Bagong({ routes, port: 4000 })

app.listen()
```

Open at http://localhost:4000