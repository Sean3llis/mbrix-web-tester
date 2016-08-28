'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const server = new Hapi.Server();
const dropdowns = require('./dropdowns');

server.connection({ port: process.env.PORT || 7777 });

server.register(Inert, () => {});

server.register(require('vision'), (err) => {
  server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './templates',
    layout: true,
    layoutPath: './templates/layouts',
    partialsPath: './templates/partials'
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
    const product = request.params.product;
    const env = request.params.env;
    const adType = request.params.type;
    reply.view('index', {
      env,
      product,
      adType,
      dropdowns: dropdowns
    });
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    const product = 'rescue';
    const env = 'dev';
    const type = 'video';
    reply.view('index', {
      title: `${env}|${product}|${type}`,
      env: env,
      product: product,
      type: type,
    });
  }
});

server.route({
  method: 'GET',
  path: '/public/{path*}',
  handler: {
    directory: {
      path: './public',
      listing: false,
      index: false
    }
  }
});
