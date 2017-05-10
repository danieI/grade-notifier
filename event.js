studentArray = [];

chrome.runtime.onMessage(function(request, sender, sendResponse){
  if (request.text === "click") {
    studentArray = request.array;
  }
})
