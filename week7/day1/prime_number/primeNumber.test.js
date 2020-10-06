
const { expect } = require('@jest/globals');
const primeNumber = require('./primeNumber');
describe('primeNumber arguments', () => {
  it('should only accept number type args', () => {
    expect(() => {
      primeNumber('1')
    }).toThrow()

    expect(() => {
      primeNumber([1, 2])
    }).toThrow()

    expect(() => {
      primeNumber({ one: 1 })
    }).toThrow()

    expect(() => {
      primeNumber(null)
    }).toThrow()

    expect(() => {
      primeNumber('')
    }).toThrow()
  });
});


describe('primeNumber functionality', () => {
  it('should behave as expected', () => {
    const expected = 43
    const input = 45
    expect(primeNumber(input)).toBe(expected)

    const expected2 = 7
    const input2 = 7
    expect(primeNumber(input2)).toBe(expected2)
  })
});