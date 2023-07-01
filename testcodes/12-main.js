import createEmployeesObject from '../0x00-ES6_basic/11-createEmployeesObject.js';
import createReportObject from '../0x00-ES6_basic/12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
    ...createEmployeesObject('sales', ['John', 'Mary']),
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
