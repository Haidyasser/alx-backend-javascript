export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter((students) => students.location === city)
  .map((student) => {
    return {
      ...student,
      grade: newGrade.find((grade) => grade.studentId === student.id) ? newGrade.find((grade) => grade.studentId === student.id).grade : 'N/A',
    };
  }
  );
}