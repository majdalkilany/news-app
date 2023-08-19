import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Details from './Details';

// Mocking the necessary imports
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../redux/newsThunk', () => ({
  fetchNews: jest.fn(),
}));

describe('Details Component', () => {
  const mockDispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useParams.mockReturnValue({ title: 'Test Title' });
  });

  test('renders article details correctly', () => {
    // Sample article to be rendered
    const mockArticle = [{
      title: 'Test Title',
      urlToImage: 'test-image-url',
      author: 'Test Author',
      publishedAt: new Date().toISOString(),
      source: { name: 'Test Source' },
      description: 'Test Description',
    }];

    useSelector.mockImplementation((callback) => callback({ news: { allData: mockArticle } }));

    const { getByText, getByAltText } = render(<Details />);

    expect(getByAltText('Test Title')).toHaveAttribute('src', 'test-image-url');
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('wrote by:')).toBeInTheDocument();
    expect(getByText('Test Author')).toBeInTheDocument();
    expect(getByText('published At:')).toBeInTheDocument();
    expect(getByText('Source Name:')).toBeInTheDocument();
    expect(getByText('Test Source')).toBeInTheDocument();
    expect(getByText('description:')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });
});
