const  quarantineObject = {
  italy: {
    country: 'Italia',
    date : new Date('Sun Mar 9 2020 00:00:00'),
    day: 'giorni',
    hours:'ore',
    minutes: 'minuti',
    secondes: 'secondi',
    flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"/>'
  },
  spain: {
    country: 'España',
    date : new Date('Sun Mar 15 2020 00:00:00'),
    day: 'dias',
    hours:'horas',
    minutes: 'minutos',
    secondes: 'segundos',
    flag : '<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" />'
  },

  france: {
    country: 'France',
    date : new Date('Mon Mar 17 2020 00:00:00'),
    day: 'jour(s)',
    hours: 'heure(s)',
    minutes: 'minutes',
    secondes: 'secondes',
    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"/>'

  },
  unitedKingdom: {
    country: 'United Kingdom',
    date : new Date('Mon Mar 23 2020 00:00:00'),
    day: 'day',
    hours:'hours',
    minutes: 'minutes',
    secondes: 'seconds',
    flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"/>'
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
  `<div class="text-center bg-gray-200 max-w-xs rounded shadow">
      <div class="font-bold">${value.country} ${value.flag}</div>
        <span class="font-semibold text-gray-800">${difference_In_Days} ${value.day}</span>
        <span class="font-semibold text-gray-800">${hours} ${value.hours}</span>
        <span class="font-semibold text-gray-800">${minutes} ${value.minutes}</span>
        <span class="font-semibold text-gray-800">${secondes} ${value.secondes}</span>
  </div>`

  document.getElementById('day').innerHTML += displayQuarantineDate

 }

}

setInterval(() => {
myQuarantine('day')
}, 1000);

myQuarantine('day');

