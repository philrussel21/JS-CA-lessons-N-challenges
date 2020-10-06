const { jokesArray, returnRandomJokes } = require('../src/index');

describe('returnRandomJokes funtionality', () => {
  it('should return a random joke from jokesArray when not given an arg', () => {
    expect(returnRandomJokes()).toBeTruthy()
  });

  it('array returned should have the same length as the passed argument', () => {
    const expected = 3
    expect(returnRandomJokes(expected).length).toBe(expected)
  });
});

describe('returnRandomJokes behaviour on different argument types', () => {
  it('should throw when passed a non-number argument', () => {
    expect(() => {
      returnRandomJokes('100')
    }).toThrow()

    expect(() => {
      returnRandomJokes([1])
    }).toThrow()

    expect(() => {
      returnRandomJokes({ onehundred: 100 })
    }).toThrow()

    expect(() => {
      returnRandomJokes(null)
    }).toThrow()

    expect(() => {
      returnRandomJokes(false)
    }).toThrow()
  });

  it('should throw when given a floating number', () => {
    expect(() => {
      returnRandomJokes(1.2)
    }).toThrow()
  });
});