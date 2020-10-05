let { countCapitalLetters } = require('../src/index');

describe("countCapitalLetters functionality", () => {
  test("When given a string with one capital letter, the function returns the number 1.", () => {
    expect(countCapitalLetters("Alex")).toEqual(1);
  });

  test("When given a string with multiple capital letters, the function returns the expected number.", () => {
    expect(countCapitalLetters("Alex")).toEqual(1);
    expect(countCapitalLetters("New York")).toEqual(2);
    expect(countCapitalLetters("This code is bananas, b A n A n A s!")).toEqual(4);
  });
  test("When given a string with no content or whitespace as content as an argument, the function throws an error.", () => {
    expect(() => {
      countCapitalLetters("");
    }).toThrow();
    expect(() => {
      countCapitalLetters("                  ");
    }).toThrow();
  });

  test("When given anything other than a string as an argument, the function throws an error.", () => {
    expect(() => {
      countCapitalLetters(9)
    }).toThrow();
    expect(() => {
      countCapitalLetters(["Alex"])
    }).toThrow();
    expect(() => {
      countCapitalLetters(true)
    }).toThrow();
    expect(() => {
      countCapitalLetters(new Object())
    }).toThrow();
  });

});