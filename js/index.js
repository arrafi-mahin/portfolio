// Navbar fixed top
window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("navBar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
}
// Gallery
