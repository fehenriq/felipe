let currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;

setInterval(function() {
  if (currentYear !== document.getElementById('year').innerHTML) {
    document.getElementById('year').innerHTML = "&copy " + currentYear + " - " + "Felipe Rodrigues";
  }
}, 1000);