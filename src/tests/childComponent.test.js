import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ChildComponent from '../components/childComponent';

describe('ChildComponent', () => {
  const mockHandleButtonClick = jest.fn();
  const mockCalcData = {
    total: '10',
    next: null,
    operation: '+',
  };

  it('renders the component', () => {
    render(
      <ChildComponent calcData={mockCalcData} handleButtonClick={mockHandleButtonClick} />
    );

    const calculatorElement = screen.getByRole('textbox');
    expect(calculatorElement).toBeInTheDocument();
  });

  it('calls handleButtonClick when a button is clicked', () => {
    const handleButtonClickMock = jest.fn();
    render(<ChildComponent calcData={{}} handleButtonClick={handleButtonClickMock} />);
    const buttonElement = screen.getByRole('button', { name: '7' });
    fireEvent.click(buttonElement);
    expect(handleButtonClickMock).toHaveBeenCalledWith('7');
  });
});
