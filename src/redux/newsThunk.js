import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchNews = createAsyncThunk('fetch/news', async () => {
  const response = await axios.get('https://news-api-v1.onrender.com/news');
  return response.data.articles;
});

export { fetchNews };
