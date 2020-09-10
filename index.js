const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/g', (request, reply) => {
  reply.redirect("https://www.google.com")
})
fastify.get('/', (request, reply) => {
    reply.raw.end('add /g at end of the address to redirect to google.com')
  })

// Run the server!
fastify.listen(5000, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${fastify.server.address().port}`)
})