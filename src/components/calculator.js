import './calculator.css';

const Calculator = () => (
  <div className="calculator-container">
    <CalculatorInput />
  </div>
);

function CalculatorInput() {
  return (
    <div className="calculator-input">
      <input className="calculator-input-field" type="text" name="name" pattern="[0-9+\-*/(). ]+" placeholder="0" />
      <div className="calculator-buttons">
        <input className="calculator-button" type="button" value="AC" />
        <input className="calculator-button" type="button" value="+/-" />
        <input className="calculator-button" type="button" value="%" />
        <input className="calculator-button math-button-orange" type="button" value="÷" />
        <br />
        <input className="calculator-button" type="button" value="7" />
        <input className="calculator-button" type="button" value="8" />
        <input className="calculator-button" type="button" value="9" />
        <input className="calculator-button math-button-orange" type="button" value="x" />
        <br />
        <input className="calculator-button" type="button" value="4" />
        <input className="calculator-button" type="button" value="5" />
        <input className="calculator-button" type="button" value="6" />
        <input className="calculator-button math-button-orange" type="button" value="-" />
        <br />
        <input className="calculator-button" type="button" value="1" />
        <input className="calculator-button" type="button" value="2" />
        <input className="calculator-button" type="button" value="3" />
        <input className="calculator-button math-button-orange" type="button" value="+" />
        <br />
        <input className="calculator-button zero-button" type="button" value="0" />
        <input className="calculator-button" type="button" value="." />
        <input className="calculator-button math-button-orange" type="button" value="=" />
      </div>
    </div>
  );
}

export default Calculator;
