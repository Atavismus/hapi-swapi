import { getResources } from '../api/controllers/ResourcesController.js';

export const resources = {
  method: 'GET',
  path: '/api/resources',
  handler: async () => {
    const result = await getResources();
    return result;
  },
};

export const search = {
  method: 'GET',
  path: '/api/search/{resource}/{search}',
  handler: async (request) => {
    return 'TODO: search';
  },
};

export const get = {
  method: 'GET',
  path: '/api/get/{resource}/{id}',
  handler: async (request) => {
    return 'TODO: get by resource and id';
  },
};
