const form = document.forms[0];
const nameInput = form.nameInput;
const startButton = form.startButton;

startButton.addEventListener("click", () => {
  location.href = "./game.html";
});
