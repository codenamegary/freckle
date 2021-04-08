(function(){

  let shakeTimer = null;

  /**
   * This is a fix for opening links in the popup html in new tabs. Without this fix,
   * the links are broken and don't do anything. Taken from:
   * 
   * https://stackoverflow.com/questions/8915845/chrome-extension-open-a-link-from-popup-html-in-a-new-tab
   */
  document.addEventListener('DOMContentLoaded', () => {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      (function () {
          var ln = links[i];
          if(ln.href == "" || ln.href == "#") {
            return;
          }
          var location = ln.href;
          ln.onclick = function () {
            chrome.tabs.create({active: true, url: location});
          };
      })();
    }
  });

  chrome.storage.sync.get(["options"], o => {
    console.log("Loaded options");
    if(!o || !o.hasOwnProperty("options")) {
      return;
    }
    if(o.options.hasOwnProperty("online")) {
      document.getElementById("online-url").value = o.options.online;
    }
    if(o.options.hasOwnProperty("offline")) {
      document.getElementById("offline-url").value = o.options.offline;
    }
  });

  function sendRequest(url) {
    return fetch(url,{
      method: 'GET'
    });
  }

  document.getElementById("reset-options").addEventListener('click', e => {
    let onlineUrlEl = document.getElementById("online-url");
    let offlineUrlEl = document.getElementById("offline-url");
    onlineUrlEl.value = "http://192.168.0.[X]/cm?cmnd=Power%20On";
    offlineUrlEl.value = "http://192.168.0.[X]/cm?cmnd=Power%20Off";
    showGenericToast("fa-thumbs-up", "text-success", "Default options loaded, don't forget to save.");
    shakeSaveButton();
  });

  function handleUrlTestResult(request) {
    request.then(response => {
      console.log("Sent test URL request, response.");
      console.log(response);
      if(response.status == 200) {
        showGenericToast("fa-thumbs-up", "text-success", "Sweet. Got a 200 OK response.");
      } else {
        showGenericToast("fa-question", "text-warning", "Hey bro, got a response status of " + response.status + ". Not sure if that's okay or not. You can inspect this dialog and check the console and network tab to see what happened.");
      }
      shakeSaveButton();
    }).catch(error => {
      console.log("Sent test URL request, got error.");
      console.log(error);
      showGenericToast("fa-thumbs-down", "text-danger", "Got an error there chief. Inspect this dialog and check network tab in the inspector.");
    });
  }

  document.getElementById("test-online-url").addEventListener('click', () => {
    let onlineUrl = document.getElementById("online-url").value;
    handleUrlTestResult(sendRequest(onlineUrl));
  });

  document.getElementById("test-offline-url").addEventListener('click', () => {
   let offlineUrl = document.getElementById("offline-url").value;
    handleUrlTestResult(sendRequest(offlineUrl));
  });

  document.getElementById("save-config").addEventListener('click', () => {
    let onlineUrl = document.getElementById("online-url").value;
    let offlineUrl = document.getElementById("offline-url").value;
    let formOptions = {
      online: onlineUrl,
      offline: offlineUrl
    }
    chrome.storage.sync.set({options: formOptions}, () => {
      chrome.runtime.sendMessage({event: "options.updated", options: formOptions});
      showGenericToast("fa-thumbs-up", "text-success", "Changes saved.");
    });
  });

  function showGenericToast(icon, color, message) {
    let toastEl = document.getElementById("generic-toast");
    let messageEl = toastEl.querySelector(".message");
    if(messageEl) {
      messageEl.innerHTML = message;
      messageEl.className = "message";
      messageEl.classList.add(color);
    }
    let iconEl = toastEl.querySelector(".fas");
    if(iconEl) {
      iconEl.className = 'fas';
      iconEl.classList.add(icon);
      iconEl.classList.add(color);
    }
    let toast = new bootstrap.Toast(toastEl);
    toast.show();
  }

  function shakeSaveButton() {
    let element = document.getElementById("save-config");
    element.classList.add('animate__animated');
    element.classList.add('animate__tada');
    if(shakeTimer) {
      clearTimeout(shakeTimer);
    }
    shakeTimer = setTimeout(() => {
      element.classList.remove('animate__animated');
      element.classList.remove('animate__tada');
    }, 1000);
  }

})();