// When the user scrolls the page, execute myFunction
window.onscroll = function() {setSticky()};

//to select features class
var features = document.querySelector(".features");
// Get the navbar
var navigation = document.querySelector("nav");

function setSticky() {
//   distance of feature section from top
    var dftop = features.offsetTop;
    // user has scrolled passed feature section top
  if(window.pageYOffset >= dftop) {
    navigation.classList.add("sticky")
  } else if(window.pageYOffset<dftop) {
    navigation.classList.remove("sticky");
  }
}