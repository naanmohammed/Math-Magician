import Calculator from '../components/calculator';

function CalculatorPage() {
  return (
    <div className="calculatorPage">
      <h2>Lets do some Math!</h2>
      {Calculator()}
    </div>
  );
}

export default CalculatorPage;
