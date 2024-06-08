let mybutton = document.getElementById("btn-back-to-top");
let socialIcons = document.querySelector(".whatsap_button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    socialIcons.style.display = "block";
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    socialIcons.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}