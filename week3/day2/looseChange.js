function looseChange(amount) {
  // your code here
  amount *= 100
  const til = { '2d': 0, '1d': 0, '50c': 0, '20c': 0, '10c': 0, '5c': 0 }
  while (amount > 2) {
    switch (true) {
      case amount >= 200:
        til['2d'] += 1;
        amount -= 200;
        continue
      case amount >= 100:
        til['1d'] += 1;
        amount -= 100;
        continue
      case amount >= 50:
        til['50c'] += 1;
        amount -= 50;
        continue
      case amount >= 20:
        til['20c'] += 1;
        amount -= 20;
        continue
      case amount >= 10:
        til['10c'] += 1;
        amount -= 10;
        continue
      case amount >= 5:
        til['5c'] += 1;
        amount -= 5;
        continue
      default:
        til['5c'] += 1;
        break;
    }
    break;
  }
  return til;
}