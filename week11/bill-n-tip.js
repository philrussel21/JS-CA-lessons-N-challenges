function billAndTip(bill, tip) {
  const tipPercentage = tip / 100;
  const tipAmt = bill * tipPercentage;
  const totalBill = bill + tipAmt;
  return `total bill amounted to ${totalBill} with a ${tipAmt} dollar tip`;
}

console.log(billAndTip(100, 5));