import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import NewsList from './NewsList';

const mockStore = configureStore([thunk]);
describe('NewsList component', () => {
  it('renders news articles correctly', async () => {
    const initialState = {
      news: {
        allData: [
          {
            title: 'Article 1',
            urlToImage: 'image-url-1.jpg',
          },
          {
            title: 'Article 2',
            urlToImage: 'image-url-2.jpg',
          },
        ],
        searchTerm: '',
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <NewsList />
        </Router>
      </Provider>,
    );

    const articleLinks = await screen.findAllByRole('link');
    expect(articleLinks).toHaveLength(2);

    const articleImages = await screen.findAllByRole('img');
    expect(articleImages).toHaveLength(2);

    const articleTitles = await screen.findAllByRole('heading');
    expect(articleTitles).toHaveLength(2);
    expect(articleTitles[0]).toHaveTextContent('Article 1');
    expect(articleTitles[1]).toHaveTextContent('Article 2');
  });
});
