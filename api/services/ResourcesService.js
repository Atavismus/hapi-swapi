import axios from 'axios';
import { SWAPI_URL } from '../../config/constants.js';

export const getResourcesService = async () => {
  try {
    const result = await axios.get(SWAPI_URL);
    return result.data;
  } catch (error) {
    return `Bad request - /api/resources failed : ${error.message}`;
  }
};
