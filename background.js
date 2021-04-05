chrome.runtime.onInstalled.addListener(() => {
    console.log('extension ready');
});

/**
chrome.runtime.onMessage.addListener((message, callback) => {
    if (message == "runContentScript"){
      chrome.scripting.executeScript({
        file: 'onAirClient.js'
      });
    }
});
 */

/**
let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

console.log(tab);

 */

/**var target = document.querySelector("[aria-label='Leave call']");

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
  });    
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

 */