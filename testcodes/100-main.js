import createIteratorObject from "../0x00-ES6_basic/100-createIteratorObject.js";
import createEmployeesObject from '../0x00-ES6_basic/11-createEmployeesObject.js';
import createReportObject from '../0x00-ES6_basic/12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
    ...createEmployeesObject('sales', ['dan', 'steve'])
  };

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

console.log(reportWithIterator);

for (const item of reportWithIterator) {
    console.log(item);
}
