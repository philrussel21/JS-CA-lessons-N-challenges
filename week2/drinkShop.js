const drinkShop = {
  title: "My Fancy Drink Shop",
  products: [{
    id: 1,
    title: 'Coca Cola',
    price: 4.32
  },
  {
    id: 2,
    title: 'Fanta',
    price: 4.22
  },
  {
    id: 3,
    title: 'Lift',
    price: 4.11
  }
  ],
  customers: {
    'jane@doe.com': {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        streetNumber: 12,
        street: 'Main St',
        city: 'Brisbane',
        postcode: 4000
      },
      orders: [{
        id: 61721,
        status: 'delivered',
        items: [{
          productId: 1,
          qty: 2
        },
        {
          productId: 3,
          qty: 1
        },
        {
          productId: 2,
          qty: 3
        }
        ],
        notes: 'Please leave on doorstep'
      },
      {
        id: 82721,
        status: 'delivered',
        items: [{
          productId: 4,
          qty: 100
        }],
        notes: 'Really enjoying coke ATM'
      }
      ]
    }
  }
}
const shop = {
  shopTitle: () => {
    // Return the shop title (you have access to the shop object from here)
    return drinkShop.title
  },

  upperCase: (string) => {
    // Return an uppercase version of string
    return string.toUpperCase()
  },

  upperCaseShopTitle: () => {
    // Return an uppercase shop title.
    // Don't repeat yourself. Use the two functions you just built!
    return shop.upperCase(shop.shopTitle())
  },

  productById: (productId) => {
    // Return a specific product object
    for (let prod of drinkShop.products) {
      if (prod.id === productId) return prod
    }
  },

  productCost: (productId) => {
    // given a product id, return its cost. DRY ;)
    return shop.productById(productId).price
  },

  formatAddress: (email) => {
    // return(drinkShop.customers.'jane@doe.com'.address.(streetNumber, street, city, postcode))
    // Given a user's email, return their address in the format:
    // streetNumber street, city, postcode
    // E.g. 10 Amelia St, Sydney, 2000
    // Hint: some destructuring might save you a few lines.
    const { streetNumber, street, city, postcode } = drinkShop.customers[email].address
    return `${streetNumber} ${street}, ${city}, ${postcode}`
  },

  totalCost: (email, orderId) => {
    // Return the total cost of an order.
    const customer = drinkShop.customers[email]
    const orders = customer.orders
    let order;
    for (let eachOrder of orders) {
      if (eachOrder.id === orderId) { order = eachOrder.items }
    }
    const arrOfCost = order.map(prod => shop.productCost(prod.productId) * prod.qty)
    return arrOfCost.reduce((accum, val) => accum += val)
  },

  addProduct: (id, title, price) => {
    // Add a product to the shop.
    let productsCount = drinkShop.products.length
    drinkShop.products.push({ id: id, title: title, price: price })
    return productsCount + 1 === drinkShop.products.length
  },

  updateProductPrice: (id, newPrice) => {
    // Update the price of a specific product
    shop.productById(id).price = newPrice
    return shop.productById(id).price === newPrice
  }
}