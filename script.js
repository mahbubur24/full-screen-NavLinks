const container = document.querySelector(".container");
const slideRight = document.getElementById("slideRight");
const slideUp = document.getElementById("slideUp");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close");

let isEnd = false;
let isClick = false;

window.addEventListener("load", function () {
  container.style.height = `${window.innerHeight - getScrollbarWidth()}px`;
});

slideRight.addEventListener("click", function () {
  menu.style.width = 0;
  setTransitionProp("width");
});

slideUp.addEventListener("click", function () {
  menu.style.height = 0;
  setTransitionProp("height");
});

closeMenu.addEventListener("click", function () {
  isClick = true;
  if (menu.style.transitionProperty === "width") {
    menu.style.width = `0%`;
  } else {
    menu.style.height = `0%`;
  }
  isEventStop();
});

function isEventStop() {
  menu.addEventListener("transitionend", function () {
    isEnd = true;
    clearValues();
  });
}

function clearValues() {
  if (isClick && isEnd) {
    menu.style.width = `0%`;
    menu.style.height = `0%`;
  }
}

function setTransitionProp(prop) {
  isClick = false;
  menu.style.width = `100%`;
  menu.style.height = `100%`;
  menu.style.left = 0;
  if (prop === "width") {
    menu.style.transitionProperty = "width";
  } else if (prop === "height") {
    menu.style.transitionProperty = "height";
  }
}

function getScrollbarWidth() {
  // Create a temporary element
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  outer.style.width = "50px";
  outer.style.height = "50px";
  document.body.appendChild(outer);

  // Create a child element inside the temporary element
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculate the scrollbar width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Clean up
  document.body.removeChild(outer);

  return scrollbarWidth;
}
