export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter((students) => students.location === city)
  .map((student) => {
    let grade = 'N/A';
    if (newGrade.filter((gr) => gr.studentId === student.id).length > 0) {
      grade = newGrade.filter((gr) => gr.studentId === student.id)[0].grade;
    }
    return {
      ...student,
      grade: grade,
    };
  });
}
