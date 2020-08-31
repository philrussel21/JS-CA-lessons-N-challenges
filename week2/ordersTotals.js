function orderTotal(orders, options = { salesTax: .10, shipping: 15 }) {
  let total = 0;
  for (let order of orders) {
    total += order.price * order.qty
  }
  total += options.salesTax * total
  return (total > 200) ? total : total += options.shipping
}

const order = [{ name: "cup of coffee", qty: 100, price: 1 }]

console.log(orderTotal(order, { salesTax: 0.2, shipping: 20 }))