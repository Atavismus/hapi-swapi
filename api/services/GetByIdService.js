import axios from 'axios';
import { SWAPI_URL } from '../../config/constants.js';

export const getByIdService = async (resource, id) => {
  try {
    const result = await axios.get(`${SWAPI_URL}${resource}/${id}`);
    return result.data;
  } catch (error) {
    error.message = `Bad request - /api/get failed : ${error.message}`;
    throw error;
  }
};
