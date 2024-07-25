import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.getFullCurrencyDisplay()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
