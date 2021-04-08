(function(){
  let status = "offline";

  console.log("onAirClient loaded, status " + status);
  
  let options = null;
  
  chrome.storage.sync.get(["options"], (o) => {
    console.log("Loaded options");
    if(!o || !o.hasOwnProperty("options")) {
      return;
    }
    options = o.options;
  });
  
  let optionsChangedHandler = (request, sender, callback) => {
    if(request.event !== "options.updated"){
      callback(request);
      return;
    }
    console.log("onAirClient got options updated event.");
    console.log(request);
    options = request.options;
    callback(request);
  }
  
  chrome.runtime.onMessage.addListener(optionsChangedHandler);
  
  let observer = new MutationObserver(mutations => {
    let target = document.querySelector("[aria-label='Leave call']");
    if(!options) {
      console.log("Options not set.");
      return;
    }
    if(target && status == "offline") {
      status = "online";
      console.log("online!");
      fetch(options.online).then(r => r.text()).then(result => {
        console.log(result);
      });
    } else if(!target && status == "online") {
      status = "offline"; 
      console.log("offline");
      fetch(options.offline).then(r => r.text()).then(result => {
        console.log(result);
      });
    }
  });
  
  observer.observe(document, {
    childList: true,
    attributes: true,
    attributeFilter: ['aria-label'],
    attributeOldValue: false,
    subtree: true
  });
  
})();

