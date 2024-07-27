import studentData from "./studentdata.js";

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const div = document.getElementById('student-container');


function renderStudent(students) {
    div.innerHTML = '';
    students.forEach(student => {
        const newdata = document.createElement('div');
        newdata.classList.add('students');

        newdata.innerHTML = `
            <h2>${student.studentName}</h2>
            <p>Mark: ${student.mark}</p>
            <p>Class: ${student.class}</p>
            <p>Address: ${student.address}</p>
        `;
        
        div.appendChild(newdata);
    });
  }
renderStudent(studentData);

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredStudents = studentData.filter(student => 
        student.studentName.toLowerCase().includes(searchTerm)
    );

    console.log(filteredStudents)
    renderStudent(filteredStudents);
});
