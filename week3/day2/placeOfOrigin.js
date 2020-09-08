function placeOfOrigin(data) {
  return data.map((rec) => {
    // assign vars using rest operator
    // if country is used instead of city, city would be undefined
    const { name, city } = rec;
    if (city) {
      return `The city of ${city} is home to ${name}`
    }
    return `The country of ${rec.country} is home to ${name}`
  })
}

console.log(placeOfOrigin([
  {
    name: 'Johannes Gutenberg',
    city: 'Mainz',
  },
  {
    name: 'Bi Sheng',
    country: 'China',
  },
]))