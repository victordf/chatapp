const express = require('express')
const cors = require('cors')

const createRoutes = require('./routes')

function createServer(config = {}) {
  const exp = express()
  const port = config.port || 3333

  function start() {
    console.log('[SERVER] - Starting...')

    middleWares()
    routes()

    exp.listen(port, () => {
      console.log(`[SERVER] - Server running in port ${port}`)
    })
  }

  function middleWares() {
    console.log('[SERVER] - Running middlewares')
    exp.use(cors())
    exp.use(express.json())
  }

  function routes() {
    console.log('[SERVER] - Running routes')
    let routes = createRoutes()
    exp.use(routes.start())
  }

  return {
    start
  }
}

module.exports = createServer