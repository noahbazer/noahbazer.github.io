// Custom easing function for scrolling
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Give header-container the header-container-scrolled class on scroll
window.addEventListener('scroll', function () {
  const headerContainer = document.querySelector('.header-container');
  if (window.scrollY > 0) {
    headerContainer.classList.add('header-container-scrolled');
  } else {
    headerContainer.classList.remove('header-container-scrolled');
  }
});

// Smooth scroll function
function smoothScroll(target, duration) {
  const start = window.pageYOffset;
  const end = typeof target === 'number' ? target : target.offsetTop;
  const distance = end - start;
  const startTime = performance.now();

  function scroll() {
    const currentTime = performance.now();
    const time = Math.min(1, (currentTime - startTime) / duration);
    const timeFunction = easeInOutQuad(time);
    window.scrollTo(0, start + distance * timeFunction);

    if (time < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

// Attach smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      smoothScroll(targetElement, 1000); // Adjust duration as needed
    }
  });
});

function setTextAnimation(
  delay,
  duration,
  strokeWidth,
  timingFunction,
  strokeColor,
  repeat
) {
  let paths = document.querySelectorAll('path');
  let mode = repeat ? 'infinite' : 'forwards';
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const length = path.getTotalLength();
    path.style['stroke-dashoffset'] = `${length}px`;
    path.style['stroke-dasharray'] = `${length}px`;
    path.style['stroke-width'] = `${strokeWidth}px`;
    path.style['stroke'] = `${strokeColor}`;
    path.style[
      'animation'
    ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
    path.style['animation-delay'] = `${i * delay}s`;
  }
}
setTextAnimation(0.1, 2.2, 2, 'linear', '#ffe7a3', false);

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

document.addEventListener('DOMContentLoaded', function () {
  // Disable default scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Scroll to the top on page load
  window.scrollTo(0, 0);

// Function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target); // Stop observing once the element is visible
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.5 // Trigger when 50% of the element is visible
});

// Function to observe elements
function updateSectionVisibility() {
  const aboutMe2Images = document.querySelector('.about-me-2-images');
  const aboutMe2Content = document.querySelector('.about-me-2-content');
  const aboutMe3Images = document.querySelector('.about-me-3-images');
  const aboutMe3Content = document.querySelector('.about-me-3-content');
  const aboutMe4Images = document.querySelector('.about-me-4-images');
  const aboutMe4Content = document.querySelector('.about-me-4-content');
  const aboutMe5Images = document.querySelector('.about-me-5-images');
  const aboutMe5Content = document.querySelector('.about-me-5-content');

  // Set initial opacity to 0
  aboutMe2Images.style.opacity = '0';
  aboutMe2Content.style.opacity = '0';
  aboutMe3Images.style.opacity = '0';
  aboutMe3Content.style.opacity = '0';
  aboutMe4Images.style.opacity = '0';
  aboutMe4Content.style.opacity = '0';
  aboutMe5Images.style.opacity = '0';
  aboutMe5Content.style.opacity = '0';

  // Observe elements
  observer.observe(aboutMe2Images);
  observer.observe(aboutMe2Content);
  observer.observe(aboutMe3Images);
  observer.observe(aboutMe3Content);
  observer.observe(aboutMe4Images);
  observer.observe(aboutMe4Content);
  observer.observe(aboutMe5Images);
  observer.observe(aboutMe5Content);
}

// Call the updateSectionVisibility function to start observing
updateSectionVisibility();

const disclaimer = document.getElementById('disclaimer');

const hideDisclaimer = () => {
  disclaimer.style.bottom = '-100px';
};

const deleteDisclaimer = () => {
  localStorage.setItem('disclaimer', 'true');
  hideDisclaimer();
};

const checkDisclaimer = () => {
  if (localStorage.getItem('disclaimer') !== 'true') {
    disclaimer.style.bottom = '0';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  checkDisclaimer();
});

function downloadResume() {
  let downloadButton = document.getElementById('resume');
  downloadButton.innerHTML = 'Downloading...';
  setTimeout(() => {
    downloadButton.innerHTML = 'Download Resume';
  }, 3000);
}});
