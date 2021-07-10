var button = document.getElementById("slide");
button.onclick = function () {
  var container = document.getElementsByClassName("grandfather-container");
  sideScroll(container[0], "right", 25, 100, 10);
};

var back = document.getElementById("slideback");
back.onclick = function () {
  var container = document.getElementsByClassName("grandfather-container");
  sideScroll(container[0], "left", 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
