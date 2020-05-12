function createRoutes() {
  const routes = require('express').Router();

  function start() {
    routerHome()

    return routes
  }

  function routerHome() {
    routes.get('/', (req, res) => {
      res.send('Olá Mundo! HAHA')
    })
  }

  return {
    start
  }
}

module.exports = createRoutes;