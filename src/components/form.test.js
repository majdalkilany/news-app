import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Form from './Form';
import { searchTerm } from '../redux/newsSlice';

const mockStore = configureMockStore([]);

describe('Form Component', () => {
  it('dispatches searchTerm action on input change', () => {
    const initialState = {}; // Your initial state here
    const store = mockStore(initialState);

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    const inputElement = getByPlaceholderText('Search New tech');
    const searchText = 'some search term';

    fireEvent.change(inputElement, { target: { value: searchText } });

    const actions = store.getActions();
    expect(actions).toContainEqual(searchTerm(searchText));
  });
});
