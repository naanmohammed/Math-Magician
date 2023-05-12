import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers correctly', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });
  it('subtracts two numbers correctly', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });
  it('multiplies two numbers correctly', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });
  it('divides two numbers correctly', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });
  it('throws error on unknown operation', () => {
    expect(() => operate(2, 3, '#')).toThrowError("Unknown operation '#'");
  });
  it('handles division by zero', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });
  it('handles modulo by zero', () => {
    expect(operate(6, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
