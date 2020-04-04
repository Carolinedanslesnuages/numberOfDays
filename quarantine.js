const  quarantineObject = {
  italy: {
    country: 'Italy',
    date : new Date('Sun Mar 9 2020 00:00:00'),
    flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"/>'
  },

  denmark: {
    country: 'Denmark',
    date : new Date('Sat Mar 11 2020 00:00:00'),
    flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg"/>'
  },

  spain: {
    country: 'Spain',
    date : new Date('Sun Mar 15 2020 00:00:00'),
    flag : '<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" />'
  },

  austria: {
    country: 'Austria',
    date : new Date('Thu Mar 16 2020 00:00:00'),
    flag : '<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" />'
  },

  france: {
    country: 'France',
    date : new Date('Mon Mar 17 2020 00:00:00'),
    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"/>'

  },
  belgique: {
    country: 'Belgium',
    date : new Date('Mon Mar 18 2020 00:00:00'),
    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg"/>'

  },

  marocco: {
    country: 'Marocco',
    date : new Date('Fri Mar 20 2020 00:00:00'),
    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"/>'
  },

  tunisia: {
    country: 'Tunisia',
    date : new Date('Sun Mar 22 2020 00:00:00'),
    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg"/>'
  },

  rwanda: {
    country: 'Rwanda',
    date : new Date('Sun Mar 22 2020 00:00:00'),
    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg"/>'
  },

  greece: {
    country: 'Greece',
    date : new Date('Sun Mar 22 2020 00:00:00'),
    flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"/>'
  },
  unitedKingdom: {
    country: 'United Kingdom',
    date : new Date('Mon Mar 23 2020 00:00:00'),
    flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"/>'
  },

  india: {
    country: 'India',
    date : new Date('Mon Mar 24 2020 00:00:00'),
    flag: '<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"/>'
  },



  southAfrica: {
    country: 'South Africa',
    date : new Date('Mon Mar 30 2020 00:00:00'),
    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg"/>'
  },

  zimbabwe: {
    country: 'Zimbabwe',
    date : new Date('Mon Mar 30 2020 00:00:00'),
    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg"/>'
  },

  nigeria: {
    country: 'Nigeria',
    date : new Date('Mon Mar 30 2020 00:00:00'),

    flag:'<img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"/>'
  },


}

function createCards (id) {
  document.getElementById(id).innerHTML = ""
  for ( const [country, value] of Object.entries(quarantineObject) ) {
    const displayQuarantineDate =
    `<div class="text-center bg-gray-200 max-w-xs rounded shadow" id="${country}">
        <div class="font-bold">
          ${value.country}
          ${value.flag}
        </div>
        <p id="count-${country}" class="font-semibold  text-gray-800"></p>
    </div>`

    document.getElementById('day').innerHTML += displayQuarantineDate

  }

}

function computeCount () {
  const currentDate = new Date()

  for ( const [country, value] of Object.entries(quarantineObject) ) {
    const dateDiff = currentDate.getTime() - value.date.getTime()

    const difference_In_Days = Math.floor(dateDiff / Math.floor((1000 * 3600 * 24)));
    const hours = currentDate.getHours() - value.date.getHours()
    const minutes = currentDate.getMinutes() - value.date.getMinutes()
    const secondes = currentDate.getSeconds() - value.date.getSeconds()

    const count = `
      ${difference_In_Days} days
      ${hours} hours
      ${minutes} minutes
      ${secondes} seconds
    `
    document.getElementById(`count-${country}`).innerHTML = count
  }

  setTimeout(computeCount, 1000);
}


createCards('day');
computeCount()

