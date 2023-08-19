import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { newsReducer, setArticle, searchTerm } from './newsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, newsReducer);
const store = configureStore({
  reducer: {
    news: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['someIgnoredAction'],
        ignoredPaths: ['some.path.to.ignore'],
      },
    }),

  },
});
const persistor = persistStore(store);
export {
  store, setArticle, searchTerm, persistor,
};

export * from './newsThunk';
