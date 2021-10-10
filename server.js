import Hapi from '@hapi/hapi';

export const hapiServer = Hapi.server({
  port: 8080,
  host: 'localhost',
  routes: {
    cors: true,
  },
});
