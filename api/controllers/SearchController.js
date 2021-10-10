import { searchService } from '../services/SearchService.js';
import { RESOURCES } from '../../config/constants.js';
import Hoek from '@hapi/hoek';

export const getSearch = async (params) => {
  const { resource, search } = params;
  if (!resource || !search) {
    throw new Error('Missing parameter(s)');
  }
  if (!RESOURCES.includes(resource)) {
    throw new Error('Wrong resource parameter value');
  }
  try {
    const result = await searchService(
      Hoek.escapeHtml(resource),
      Hoek.escapeHtml(search)
    );
    return result;
  } catch (error) {
    throw error;
  }
};
