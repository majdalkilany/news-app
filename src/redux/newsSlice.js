import { createSlice } from '@reduxjs/toolkit';

import { fetchNews } from './newsThunk';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    allData: [],
    article: { test: 'test' },
    searchTerm: '',
  },

  reducers: {
    setArticle(state, action) {
      const article = action.payload;
      return { ...state, article };
    },
    searchTerm(state, action) {
      const searchTerm = action.payload;
      return { ...state, searchTerm };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      const newNewsArray = action.payload;
      return { ...state, allData: newNewsArray };
    });
  },
});

export const newsReducer = newsSlice.reducer;
export const { setArticle, searchTerm } = newsSlice.actions;
