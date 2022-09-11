const colors = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// const getRandomNumber1 = getRandomNumber();
// error: const getRandomNumber1 = getRandomNumber(); only get one color
// getRandomNumber = getRandomNumber(), getRandomNumber has been declare

function getColor() {
  let selectColor = "#";
  for (i = 0; i < 6; i++) {
    selectColor += colors[getRandomNumber()];
  }
  return selectColor;
}
// selectColor += colors[getRandomNumber] undefineunderfineundefineundefineunderfineundefine

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  document.body.style.background = getColor();
  color.textContent = getColor();
});
