import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

// eslint-disable-next-line react/display-name
jest.mock('../components/NewsList', () => () => <div data-testid="news-list-mock">NewsList Mock</div>);

describe('Home Component', () => {
  test('renders NewsList component', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('news-list-mock')).toBeInTheDocument();
  });
});
