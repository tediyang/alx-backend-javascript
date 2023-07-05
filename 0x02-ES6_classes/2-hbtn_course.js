export default class HolbertonCourse {
  /**
   * Claass HolbertonCourse
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * get the name of the students
   */
  get students() {
    return this._students;
  }

  /**
   * Make sure each student name are array of strings
  */
 set students(value) {
   if (!(value instanceof Array)) {
     throw new TypeError('Students must be an array of strings');
   }
   if (!value.every((student) => typeof student === 'string')) {
     throw new TypeError('Students must be an array of strings');
   }
    this._students = value;
  }
  
  /**
   * get the duration of the course.
   */
  get length() {
    return this._length;
  }
  /**
   * the duration should be passes as number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }
  /**
   * get the nane of the course.
  */
 get name() {
    return this._name;
  }
  /**
   * check the name of the course is passed a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }
}
