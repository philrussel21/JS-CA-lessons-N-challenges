// const { one, two, three, plus, minus, divide, multiply } = require('./index')

// describe('Function return value', () => {
//   it('should return a whole number', () => {
//     expect(one() % 1).toBe(0)
//     expect(two() % 1).toBe(0)
//     expect(three() % 1).toBe(0)
//     expect(() => {
//       one(plus(one())) % 1
//     }).toBe(0)
//     expect(() => {
//       three(minus(two())) % 1
//     }).toBe(0)
//     expect(() => {
//       three(divide(two())) % 1
//     }).toBe(0)
//     expect(() => {
//       two(multiply(three())) % 1
//     }).toBe(0)
//   })
// })

// describe('Number Functions', () => {
//   it('should return a number when no args is passed', () => {
//     expect(one()).toBe(1)
//     expect(two()).toBe(2)
//     expect(three()).toBe(3)
//   });

//   it('should perform num operations based on args passed', () => {
//     expect(one(plus(one()))).toBe(2)
//     expect(two(multiply(three()))).toBe(6)
//   });
// });

const {
  addition,
  subtraction,
  multiplication,
  division,
  performOp
} = require('./index')

describe('Addition', () => {
  it('should return sum of two numbers', () => {
    expect(addition(2, 3)).toBe(5)
  });
});

describe('Subtraction', () => {
  it('should return difference of two numbers', () => {
    expect(subtraction(3, 1)).toBe(2)
  });
});

describe('Multiplication', () => {
  it('should return the product of two numbers', () => {
    expect(multiplication(2, 3)).toBe(6)
  });
});

describe('Division', () => {
  it('should return the quotient of two numbers', () => {
    expect(division(9, 3)).toBe(3)
  });
});

describe('performOp', () => {
  it('should add two numbers', () => {
    expect(performOp(1, addition, 2)).toBe(3)
  });
  it('should minus two numbers', () => {
    expect(performOp(5, subtraction, 2)).toBe(3)
  });
  it('should multiply two numbers', () => {
    expect(performOp(1, multiplication, 2)).toBe(2)
  });
  it('should divide two numbers', () => {
    expect(performOp(4, division, 2)).toBe(2)
  });
});