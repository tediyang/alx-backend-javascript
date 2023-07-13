// Create interface of student
interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

// First student
const student1: Student = {
  firstName: 'Daniel',
  lastName: 'Eyang',
  age: 27,
  location: 'Lagos'
};

// Second student
const student2: Student = {
  firstName: 'Reaper',
  lastName: 'Codes',
  age: 2,
  location: 'Lagos'
};

// List of students
const studentsList = [student1, student2]

// Get the table from the html file
const table = document.createElement('table') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
