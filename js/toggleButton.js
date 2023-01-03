let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

setInterval(function () {
  if (currentYear !== document.getElementById("year").innerHTML) {
    document.getElementById("year").innerHTML =
      "&copy " + currentYear + " - " + "Felipe Rodrigues";
  }
}, 1000);

function toggleButton() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const body = document.body;

  if (html.classList.contains("light")) {
    body.setAttribute("style", "background: var(--first-color)");
  } else {
    body.setAttribute("style", "background: var(--third-color)");
  }
}
