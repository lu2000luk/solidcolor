var param = location.href.split("?")
var color = param[1]
if ((color === "") || (color === undefined)) {
  location = "info.htm"
  console.warn("Moving to: info.htm | Reason: Data Not Found")
} else if ((color === "beddus") || (color === "multicolor")) {
  console.log("Beddus mode.")
  var beddus = {
                     "isGiante": true, 
                     "isActived": true
                    }
  document.body.style.animation = "beddus 5.2s linear 0s infinite normal none";
  document.body.style.webkitAnimation = "beddus 5.2s linear 0s infinite normal none";
  document.body.style.mozAnimation = "beddus 5.2s linear 0s infinite normal none";
  document.body.style.msAnimation = "beddus 5.2s linear 0s infinite normal none";
  document.body.style.oAnimation = "beddus 5.2s linear 0s infinite normal none";
} else {
  document.body.setAttribute('style', 'background-color: ' + color)
  console.log("Fetched color: " + color)
}