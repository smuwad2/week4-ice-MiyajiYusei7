const supermarketItems = [
  // Fruit category
  {
    name: "Apple",
    category: "Fruit",
    quantity: 10,
    price: 0.5
  },
  {
    name: "Banana",
    category: "Fruit",
    quantity: 15,
    price: 0.3
  },
  {
    name: "Orange",
    category: "Fruit",
    quantity: 12,
    price: 0.6
  },
  // Dairy category
  {
    name: "Milk",
    category: "Dairy",
    quantity: 5,
    price: 1.2
  },
  {
    name: "Cheddar Cheese",
    category: "Dairy",
    quantity: 4,
    price: 3.8
  },
  {
    name: "Yogurt",
    category: "Dairy",
    quantity: 8,
    price: 0.9
  },
  // Bakery category
  {
    name: "Bread",
    category: "Bakery",
    quantity: 3,
    price: 2.5
  },
  {
    name: "Croissant",
    category: "Bakery",
    quantity: 7,
    price: 1.5
  },
  {
    name: "Bagel",
    category: "Bakery",
    quantity: 6,
    price: 1.0
  },
  // Vegetable category
  {
    name: "Broccoli",
    category: "Vegetable",
    quantity: 7,
    price: 1.3
  },
  {
    name: "Carrot",
    category: "Vegetable",
    quantity: 9,
    price: 0.8
  },
  {
    name: "Spinach",
    category: "Vegetable",
    quantity: 5,
    price: 1.5
  }
];

const cart = [
  {
    name: "Apple",
    quantity: 2
  },
  {
    name: "Spinach",
    quantity: 3
  },
  {
    name: "Croissant",
    quantity: 4
  }
]

//new func
function getPrice(itemName) {
  for (let item of supermarketItems) {
    if (item["name"] === itemName) {
      return item['price'];
    }
  }
  return 0;
}

// Get unique categories from supermarket items
let cat = [];
for (item of supermarketItems) {
    const curr_cat = item['category'];
    if (!cat.includes(curr_cat)) {
        cat.push(curr_cat);
    }
}
console.log(cat);
// Get total price of items in cart
let grandTotal = 0;
for (cartItem of cart) {
  const itemPrice = getPrice(cartItem);
  const totItemPrice = itemPrice * cartItem["quantity"];
  grandTotal+= totItemPrice;
}
console.log(grandTotal);