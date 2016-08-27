'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 7777 });

server.register(require('vision'), (err) => {
  server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './templates',
    layout: true,
    layoutPath: './templates/layouts',
  });
});

server.start((err) => {
  if (err) throw err;
  console.log(`Server running at: ${server.info.uri}`);
});

server.route({
  method: 'GET',
  path: '/{env}/{product}/{type}',
  handler: function (request, reply) {
    reply.view('index', {
      env: request.params.env,
      product: request.params.product,
      type: request.params.type,
    });
  }
});
