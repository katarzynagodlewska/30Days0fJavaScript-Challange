const student = {
    firstName: 'Katarzyna',
    lastName: 'Godlewska',
    age: '23',
    skills: ['HTML', 'CSS', 'JavaScript', 'SQL', 'React'],
    country: 'Poland'
}

const studentText = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentText);