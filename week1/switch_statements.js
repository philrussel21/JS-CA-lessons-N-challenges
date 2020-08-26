function whatDoingToday(day) {
  // if (day == "Monday") {
  //     return("Learning at Coder Academy")
  // } else if (day == "Tuesday"){
  //     return("Learning at Coder Academy")
  // } else if (day == "Wednesday"){
  //     return("Learning at Coder Academy")
  // } else if (day == "Thursday"){
  //     return("Reviewing lessons from the week")
  // } else if (day == "Friday"){
  //     return("Reviewing lessons from the week")
  // } else if (day == "Saturday"){
  //     return("It is the weekend!")
  // } else if (day == "Sunday"){
  //     return("It is the weekend!")
  // } else {
  //     return("That is not a valid day")
  // }   

  // Switch way
  switch (day) {
    case "Monday":
    case 'Tuesday':
    case 'Wednesday':
      return ("Learning at Coder Academy");
    case 'Thursday':
    case 'Friday':
      return ("Reviewing lessons from the week");
    case 'Saturday':
    case 'Sunday':
      return ("It is the weekend!");
    default:
      return ("That is not a valid day")

  }
}
// What day is it today?
let day = 'Wednesday'
console.log(whatDoingToday(day))

// function whatDoingToday(day) {
//   // Switch with dynamic date starts here
//   const days = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"

//   // Switch way
//   // days.split(',')[day] convertes the index provided (day) to an actual string of the day
//   switch (days.split(',')[day]) {
//     case "Monday":
//       return ("Learning at Coder Academy");
//     case 'Tuesday':
//       return ("Learning at Coder Academy");
//     case 'Wednesday':
//       return ("Learning at Coder Academy");
//     case 'Thursday':
//       return ("Reviewing lessons from the week");
//     case 'Friday':
//       return ("Reviewing lessons from the week");
//     case 'Saturday':
//       return ("It is the weekend!");
//     case 'Sunday':
//       return ("It is the weekend!");
//     default:
//       return ("That is not a valid day")
//   }
// }
// // What day is it today?
// // new Date().getDay() returns a number from 0-6 representing the day of the week
// let day = new Date().getDay()
// console.log(whatDoingToday(day))