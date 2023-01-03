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
