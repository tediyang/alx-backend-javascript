export default class Currency {
  /**
   * Class Currency
   * 
   * @param {String} code - currency code
   * @param {String} name - name of currency
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * get the name attribute
   * @returns this._name
   */
  get name() {
    return this._name;
  }

  /**
   * set the name attribute
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * get the code attribute
   * @returns this._code
   */
  get code() {
    return this._code;
  }

  /**
   * set the code attribute
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  displayFullCurrency () {
    return `${this.name} (${this.code})`;
  }
}
