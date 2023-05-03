import React, { useState } from 'react';
import './quotes.css';
import './calculator.css';
import calculate from '../logic/calculate';
import ChildComponent from './childComponent';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);
  };

  return (
    <div className="container">
      <ChildComponent
        calcData={calcData}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default Calculator;
