const switchbtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

switchbtn.addEventListener("click", function () {
  console.log(switchbtn.classList);
  //css에 .slide존재
  if (!switchbtn.classList.contains("slide")) {
    switchbtn.classList.add("slide");
    video.pause();
  } else {
    switchbtn.classList.remove("slide");
    video.play();
  }
});

//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
