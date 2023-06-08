const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//hex의 16진수 예: #$f15025
btn.addEventListener("click", function () {
  let hexrandom = "#";
  for (let i = 0; i < 6; i++) {
    hexrandom += hex[getRandomHex()];
  }
  console.log(hexrandom);
  document.body.style.backgroundColor = hexrandom;
  color.textContent = hexrandom;
});

//16진수를 random으로 만들기 위한 함수
function getRandomHex() {
  return Math.floor(Math.random() * hex.length);
}
