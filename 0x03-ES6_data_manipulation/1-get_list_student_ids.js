export default function getListStudentIds(arrayStudent) {
  if (!(arrayStudent instanceof Array)) {
    return [];
  }

  return arrayStudent.map((val) => val.id);
}
