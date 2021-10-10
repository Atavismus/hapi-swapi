export const resources = {
  method: 'GET',
  path: '/api/resources',
  handler: async (request) => {
    return 'TODO: resources';
  },
};

export const search = {
  method: 'GET',
  path: '/api/search/{resource}/{search}',
  handler: async (request) => {
    return 'TODO: search';
  },
};

export const get = {
  method: 'GET',
  path: '/api/get/{resource}/{id}',
  handler: async (request) => {
    return 'TODO: get by resource and id';
  },
};
