import axios from 'axios';
import { SWAPI_URL } from '../../config/constants.js';

export const searchService = async (resource, search) => {
  try {
    const result = await axios.get(`${SWAPI_URL}${resource}/?search=${search}`);
    return result.data;
  } catch (error) {
    error.message = `Bad request - /api/search failed : ${error.message}`;
    throw error;
  }
};
