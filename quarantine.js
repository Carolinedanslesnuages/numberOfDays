function myQuarantine(id) {
 
 var quarantine = new Date("Tue Mar 17 2020 12:00:00");
 var currentDate = new Date()
 var date_diff = currentDate.getDate() - quarantine.getDate();
 var time_diff = currentDate.getHours() - quarantine.getHours();
 var minutesDiff = currentDate.getMinutes() - quarantine.getMinutes();
 var seconde = currentDate.getSeconds() - quarantine.getSeconds();
 var phrase = 'depuis le début du confinement'
document.getElementById("day").innerHTML = date_diff +' jour(s) ' + time_diff  + ' heures ' + minutesDiff + ' minutes ' + seconde + ' Secondes ' +  phrase

  if(seconde<100){
    seconde = seconde
  }
  setTimeout('myQuarantine("'+id+'");','100')
  return true;
}
myQuarantine("day");
