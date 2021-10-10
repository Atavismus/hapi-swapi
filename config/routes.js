import { getResources } from '../api/controllers/ResourcesController.js';
import { getSearch } from '../api/controllers/SearchController.js';

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
  path: '/api/search',
  handler: async (request, h) => {
    try {
      const result = await getSearch(request.query);
      return result;
    } catch (error) {
      return h.response(error.message).code(400);
    }
  },
};

export const get = {
  method: 'GET',
  path: '/api/get/{resource}/{id}',
  handler: async (request) => {
    return 'TODO: get by resource and id';
  },
};
