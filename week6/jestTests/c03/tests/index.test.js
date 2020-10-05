const { sassyBankTeller } = require('../src/index');

describe('sassyBankTeller functionality', () => {
  test('sassyBankTeller is a valid function', () => {
    expect(typeof sassyBankTeller).toBe('function')
  })


  test("should throw when given any non-numeric values", () => {
    expect(() => {
      sassyBankTeller(null)
    }).toThrow()

    expect(() => {
      sassyBankTeller([1, 2, 3])
    }).toThrow()

    expect(() => {
      sassyBankTeller({ one: 1, two: 2 })
    }).toThrow()

    expect(() => {
      sassyBankTeller('one million dollars')
    }).toThrow()

    expect(() => {
      sassyBankTeller('1OO01')
    }).toThrow()

    expect(() => {
      sassyBankTeller('1000 dollars')
    }).toThrow()
  })

  test('should return sassy expected results based on number provided', () => {
    const expected = {
      broke: "You're broke my friend. Keep hustlin!",
      chill: "You're ballin my friend. Keep it chill",
      rich: "Holy shchitnzel! You're loaded! Treat yoself!"
    }

    expect(sassyBankTeller('50')).toBe(expected.broke)
    expect(sassyBankTeller(75)).toBe(expected.broke)
    expect(sassyBankTeller(500)).toBe(expected.chill)
    expect(sassyBankTeller(1001)).toBe(expected.rich)

  })
})