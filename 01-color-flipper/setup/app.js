const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //버튼을 클릭하면 random으로 컬러가 바뀌도록
  let randomNumber = getRandomColor();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
