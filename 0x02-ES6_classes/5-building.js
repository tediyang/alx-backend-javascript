export default class Building {
  /**
   * class Building - any class that extend it must contain the
   * evacuationWarningMessage function.
   *
   * @param {number} sqft - square-feet measurement.
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      return this._sqft = value;
    }
    this._sqft = value;
  }
}
