import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/navBar';
import ChildComponent from '../components/childComponent';

describe('App', () => {
  it('renders the App component', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('ChildComponent', () => {
  const mockHandleButtonClick = jest.fn();
  const mockCalcData = {
    total: '10',
    next: null,
    operation: '+',
  };

  it('renders the ChildComponent', () => {
    const { container } = render(
      <ChildComponent calcData={mockCalcData} handleButtonClick={mockHandleButtonClick} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('NavBar', () => {
  it('renders the NavBar', () => {
    const { container } = render(<MemoryRouter><NavBar /></MemoryRouter>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
