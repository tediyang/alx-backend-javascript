export default function getStudentsByLocation(arrayStudent, city) {
  const students = [];
  for (const student of arrayStudent) {
    if (student.location === city) {
      students.push(student);
    } 
  }

  return students;
}
