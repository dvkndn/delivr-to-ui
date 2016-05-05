var CurrencyMixin = {
  getCurrency: function(number) {
    return accounting.formatMoney(number);
  },
  getSubCurrency: function(number) {
    var currency = fx(number).from("USD").to("SGD");
    return accounting.formatMoney(currency, {
      symbol: "SGD",
      format: "%v %s"
    });
  }
};
