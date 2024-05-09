const introScreen = document.getElementById('intro-screen');
const screenLayer = document.getElementById('intro-screen-layer');
const introName = document.getElementById('introName');
const introBuffer = document.getElementById('introBuffer');
const navBar = document.getElementById('navbar');
const mainContainer = document.getElementById('main-container');
const headerTitle = document.getElementById('header-title');
const parallaxOne = document.getElementById('parallax1');
const parallaxTwo = document.getElementById('parallax2');

const hideTitleName = () => {
  introName.style.top = '200%';
  headerTitle.style.top = '0%';
  introBuffer.style.opacity = 0;
  setTimeout(() => {
    introScreen.style.opacity = 0;
    navBar.style.display = 'flex';
    parallaxOne.style.top = '0';
    parallaxTwo.style.top = '0';
  }, 1000);
  setTimeout(() => {
    mainContainer.style.display = 'flex';
  }, 1500);
};

setTimeout(hideTitleName, 3500);
