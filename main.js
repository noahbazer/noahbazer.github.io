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
  // Disable default scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Scroll to the top on page load
  window.scrollTo(0, 0);

  let currentSection = 0;
  let isScrolling = false;
  const sections = document.querySelectorAll('.section');
  const headerContainer = document.getElementById('header-container');
  const scrollHint = document.querySelector('.scroll-hint');

  function smoothScroll(targetSection) {
    if (isScrolling) return;
    isScrolling = true;

    const targetPosition = sections[targetSection].offsetTop;
    const currentPosition = window.scrollY;
    const distance = targetPosition - currentPosition;
    const duration = 1000;

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
        isScrolling = false;
        updateSectionVisibility(); // Update visibility after the animation is complete
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

    if (isScrolling) return; // Ignore additional scroll events during animation

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

  function updateSectionVisibility() {
    // Toggle the visible class for specific elements in the second section
    const aboutMe2Images = document.querySelector('.about-me-2-images');
    const aboutMe2Content = document.querySelector('.about-me-2-content');

    const aboutMe3Images = document.querySelector('.about-me-3-images');
    const aboutMe3Content = document.querySelector('.about-me-3-content');

    if (currentSection === 1) {
      aboutMe2Images.style.opacity = '1';
      aboutMe2Content.style.opacity = '1';
    } else {
      aboutMe2Images.style.opacity = '0';
      aboutMe2Content.style.opacity = '0';
    }

    if (currentSection === 2) {
      aboutMe3Images.style.opacity = '1';
      aboutMe3Content.style.opacity = '1';
    } else {
      aboutMe3Images.style.opacity = '0';
      aboutMe3Content.style.opacity = '0';
    }
  }

  window.addEventListener('wheel', handleScroll, { passive: false });
  window.addEventListener('scroll', updateHeaderClass);
  window.addEventListener('scroll', updateScrollHintVisibility);
  window.addEventListener('scroll', updateSectionVisibility);
});
