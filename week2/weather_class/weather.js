const dataString = require('./data');
class Weather {
  // Your Code Here!
  constructor(data) {
    this.data = JSON.parse(data).consolidated_weather
  }
  maxTemps() {
    return this.data.map(d => d.max_temp)
  }
  averageTemp() {
    const weekData = this.data.map(d => d.the_temp)
    return parseFloat(weekData.reduce((accum, val) => accum + val, 0) / weekData.length).toFixed(2)
  }
  forcast(date) {
    const foundData = this.data.find(d => d.applicable_date === date);
    if (foundData) {
      const { the_temp, max_temp, min_temp } = foundData;
      return `The temperature was ${parseFloat(the_temp).toFixed(2)} degrees with a high of ${parseFloat(max_temp).toFixed(2)} and a low of ${parseFloat(min_temp).toFixed(2)}`
    }
    return `No information for that day`
  }
}

const w1 = new Weather(dataString)
// console.log(w1.data.consolidated_weather);
// console.log(w1.maxTemps());
// console.log(w1.averageTemp());
// console.log(w1.forcast("2030-05-26"));
// Don't change this line
module.exports = Weather;