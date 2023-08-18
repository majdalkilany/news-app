import { createSlice } from '@reduxjs/toolkit';

import { fetchNews } from './newsThunk';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    allData: [],
    article: { test: 'test' },
  },

  reducers: {
    setArticle(state, action) {
      const article = action.payload;
      console.log(article);
      return { ...state, article };
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
export const { setArticle } = newsSlice.actions;
