var students = [];

function Student(id, grade) {
    this.id = id;
    this.grade = grade;
}

function sendGrades() {
    var studentCount = document.getElementById('StudentCount').value;
    var outOf = document.getElementById('OutOf').value;

    var i; for (i = 0; i < studentCount; i++) {
        var workingRow = document.getElementsByTagName('tr').item(i);

        var workingId = workingRow.getElementsByTagName('td')[0].innerHTML;
        // extract student number contained in brackets from innerHTML ^
        var matches = /\(([^)]+)\)/.exec(workingId);
        // matches = null when student number is cut off
        if (matches != null) { workingId = matches[1]; }
        else { workingId = "cutt off"; }

        var workingGrade = workingRow.getElementsByTagName('input')[1].value;
        workingGrade = Math.round(workingGrade / outOf * 100);

        students.push(new Student(workingId, workingGrade));
    }

  }


   var button = document.getElementById("Submit1")
  button.addEventListener("click", function(){
    sendGrades();
    chrome.runtime.sendMessage({text: "click", array: students})
});
