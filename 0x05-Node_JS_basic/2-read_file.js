const readCsv = require('fs');

function countStudents(path) {
  readCsv.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const readData = data.split('\n');
    /* Since the file line contains the header */
    const header = readData[0].split(',');
    const studentNo = readData.length - 1;
    let csStud = 0;
    let sweStud = 0;
    let csFir = [];
    let sweFir = [];

    for (let i = 1; i < readData.length; i++) {
      studInfo = readData[[i]].split(',');
      if (studInfo[3].replace(/\r/g, '') === "CS") {
        csStud++;
        csFir.push(studInfo[0]);
      } else {
        sweStud++;
        sweFir.push(studInfo[0]);
      }
    }
    console.log(`Number of students: ${studentNo}`);
    console.log(`Number of students in CS: ${csStud}. List: ${csFir.
      join(", ")}`);
    console.log(`Number of students in SWE: ${sweStud}. List: ${sweFir.
      join(", ")}`);
  });
}

module.exports = countStudents;
