(function(){

  chrome.runtime.onInstalled.addListener(() => {
    console.log('extension ready');
  });

  chrome.runtime.onMessage.addListener((request, sender, callback) => {
    if (request.event == "options.updated"){
      console.log("Background worker got options updated event.");
      console.log(request);
      chrome.tabs.query({}, tabs => {
        console.log(tabs);
        tabs.forEach(tab => {
          console.log("sending request message to " + tab.id);
          chrome.tabs.sendMessage(tab.id, request);
        });
      });
      callback(request);
    }
  });

})();

