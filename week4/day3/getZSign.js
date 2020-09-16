function getSign(input) {
  const date = new Date(input)

  if (date == 'Invalid Date' || input.toString().length < 8) {
    return 'Invalid Date'
  } else {
    birthday = [date.getMonth(), date.getDate()]
  }

  switch (birthday[0]) {
    case 0:
      return birthday[1] <= 19 ? "Capricorn" : "Aquarius"
    case 1:
      return birthday[1] <= 18 ? "Aquarius" : "Pisces"
    case 2:
      return birthday[1] <= 20 ? "Pisces" : "Aries"
    case 3:
      return birthday[1] <= 19 ? "Aries" : "Taurus"
    case 4:
      return birthday[1] <= 20 ? "Taurus" : "Gemini"
    case 5:
      return birthday[1] <= 20 ? "Gemini" : "Cancer"
    case 6:
      return birthday[1] <= 22 ? "Cancer" : "Leo"
    case 7:
      return birthday[1] <= 22 ? "Leo" : "Virgo"
    case 8:
      return birthday[1] <= 22 ? "Virgo" : "Libra"
    case 9:
      return birthday[1] <= 22 ? "Libra" : "Scorpio"
    case 10:
      return birthday[1] <= 22 ? "Scorpio" : "Sagitarrius"
    case 11:
      return birthday[1] <= 21 ? "Sagitarrius" : "Capricorn"
  }

}