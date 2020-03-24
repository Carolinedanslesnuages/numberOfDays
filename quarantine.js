 var quarantine = new Date("Tue Mar 17 2020 12:00:00");
 var currentDate = new Date()
 var date_diff = currentDate.getDate() - quarantine.getDate();
 var phrase = 'jour(s) depuis le début du confinement'
document.getElementById("day").innerHTML = date_diff + ' '+ phrase
