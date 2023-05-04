import React from 'react';
import PropTypes from 'prop-types';

function ChildComponent({ calcData, handleButtonClick }) {
  return (
    <div className="calculator-container">
      <input
        className="calculator-input-field"
        type="text"
        id="myInput"
        name="name"
        pattern="[0-9+\-*/(). ]+"
        value={calcData.next || calcData.operation || calcData.total || '0'}
        onChange={() => {}}
      />
      <div className="calculator-buttons">
        {[['AC', '+/-', '%', '÷'],
          ['7', '8', '9', 'x'],
          ['4', '5', '6', '-'],
          ['1', '2', '3', '+'],
          ['0', '.', '='],
        ].map((row) => (
          <div className="calculator-row" key={row.join('-')}>
            {row.map((button) => (
              <button
                className={`calculator-button ${
                  button === '÷' || button === 'x' || button === '-' || button === '+' ? 'math-button-orange' : ''
                } ${
                  button === '0' ? 'zero-button' : ''
                }`}
                type="button"
                onClick={() => handleButtonClick(button)}
                key={button}
                id={button}
              >
                {button}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

ChildComponent.propTypes = {
  calcData: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default ChildComponent;
