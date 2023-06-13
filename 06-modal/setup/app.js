const openbtn = document.querySelector(".modal-btn");
const modaloverlay = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");

//toggle로 해도 결과 동일
openbtn.addEventListener("click", function () {
  modaloverlay.classList.add("open-modal");
});

closebtn.addEventListener("click", function () {
  modaloverlay.classList.remove("open-modal");
});
