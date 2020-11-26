function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var visited = getCookie("visited");

if (visited != "true") {

  const popover = document.createElement("div");
  popover.id = "welcome_popup";
  const removePopover = () => {
    const existingPopover = document.getElementById(popover.id);
    if (existingPopover && existingPopover.parentElement) {
      existingPopover.parentElement.removeChild(existingPopover);
    }
  };

  removePopover();

  popover.style.backgroundColor = "#0078D4";
  popover.style.color = "white";
  popover.style.border = "2px solid black";
  popover.style.position = "fixed";
  popover.style.bottom = "10px";
  popover.style.left = "20px";
  popover.style.width = "300px";
  popover.style.height = "100px";
  popover.style.padding = "10px";
  popover.style.borderRadius = "10px";

  const message = document.createElement("p");
  message.textContent = "Welcome to the 2048 Redesigns! Thank you for wasting your time with us!";

  const closeButton = document.createElement("a");
  closeButton.textContent = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "3px";
  closeButton.style.right = "8px";
  closeButton.style.color = "white";

  closeButton.onclick = () => {
    document.cookie = "visited=true";
    removePopover();
  };

  popover.appendChild(message);
  popover.appendChild(closeButton);
  document.body.appendChild(popover);
}