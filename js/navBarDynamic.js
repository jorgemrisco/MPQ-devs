
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu-bar");
var text = document.getElementsByClassName("nav-button");
var logo = document.getElementById("logo-reference");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    document.body.style.margin = "100px 0px";
    navbar.classList.add("sticky");
    navbar.style.background="black";
    logo.src = "assets/images/logo/MPQ-logo-white.png";
    for(var i=0; i<text.length; i++) { 
        text[i].style.color="white";
      }


  } else {
    document.body.style.margin = "0px 0px";
    navbar.classList.remove("sticky");
    navbar.style.background="white";
    logo.src = "assets/images/logo/MPQ-logo-black.png";
    for(var i=0; i<text.length; i++) { 
        text[i].style.color="black";
      }
  }
} 

