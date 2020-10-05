function sassyBankTeller(num) {
  const acceptedTypes = ['string', 'number']
  if (!acceptedTypes.includes(typeof num)) throw ('Can only accept a number felicia')
  if (isNaN(num)) throw ('Can only accept a number felicia')

  switch (true) {
    case (num < 100):
      return "You're broke my friend. Keep hustlin!"
    case (num >= 100 && num <= 1000):
      return "You're ballin my friend. Keep it chill"
    case (num > 1000):
      return "Holy shchitnzel! You're loaded! Treat yoself!"
  }
}

module.exports = {
  sassyBankTeller
}