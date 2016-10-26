'use strict';

var PHONE_PRICE = 100;
var ACCESS_PRICE = 25;
var TAX_RATE = 0.09;
var acctBalance = 280.20;
var total = 0;
var phonesPurchased = 0;
var accessoriesPurchased = 0;

// buy phones until the total is more than the account balance, once you can't buy any more phones buy accessories.

var addTax = function(total) {
  var taxedTotal = total + total * TAX_RATE;
  return taxedTotal
};

var formatPrice = function(total) {
  var formatted = "$" + total.toFixed(2);
  return formatted
};

var totalPrice = function(total, PHONE_PRICE, ACCESS_PRICE, acctBalance){
  while (addTax(PHONE_PRICE) <= acctBalance) {
    total += addTax(PHONE_PRICE);
    acctBalance -= addTax(PHONE_PRICE);
    phonesPurchased ++;
  };
  while (addTax(ACCESS_PRICE) <= acctBalance) {
    total += addTax(ACCESS_PRICE);
    acctBalance -= addTax(ACCESS_PRICE);
    accessoriesPurchased ++;
  };
  console.log(phonesPurchased + " phones purchased");
  console.log(accessoriesPurchased + " accessories purchased");
  console.log("In total I spent " + formatPrice(total));
  console.log("I have " + formatPrice(acctBalance) + " left in my account");
};

totalPrice(total, PHONE_PRICE, ACCESS_PRICE, acctBalance);
