const navtoggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

//탭메뉴(반응형)
navtoggle.addEventListener("click", function () {
  //linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

//어느정도 내려오면 nav바 고정
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  const navHeignt = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeignt) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  //화살표(누르면 #home으로)
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//스크롤 부드럽게
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    //.scroll-link를 가진 속성에서 href의 값을 반환
    const id = e.currentTarget.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    console.log(element);

    let position = element.offsetTop; //offsetTop은 y축위치값

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
