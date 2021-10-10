import { hapiServer } from './server.js';
import * as routes from './config/routes.js';

const init = async () => {
  Object.keys(routes).map((key) => hapiServer.route(routes[key]));
  await hapiServer.start();
};

process.on('unhandledRejection', (err) => {
  throw new Error(err);
});

init();
