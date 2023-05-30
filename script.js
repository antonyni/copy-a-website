const r = document.querySelector(':root');
const rs = getComputedStyle(r);
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
const body = document.body;
const checker = document.getElementById("checker");
const header = document.getElementById("header");
let prev = document.documentElement.scrollTop;
let whiteMode = false;
let visibleMode = true;

function checkerFunction() {
  const logo = document.getElementById("logo-text");
  let scroll = document.documentElement.scrollTop;
  if (checker.checked) {
    logo.style.setProperty('color', 'var(--button-font)');
    // if (scroll > 1500)
    //   header.style.setProperty('background-color', 'rgba(4, 40, 37, 1)');
    // else
    //   header.style.setProperty('background-color', 'white');
    header.style.setProperty('background-color', 'var(--hamburger-color)');
    r.style.setProperty('--transition', '0');
  }
  else if (!checker.checked) {
    logo.style.setProperty('color', 'var(--text)');
    r.style.setProperty('--transition', '100%');
    header.style.setProperty('background-color', 'var(--background-color)');
    // if (scroll > 1500)
    //   header.style.setProperty('background-color', 'white');
    // else
    //   header.style.setProperty('background-color', 'rgba(4, 40, 37, 1)');
  }

}
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  let scroll = document.documentElement.scrollTop;
  if (scroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
  // console.log(scroll);
  //down
  if (scroll > prev && !body.classList.contains(scrollDown) && scroll > 630) {
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  }
  //up
  else if (scroll < prev &&
    body.classList.contains(scrollDown) && scroll > 630) {
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  //header visibility
  if (scroll > 175 && scroll < 630 && visibleMode) {
    r.style.setProperty('--header-height', '80px');
    r.style.setProperty('--header-visibility', "rgba(4, 40, 37, 1)");
    visibleMode = false;
  }
  else if (scroll < 175 && !visibleMode) {
    r.style.setProperty('--header-height', '160px');
    r.style.setProperty('--header-visibility', "rgba(4, 40, 37, 0)");
    visibleMode = true;
  }
  //white background
  if (scroll > 2020 && !whiteMode) {
    r.style.setProperty('--background-color', 'white');
    r.style.setProperty('--text', 'black');
    r.style.setProperty('--header-visibility', "white");
    r.style.setProperty('--gray-underline', 'rgba(180, 180, 180, 1)');
    r.style.setProperty('--white-underline', 'black');
    r.style.setProperty('--button-color', 'rgba(4, 40, 37, 1)');
    r.style.setProperty('--button-font', 'white');
    r.style.setProperty('--hamburger-underline', 'white');
    r.style.setProperty('--hamburger-color', 'rgba(4, 40, 37, 1)');
    r.style.setProperty('--hamburger-text', 'white');
    r.style.setProperty('--header-height', '80px');
    // console.log(r.style.getPropertyValue('--button-color'));
    whiteMode = true;
  }
  //green background
  else if (scroll < 2020 && scroll > 630 && whiteMode) {
    r.style.setProperty('--background-color', 'rgba(4, 40, 37, 1)');
    r.style.setProperty('--text', 'white');
    r.style.setProperty('--gray-underline', 'rgba(217, 217, 217, .4)');
    r.style.setProperty('--white-underline', 'white');
    r.style.setProperty('--button-color', 'white');
    r.style.setProperty('--header-visibility', "rgba(4, 40, 37, 1)")
    r.style.setProperty('--button-font', 'black');
    r.style.setProperty('--hamburger-underline', 'black');
    r.style.setProperty('--hamburger-color', 'white');
    r.style.setProperty('--hamburger-text', 'black');
    r.style.setProperty('--header-height', '80px');
    whiteMode = false;
    // console.log(r.style.getPropertyValue('--button-color'));
  }
  prev = scroll;
}