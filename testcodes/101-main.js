import createEmployeesObject from "../0x00-ES6_basic/11-createEmployeesObject.js";
import createReportObject from '../0x00-ES6_basic/12-createReportObject.js';
import createIteratorObject from '../0x00-ES6_basic/100-createIteratorObject.js';
import iterateThroughObject from '../0x00-ES6_basic/101-iterateThroughObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
    ...createEmployeesObject('sales', ['John', 'Jane'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
