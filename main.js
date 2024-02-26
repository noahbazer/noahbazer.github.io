var rellax = new Rellax('.rellax');

const modals = document.querySelectorAll('.modal');
const contents = document.querySelectorAll('.modal-content');
const modalPreviews = document.querySelectorAll('.modal-preview');

const removeModal = function () {
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.opacity = 0;
    modals[i].style.pointerEvents = 'none';
    contents[i].classList.remove('visible');
    contents[i].style.pointerEvents = 'none';
  }
};

const showModal = function () {
  let modal = document.getElementById(`modal`);
  let modalContent = document.getElementById(`modal-content`);
  modal.style.opacity = 1;
  modal.style.pointerEvents = 'all';
  modalContent.classList.add('visible');
  modalContent.style.pointerEvents = 'all';
};

const filterModals = function (filter) {
  modalPreviews.forEach((card) => {
    if (filter === 'all') {
      card.style.display = 'flex';
    } else if (card.dataset.filter === filter) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

const filters = document.querySelectorAll('.sort-link');
const setActive = (child) => {
  for (let i = 0; i < filters.length; i++) {
    if (i === child - 1) {
      filters[i].id = 'sort-active';
    } else {
      filters[i].id = '';
    }
  }
};

function toggleTheme() {
  document.body.classList.toggle('light-theme');
}

let activePage = 0;

const carouselContainer = document.getElementById('carouselcon');
const carouselButtons = document.getElementsByClassName('carousel-button');

const setPage = (page) => {
  activePage = page;
  for (let i = 0; i < carouselButtons.length; i++) {
    if (i === activePage) {
      carouselButtons[i].classList.add('fa');
      carouselButtons[i].classList.remove('fa-regular');
    } else {
      carouselButtons[i].classList.remove('fa');
      carouselButtons[i].classList.add('fa-regular');
    }
  }
  movePage(activePage);
};

const nextPage = () => {
  console.log(carouselButtons.length);
  if (activePage < carouselButtons.length - 1) {
    activePage++;
    setPage(activePage);
  }
};

const lastPage = () => {
  if (activePage > 0) {
    activePage--;
    setPage(activePage);
  }
};

const movePage = (page) => {
  const count = page * 810;
  const newLeft = `-${count}px`;
  console.log('New left:', newLeft);
  carouselContainer.style.left = newLeft;
};

document.addEventListener('DOMContentLoaded', function () {
  let currentSection = 0;
  let isScrolling = false; // Flag to track whether a scroll animation is in progress
  const sections = document.querySelectorAll('.section');
  const headerContainer = document.getElementById('header-container');
  const scrollHint = document.querySelector('.scroll-hint');

  function smoothScroll(targetSection) {
    if (isScrolling) return; // Ignore additional scroll events if an animation is in progress
    isScrolling = true; // Set the flag to indicate that a scroll animation is starting

    const targetPosition = sections[targetSection].offsetTop;
    const currentPosition = window.scrollY;
    const distance = targetPosition - currentPosition;
    const duration = 1000; // Adjust the duration as needed

    let startTime;

    function animation(currentTime) {
      if (startTime === undefined) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const ease = easeInOutCubic(
        elapsedTime,
        currentPosition,
        distance,
        duration
      );
      window.scrollTo(0, ease);

      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      } else {
        // Animation complete, reset the flag
        isScrolling = false;
      }
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  }

  function handleScroll(event) {
    event.preventDefault();
    const delta = event.deltaY;

    if (delta > 0 && currentSection < sections.length - 1) {
      currentSection++;
      smoothScroll(currentSection);
    } else if (delta < 0 && currentSection > 0) {
      currentSection--;
      smoothScroll(currentSection);
    }

    // Update header class based on scroll position
    updateHeaderClass();

    // Update scroll-hint visibility based on current section
    updateScrollHintVisibility();

    // Update visibility of elements in the second section
    updateSectionTwoVisibility();
  }

  function updateHeaderClass() {
    const scrolledClass = 'header-container-scrolled';
    const scrollThreshold = 5;

    if (window.scrollY >= scrollThreshold) {
      headerContainer.classList.add(scrolledClass);
    } else {
      headerContainer.classList.remove(scrolledClass);
    }
  }

  function updateScrollHintVisibility() {
    const targetSection = 1; // Adjust the target section index as needed

    if (currentSection === targetSection) {
      // Set the opacity or hide the scroll hint element
      scrollHint.style.opacity = '0'; // Adjust as needed for your preferred opacity value
    } else {
      // Reset the opacity or show the scroll hint element
      scrollHint.style.opacity = '1'; // Adjust as needed for your preferred opacity value
    }
  }

  function updateSectionTwoVisibility() {
    const targetSection = 0; // Adjust the target section index as needed

    // Check if the current section is the second section
    const isSectionOne = currentSection === targetSection;

    // Toggle the visible class for specific elements in the second section
    const aboutMe2Images = document.querySelector('.about-me-2-images');
    const aboutMe2Content = document.querySelector('.about-me-2-content');

    if (!isSectionOne) {
      aboutMe2Images.style.opacity = '1';
      aboutMe2Content.style.opacity = '1';
    } else {
      aboutMe2Images.style.opacity = '0';
      aboutMe2Content.style.opacity = '0';
    }
  }

  window.addEventListener('wheel', handleScroll, { passive: false });
  window.addEventListener('scroll', updateHeaderClass);
  window.addEventListener('scroll', updateScrollHintVisibility);
  window.addEventListener('scroll', updateSectionTwoVisibility);
});
