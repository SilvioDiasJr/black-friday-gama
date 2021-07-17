var date = new Date("november 26, 2021").getTime()

setInterval(function () {
  let dateNow = new Date().getTime()
  let seconds = (date - dateNow) / 1000

  let days = parseInt(seconds / 86400)
  seconds = seconds % 86400

  let hours = parseInt(seconds / 3600)
  seconds = seconds % 3600

  let minutes = parseInt(seconds / 60)
  seconds = parseInt(seconds % 60)

  document.getElementById('day').innerHTML = days
  document.getElementById('hour').innerHTML = hours
  document.getElementById('minute').innerHTML = minutes
  document.getElementById('second').innerHTML = seconds
},1000)