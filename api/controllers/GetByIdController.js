import { getByIdService } from '../services/GetByIdService.js';
import { RESOURCES } from '../../config/constants.js';
import Hoek from '@hapi/hoek';

export const getById = async (params) => {
  const { resource, id = '', page = '' } = params;
  if (!resource) {
    throw new Error('Missing resource parameter');
  }
  if (!RESOURCES.includes(resource)) {
    throw new Error('Wrong resource parameter value');
  }
  if (id !== '') {
    if (id === '0') {
      throw new Error("Wrong resource parameter value: id 0 doesn't exist.");
    }
    if (parseInt(id) < 0) {
      throw new Error('Wrong resource parameter value: id has to be positive.');
    }
    if (isNaN(id)) {
      throw new Error('Wrong resource parameter value: id has to be numeric.');
    }
  }
  try {
    const result = await getByIdService(
      Hoek.escapeHtml(resource),
      Hoek.escapeHtml(id),
      Hoek.escapeHtml(page)
    );
    return result;
  } catch (error) {
    throw error;
  }
};
