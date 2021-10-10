import { getByIdService } from '../services/GetByIdService.js';
import { RESOURCES } from '../../config/constants.js';
import Hoek from '@hapi/hoek';

export const getById = async (params) => {
  const { resource, id } = params;
  if (!resource || !id) {
    throw new Error('Missing parameter(s)');
  }
  if (!RESOURCES.includes(resource)) {
    throw new Error('Wrong resource parameter value');
  }
  try {
    const result = await getByIdService(
      Hoek.escapeHtml(resource),
      Hoek.escapeHtml(id)
    );
    return result;
  } catch (error) {
    throw error;
  }
};
