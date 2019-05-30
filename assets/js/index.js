var i = j = 0;
function load() {
  document.querySelector("body").style.opacity = "1";
  typeWriter();
}


function scrollToBottom() {
  if (window.scrollY > 0) {
    changeBackground(".navbar", "rgba(0, 53, 105, 0.8)");
  }
  if (window.scrollY > 100) {
    display(".back-to-top", "block");
  } else {
    display(".back-to-top", "none");
    changeBackground(".navbar", "transparent");
  }
}

function display(selector, value) {
  document.querySelector(selector).style.display = value;
}

function changeBackground(selector, value) {
  document.querySelector(selector).style.backgroundColor = value;
}

function typeWriter() {
  var speed = 80;
  var txt = ["Hello; ", "I'm Sarinya; ", "Web Developer; "];
  if (i < txt.length) {
    if (j < txt[i].length) {
      document.querySelectorAll(".typing")[i].innerHTML += txt[i].charAt(j);
      j++;
      setTimeout(typeWriter, speed);
    }
    if (j == txt[i].length) {
      j = 0;
      i++;
    }
  } else {
    document.querySelector("#about .button").style.opacity = "1";
    document.querySelector("#about .button").style.animation = "pulse 1s";
  }
}
