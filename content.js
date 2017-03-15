// Runs automagically on button press

function Student(id, grade) {
    this.id = id;
    this.grade = grade;
}

document.getElementById("testButton").addEventListener("click", captureGrades);

function captureGrades() {
    var students = []
    var studentCount = document.getElementById('StudentCount').value;
    var outOf = document.getElementById('OutOf').value;
    var i; for (i = 0; i < studentCount; i++) {
        var workingRow = document.getElementsByTagName('tr').item(i);
        var workingId = workingRow.getElementsByTagName('td')[0].innerHTML;
        var regx = /\(([^)]+)\)/;
        workingId = (regx.exec(workingId) != null) ? workingId = regx.exec(workingId)[1] : "cut off";
        var workingGrade = Math.round(workingRow.getElementsByTagName('input')[1].value / outOf * 100);
        students.push(new Student(workingId, workingGrade));
    }  
    console.log(students);
}


    