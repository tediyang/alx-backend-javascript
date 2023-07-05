import Currency from "./3-currency";

export default class Pricing {
  /**
   * class Pricing
   *
   * @param {number} amount - amount
   * @param {Currency} currency - the currency data
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * get the amount attribute
   */
  get amount() {
    return this._amount;
  }

  /**
   * set the amount attribute
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * get the currency attribute
   */
  get currency() {
    return this._currency;
  }

  /**
   * set the currency attribute
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * displayFullPrice - display all currency information
   * @returns: amount currency-name currency code
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
   * convertPrice - converts the amount.
   * @param {number} amount - currency amount
   * @param {number} conversionRate - rate to convert
   * @returns: amount * conversionRate
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('params should be numbers');
  }
}
