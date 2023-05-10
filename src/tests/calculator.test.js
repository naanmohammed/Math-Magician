import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  it('renders the component', () => {
    render(<Calculator />);
    const calculatorElement = document.querySelector('.calculator-container');
    expect(calculatorElement).toBeInTheDocument();
  });

  it('updates the input field when a button is clicked', () => {
    render(<Calculator />);
    const buttonElement = screen.getByRole('button', { name: '7' });
    fireEvent.click(buttonElement);
    const inputField = screen.getByDisplayValue('7');
    expect(inputField).toBeInTheDocument();
  });

  it('updates the input field when multiple buttons are clicked', () => {
    render(<Calculator />);
    const button7 = screen.getByRole('button', { name: '7' });
    const button8 = screen.getByRole('button', { name: '8' });
    const buttonPlus = screen.getByRole('button', { name: '+' });
    const buttonEquals = screen.getByRole('button', { name: '=' });
    fireEvent.click(button7);
    fireEvent.click(buttonPlus);
    fireEvent.click(button8);
    fireEvent.click(buttonEquals);
    const inputField = screen.getByDisplayValue('15');
    expect(inputField).toBeInTheDocument();
  });
});
