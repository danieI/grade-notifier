

// checking to see if it worked. Also callback function
function doStuffWithDom(studentsArray) {
    //this is where we need to convert array to JSON
    //also send it too sinatra


}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
    //send a message specifying a callback too

       chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);

});
