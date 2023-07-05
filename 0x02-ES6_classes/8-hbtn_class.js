export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new Error('size must be a number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('location is not a string');
    }
    this._location = value;
  }

  [Symbol.toPrimitive](conv) {
    if (conv === 'number') {
      return this.size;
    }
    if (conv === 'string') {
      return this.location;
    }
    return this;
  }
}
