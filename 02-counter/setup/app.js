let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((el) => {
  el.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log(styles);

    //아래와 같은 글자를 포함할때 count 수 변화
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    //색상 변경
    if (count > 0) {
      value.style.color = "Green";
    }
    if (count < 0) {
      value.style.color = "Red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    //아래와 같은 코드로 인해 count작동
    value.textContent = count;
  });
});
