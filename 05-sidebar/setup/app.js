const sidebtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closebtn = document.querySelector(".close-btn");

sidebtn.addEventListener("click", function () {
  //toggle기능으로 보이고 안보이고
  sidebar.classList.toggle("show-sidebar");
});

closebtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
