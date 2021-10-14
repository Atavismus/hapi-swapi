import { getResources } from '../api/controllers/ResourcesController.js';
import { getSearch } from '../api/controllers/SearchController.js';
import { getById } from '../api/controllers/GetByIdController.js';

/**
 * Get all resources name.
 * No param
 */
export const resources = {
  method: 'GET',
  path: '/api/resources',
  handler: getResources,
};

/**
 * Search by resource in name
 * @param {string} resource
 * @param {string} search
 */
export const search = {
  method: 'GET',
  path: '/api/search',
  handler: async (request, h) => {
    try {
      return await getSearch(request.query);
    } catch (error) {
      return h.response(error.message).code(400);
    }
  },
};

/**
 * Get by id or get all if no id parameter
 * @param {string} resource
 * @param {integer} id (optional)
 * @param {integer} page (optional)
 */
export const get = {
  method: 'GET',
  path: '/api/get',
  handler: async (request, h) => {
    try {
      return await getById(request.query);
    } catch (error) {
      return h.response(error.message).code(400);
    }
  },
};
