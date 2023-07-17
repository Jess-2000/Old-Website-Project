"use strict";

function clockTick() {
  var currentTime = new Date(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes);
 
  document.getElementById('date').innerHTML = text;
}

setInterval(clockTick, 1000);