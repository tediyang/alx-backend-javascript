export default function createReportObject(employeesList) {
  const data = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      let count = 0;
      for (let i in employeesList)
        count++;
      return count;
    }
  };
  return data;
}
