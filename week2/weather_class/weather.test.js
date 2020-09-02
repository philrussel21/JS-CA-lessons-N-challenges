const Weather = require('./weather');

describe('Weather', () => {
  test('data contains an object', () => {
    const subject = new Weather();
    expect(typeof subject.data).toBe('string');
  });

  test('data contains the key consolidated_weather', () => {
    const subject = new Weather();
    expect(subject.data).toHaveProperty('consolidated_weather');
  });

  test('maxTemps return the correct array', () => {
    const subject = new Weather();
    const expected = [ 24.875, 22.995, 21.07, 21.495, 22.43, 22.619999999999997 ];
    expect(subject.maxTemps()).toEqual(expected);
  });

  test('averageTemp returns the correct average', () => {
    const subject = new Weather();
    const expected = '21.75';
    expect(subject.averageTemp()).toEqual(expected);
  });

  test('forcast returns the correct string if days data is present', () => {
    const subject = new Weather();
    const input = '2020-05-27';
    const expected = 'The temperature was 22.79 degrees with a high of 23.00 and a low of 13.16.';
    expect(subject.forcast(input)).toBe(expected);
  })

  test('forcast returns the correct string if days data not present', () => {
    const subject = new Weather();
    const expected = 'No information for that day';
    const input = '3020-05-27';
    expect(subject.forcast(input)).toBe(expected);
  })
});
