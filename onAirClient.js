var status = "offline";

console.log("onAirClient loaded, status " + status);

let observer = new MutationObserver(mutations => {
    var target = document.querySelector("[aria-label='Leave call']");
    //console.log(target);
    if(target && status == "offline") {
      status = "online";
      console.log("online!");
      fetch('http://192.168.0.199/cm?cmnd=Power%20On').then(r => r.text()).then(result => {
        console.log(result);
      });
    } else if(!target && status == "online") {
      status = "offline"; 
      console.log("offline");
      fetch('http://192.168.0.199/cm?cmnd=Power%20Off').then(r => r.text()).then(result => {
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