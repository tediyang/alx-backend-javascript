const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const readData = data.split('\n');
    let csStud = 0;
    let sweStud = 0;
    const csFir = [];
    const sweFir = [];
  
    for (let i = 1; i < readData.length; i += 1) {
      const studInfo = readData[[i]].split(',');
      if (studInfo[3].replace(/\r/g, '') === 'CS') {
        csStud += 1;
        csFir.push(studInfo[0]);
      } else {
        sweStud += 1;
        sweFir.push(studInfo[0]);
      }
    }
  } catch {
    throw new Error('Cannot load the database');
  }

  console.log(`Number of students: ${csStud + sweStud}`);
  console.log(`Number of students in CS: ${csStud}. List: ${csFir
    .join(', ')}`);
  console.log(`Number of students in SWE: ${sweStud}. List: ${sweFir
    .join(', ')}`);
}

module.exports = countStudents;
