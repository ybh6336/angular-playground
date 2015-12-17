'use strict';

angular.module('invoice1', [])
.controller('InvoiceController1', function() {
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = ['USD', 'EUR', 'CNY'];
  this.usdToForegnRates = {
    USD: 1,
    EUR: 0.74,
    CNY: 6.09
  };

  this.total = function total(outCurr) {
    return this.convertCurrency(
      this.qty * this.cost, this.inCurr, outCurr);
  };

  this.convertCurrency = function(amount, inCurr, outCurr) {
    return amount * this.usdToForegnRates[outCurr] / this.usdToForegnRates[inCurr];
  };

  this.pay = function() {
    window.alert("Thanks");
  };
});
