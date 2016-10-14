'use strict';

var phonePrice = 100;
var acctBalance = 250;
var accessories = 25;
var tax = 0.08;
var total = 0;
var phonesPurchased = 0;
var accessoriesPurchased = 0;

// buy phones until the total is more than the account balance, once you can't buy any more phones buy accessories.

var addTax = function(total) {
  var taxedTotal = total + total * tax;
  return taxedTotal
};

var formatPrice = function(total) {
  var formatted = "$" + total + ".00";
  return formatted
};

var totalPrice = function(total, phonePrice, accessories, acctBalance){
  while (addTax(phonePrice) <= acctBalance) {
    total += addTax(phonePrice);
    acctBalance -= addTax(phonePrice);
    phonesPurchased ++;
  };
  while (addTax(accessories) <= acctBalance) {
    total += addTax(accessories);
    acctBalance -= addTax(accessories);
    accessoriesPurchased ++;
  };
  console.log(phonesPurchased);
  console.log(accessoriesPurchased);
  console.log(acctBalance);
  console.log(formatPrice(total));
};

totalPrice(total, phonePrice, accessories, acctBalance);
