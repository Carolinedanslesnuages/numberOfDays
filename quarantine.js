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
  },


}

function myQuarantine () {
  document.getElementById('day').innerHTML = ""
  for ( const [key, value] of Object.entries(quarantineObject) ) {
    const currentDate = new Date()

    const dateDiff = currentDate.getTime() - value.date.getTime()

    const difference_In_Days = parseInt(dateDiff / Math.floor((1000 * 3600 * 24)));
    const hours = currentDate.getHours() - value.date.getHours()
    const minutes = currentDate.getMinutes() - value.date.getMinutes()
    const secondes = currentDate.getSeconds() - value.date.getSeconds()


  const displayQuarantineDate =
  `<div class="bg-gray-200 h-25 w-25 rounded overflow-hidden shadow">
      <div class="font-bold text-2xl">${value.country}</div>
   <div class="flex justify-center">
      <span class="w-1/3 inline-block   px-3 py-2  text-2xl  font-semibold text-gray-800">${difference_In_Days} ${value.day}</span>
      <span class="w-1/3 inline-block   px-3 py-2  text-2xl  font-semibold text-gray-800">${hours} ${value.hours}</span>
      <span class="w-1/3 inline-block   px-3 py-2  text-2xl  font-semibold text-gray-800">${minutes} ${value.minutes}</span>
      <span class="w-1/3 inline-block   px-3 py-2  text-2xl  font-semibold text-gray-800">${secondes} ${value.secondes}</span>
  </div>
  </div>`

  document.getElementById('day').innerHTML += displayQuarantineDate

 }

}

setInterval(() => {
myQuarantine('day')
}, 1000);

myQuarantine('day');

