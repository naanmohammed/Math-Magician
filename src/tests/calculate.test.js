import calculate from '../logic/calculate';

describe('calculate', () => {
  let calculatorData;

  beforeEach(() => {
    calculatorData = { total: '8', next: '2', operation: '+' };
  });

  it('returns an empty object when given "AC"', () => {
    expect(calculate(calculatorData, 'AC')).toMatchSnapshot();
  });

  it('updates next when given a number', () => {
    calculatorData = calculate(calculatorData, '3');
    expect(calculatorData).toMatchSnapshot();
  });

  it('updates next when given "0"', () => {
    calculatorData = calculate(calculatorData, '0');
    expect(calculatorData).toMatchSnapshot();
  });

  it('updates next when given "."', () => {
    calculatorData = calculate(calculatorData, '.');
    expect(calculatorData).toMatchSnapshot();
  });

  it('calculates the total when given "="', () => {
    calculatorData = calculate(calculatorData, '=');
    expect(calculatorData).toMatchSnapshot();
  });

  it('changes the sign of next or total when given "+/-"', () => {
    calculatorData = calculate(calculatorData, '+/-');
    expect(calculatorData).toMatchSnapshot();

    calculatorData = { total: '-8', next: null, operation: null };
    calculatorData = calculate(calculatorData, '+/-');
    expect(calculatorData).toMatchSnapshot();
  });

  it('updates next when given an operation button and two operands are set', () => {
    calculatorData = { total: '8', next: '2', operation: '+' };
    calculatorData = calculate(calculatorData, '-');
    expect(calculatorData).toMatchSnapshot();
  });

  it('returns an empty object when given a "." after a number with a decimal point', () => {
    calculatorData = { total: '8.5', next: null, operation: null };
    calculatorData = calculate(calculatorData, '.');
    expect(calculatorData).toMatchSnapshot();
  });
});
