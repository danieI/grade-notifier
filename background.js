var studentArray = [];

chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if (request.text === "click"){
      studentsArray = request.array;
      alert(studentsArray[2].id);
  }
})
