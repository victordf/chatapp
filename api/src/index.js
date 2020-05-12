const createServer = require('./server')

try {
  const server = createServer()
  server.start()
} catch(error) {
  console.log(`[ERROR] - ${error}`)
}