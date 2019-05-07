const Hapi = require('@hapi/hapi');
const H2o2 = require('@hapi/h2o2');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: 'localhost'
  });

  // Register proxy middleware
  await server.register(H2o2);

  // Registering routes
  server.route(routes);
  await server.start();
  console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

// Initializing
init();
