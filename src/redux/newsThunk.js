import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchNews = createAsyncThunk('fetch/news', async () => {
  const response = await axios.get(`http://newsapi.org/v2/everything?q=technology&sortBy=popularity&apiKey=${process.env.REACT_APP_key}`);
  return response.data.articles;
});

export { fetchNews };
