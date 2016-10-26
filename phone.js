'use strict';

var phonePrice = 100;
var acctBalance = 280.5;
var accessories = 25;
var tax = 0.09;
var total = 0;
var phonesPurchased = 0;
var accessoriesPurchased = 0;

// buy phones until the total is more than the account balance, once you can't buy any more phones buy accessories.

var addTax = function(total) {
  var taxedTotal = total + total * tax;
  return taxedTotal
};

var formatPrice = function(total) {
  var formatted = "$" + total;
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
  console.log(phonesPurchased + " phones purchased");
  console.log(accessoriesPurchased + " accessories purchased");
  console.log("I have $" + acctBalance + " left in my account");
  console.log("In total I spent " + formatPrice(total));
};

totalPrice(total, phonePrice, accessories, acctBalance);
