const mockAxios = {
  get: jest.fn(() => Promise.resolve({ data: { articles: [] } })),
};

export default mockAxios;
