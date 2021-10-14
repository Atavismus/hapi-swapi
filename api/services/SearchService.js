import axios from 'axios';
import { SWAPI_URL } from '../../config/constants.js';

export const searchService = async (resource, search, page) => {
  page = page !== '' ? `page=${page}` : '';
  try {
    const result = await axios.get(
      `${SWAPI_URL}${resource}/?search=${search}&${page}`
    );
    return result.data;
  } catch (error) {
    error.message = `Bad request - /api/search failed : ${error.message}`;
    throw error;
  }
};
