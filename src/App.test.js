import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { newsReducer } from './redux/newsSlice';
import {
  fetchNews,
} from './redux/store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux Tests', () => {
  let mockAxios;
  let store;

  beforeAll(() => {
    mockAxios = new MockAdapter(axios);
  });

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    mockAxios.reset();
  });

  afterAll(() => {
    mockAxios.restore();
  });

  describe('Thunk Tests', () => {
    it('fetchNews thunk should dispatch the correct actions', async () => {
      const responseData = [
        { title: 'Article 1' },
        { title: 'Article 2' },
      ];

      mockAxios.onGet(/newsapi\.org/).reply(200, { articles: responseData });

      const expectedActions = [
        fetchNews.pending.type,
        fetchNews.fulfilled.type,
      ];

      await store.dispatch(fetchNews());

      const dispatchedActionTypes = store.getActions().map((action) => action.type);
      expect(dispatchedActionTypes).toEqual(expectedActions);
    });
  });

  describe('Reducer Tests', () => {
    it('should handle fetchNews.fulfilled', () => {
      const initialState = {
        allData: [],
        article: { test: 'test' },
        searchTerm: '',
      };
      const actionData = [
        { title: 'Article 1' },
        { title: 'Article 2' },
      ];

      const newState = newsReducer(initialState, fetchNews.fulfilled(actionData));
      expect(newState.allData).toEqual(actionData);
    });
  });
});
