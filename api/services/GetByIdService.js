import axios from 'axios';
import { SWAPI_URL } from '../../config/constants.js';

export const getByIdService = async (resource, id, page) => {
  page = page !== '' ? `page=${page}` : '';
  try {
    const result = await axios.get(`${SWAPI_URL}${resource}/?${page}${id}`);
    return result.data;
  } catch (error) {
    error.message = `Bad request - /api/get failed : ${error.message}`;
    throw error;
  }
};
