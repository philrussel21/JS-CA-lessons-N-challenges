const users = [
  {
    id: 1,
    name: "Name 1",
    group: "Educator",
    location: {
      Street: "1 Dutch Lane",
      Suburb: "Biscuit",
      postcode: 4324
    }
  },
  {
    id: 2,
    name: "Name 2",
    group: "Educator",
    location: {
      Street: "1 chocolate Lane",
      Suburb: "cookie",
      postcode: 5431
    }
  },
  {
    id: 3,
    name: "Name 3",
    group: "Student",
    location: {
      Street: "1 Wagon Street",
      Suburb: "Wheel",
      postcode: 2334
    }
  },
  {
    id: 4,
    name: "Name 4",
    group: "Student",
    location: {
      Street: "1 Strawberry Circuit",
      Suburb: "Sundae",
      postcode: 3321
    }
  },
  {
    id: 5,
    name: "Name 5",
    group: "Mentor",
    location: {
      Street: "1 Inspiration Way",
      Suburb: "Turn it Around",
      postcode: 3333
    }
  }
]

let queensland = []
let newSouthWales = []
let victoria = []
let southAustralia = []

users.forEach(user => {
  let postcode = user.location.postcode
  switch (true) {
    case (postcode < 3000):
      return newSouthWales.push(user);
    case (postcode < 4000):
      return victoria.push(user);
    case (postcode < 5000):
      return queensland.push(user);
    case (postcode < 6000):
      return southAustralia.push(user);
  }
})

console.log(queensland, newSouthWales, victoria, southAustralia)