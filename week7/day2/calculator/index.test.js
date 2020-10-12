const { one, two, three, plus, minus, divide, multiply } = require('./index')

describe('Function return value', () => {
  it('should return a whole number', () => {
    expect(one() % 1).toBe(0)
    expect(two() % 1).toBe(0)
    expect(three() % 1).toBe(0)
    expect(() => {
      one(plus(one())) % 1
    }).toBe(0)
    expect(() => {
      three(minus(two())) % 1
    }).toBe(0)
    expect(() => {
      three(divide(two())) % 1
    }).toBe(0)
    expect(() => {
      two(multiply(three())) % 1
    }).toBe(0)
  })
})

describe('Number Functions', () => {
  it('should return a number when no args is passed', () => {
    expect(one()).toBe(1)
    expect(two()).toBe(2)
    expect(three()).toBe(3)
  });

  it('should perform num operations based on args passed', () => {
    expect(one(plus(one()))).toBe(2)
    expect(two(multiply(three()))).toBe(6)
  });
});