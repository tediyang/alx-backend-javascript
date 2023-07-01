export default function createReportObject(employeesList) {
  const data = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      let count = 0;
      for (let _ in employeesList) {
        count += 1;
      }
      return count;
    },
  };
  return data;
}
