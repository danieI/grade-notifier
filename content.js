//Gloal! rookie mistake...
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

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
      
        // process DOM data
        sendGrades();
        //send students array!
        sendResponse(students);

    }
});
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});

// document.getElementById("testButton").addEventListener("click", sendGrades);
