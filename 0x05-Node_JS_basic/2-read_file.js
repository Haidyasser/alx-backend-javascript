/* eslint-disable */

const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, { encoding: 'utf8' }).split('\n');
        const headers = data.shift().split(',');
        const students = data.map((row) => {
            const student = row.split(',');
            return headers.reduce((object, header, index) => {
                object[header] = student[index];
                return object;
            }, {});
        });
        const CSStudents = students.filter((student) => student.field === 'CS');
        const SWEStudents = students.filter((student) => student.field === 'SWE');
        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${CSStudents.length}. List: ${CSStudents.map((student) => student.firstname).join(', ')}`);
        console.log(`Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.map((student) => student.firstname).join(', ')}`);
    }
    catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;