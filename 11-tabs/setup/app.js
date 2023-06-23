const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  console.log(e.target.dataset.id);

  const id = e.target.dataset.id; //데이터 속성 가져오기

  //탭버튼이 눌렀을때 active효과
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active"); //기존 btn active제거
      e.target.classList.add("active");
    });
  }

  articles.forEach(function (content) {
    content.classList.remove("active"); //기존 article active제거
  });
  const element = document.getElementById(id);
  element.classList.add("active");
});
