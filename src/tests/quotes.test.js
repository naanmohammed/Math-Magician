import React from 'react';
import {render, act} from '@testing-library/react';
import Quotes from '../components/quotes';
describe('Quotes', () => {
  it('should render loading message while quotes are being fetched', () => {
    const { container } = render(<Quotes />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render failed message if quotes failed to fetch', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Failed to fetch quotes'))
    );
    await act(async () => {
      render(<Quotes />);
    });
  });
});