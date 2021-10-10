import { getResourcesService } from '../services/ResourcesService.js';

export const getResources = async () => {
  const result = await getResourcesService();
  return result;
};
