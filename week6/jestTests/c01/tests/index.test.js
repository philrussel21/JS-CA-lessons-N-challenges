const { greetEachPerson } = require('../src/index');

describe("greetEachPerson functionality", () => {
  test("greetEachPerson is a function", () => {
    expect(typeof (greetEachPerson)).toBe('function')
  })

  test('greets once when given a single string', () => {
    const input = 'Alex'
    expect(greetEachPerson(input)).toEqual([`Hello there, ${input}!`])
  })

  test('throws an error when given no string arguments', () => {
    const input = 123
    expect(() => {
      greetEachPerson(input)
    }).toThrow()
  })

  test('should return an array based on the strings provided when given both string and non string args', () => {
    const nonstrings = [2, null, true]
    const input = ["Alex", ...nonstrings, "Carl"]
    expect(greetEachPerson(input)).toEqual(
      expect.not.arrayContaining(nonstrings)
    )
  })

  test('throws when given a whitespace only or empty string', () => {
    const input = ' '
    expect(() => {
      greetEachPerson(input)
    }).toThrow()
  })

  test('strings should not be returned when strings has nums or special chars in it', () => {
    const invalidInput = ['C@rl']
    const input = ['Alex', invalidInput, 'Zeb', 'Nands']
    expect(greetEachPerson(input)).toEqual(
      expect.not.arrayContaining(invalidInput)
    )
  })

  test('throws when no invalid input was provided', () => {
    const input = ['A1ex', 'N@nds', null, false, '']
    expect(() => {
      greetEachPerson(input)
    }).toThrow()
  })

  test('handles multi-level arrays', () => {
    const lvl2 = ['Z3b', 'Nands', 'L@v', 'C@rl']
    const input = ['A1ex', 'Janel', 'Varsha', 'J@iro', lvl2]
    expect(greetEachPerson(input)).toBeTruthy();
  })
})