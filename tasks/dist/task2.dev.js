"use strict";
// Функція отримує масив товарів і повертає всі товари, які мають ціну нижчу за 100 або вищу за 500
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js.";

var products = [{
  name: 'Laptop',
  price: 800
}, {
  name: 'Phone',
  price: 250
}, {
  name: 'Shirt',
  price: 30
}, {
  name: 'Watch',
  price: 120
}, {
  name: 'Tablet',
  price: 550
}, {
  name: 'Shoes',
  price: 75
}, {
  name: 'PlayStation',
  price: 590
}];

function getProductsNotInPriceRange(products) {
  return products.filter(function (product) {
    return product.price < 100 || product.price > 500;
  }).map(function (item) {
    return item.name;
  });
}

console.log(getProductsNotInPriceRange(products));
module.exports = getProductsNotInPriceRange;
//# sourceMappingURL=task2.dev.js.map
