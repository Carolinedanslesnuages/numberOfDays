const  quarantineObject = {
  italy: {
    country: 'Italia',
    date : new Date('Sun Mar 9 2020 00:00:00'),
    day: 'giorni',
    hours:'ore',
    minutes: 'minuti',
    secondes: 'secondi',
    sentence : 'dall \'inizio del contenimento'
  },
  spain: {
    country: 'españa',
    date : new Date('Sun Mar 15 2020 00:00:00'),
    day: 'dias',
    hours:'horas',
    minutes: 'minutos',
    secondes: 'segundos',
    sentence : 'desde el inicio del confinamiento'
  },
  
  france: {
    country: 'France',
    date : new Date('Mon Mar 17 2020 00:00:00'), 
    day: 'jour(s)',
    hours: 'heure(s)',
    minutes: 'minutes',
    secondes: 'secondes',
    sentence :'depuis le début du confinement'
    
  },
  unitedKingdom: {
    country: 'United Kingdom',
    date : new Date('Mon Mar 23 2020 00:00:00'),
    day: 'day',
    hours:'hours',
    minutes: 'minutes',
    secondes: 'seconds',
    sentence : 'since the beginning of the quarantine'
  },

}

function myQuarantine (id) {


for ( const [key, value] of Object.entries(quarantineObject) ) {
  const currentDate = new Date()

  const dateDiff = currentDate.getDate() - value.date.getDate()
  const hours = currentDate.getHours() - value.date.getHours()
  const minutes = currentDate.getMinutes() - value.date.getMinutes()
  const secondes = currentDate.getSeconds() - value.date.getSeconds()


    const displayQuarantineDate = `<li class="list-group-item my-3" >${value.country}  : ${dateDiff} ${value.day} ${hours}  ${value.hours}  ${minutes} ${value.minutes} ${secondes} ${value.secondes} ${value.sentence} </li>`

  document.getElementById('day').innerHTML += displayQuarantineDate

 }

}


myQuarantine("day");
