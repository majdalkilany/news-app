import { persistStore, persistReducer } from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { newsReducer, setArticle, searchTerm } from './newsSlice';

const persistConfig = {
  key: 'root', // Key for localStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, newsReducer);

const store = configureStore({
  reducer: {
    news: persistedReducer,

  },
});
export const persistor = persistStore(store);
export { store, setArticle, searchTerm };

export * from './newsThunk';
