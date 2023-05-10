import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/navBar';

describe('NavBar', () => {
  it('renders the component', () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const navBarElement = document.querySelector('.navBar');
    expect(navBarElement).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const homeLink = screen.getByRole('link', { name: 'Home |' });
    const calculatorLink = screen.getByRole('link', { name: 'Calculator |' });
    const quoteLink = screen.getByRole('link', { name: 'Quote' });

    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
  });
});
