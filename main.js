// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function disableIframePointerEvents() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.style.pointerEvents = 'none';
  });
}

// Function to enable pointer events on iframes
function enableIframePointerEvents() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.style.pointerEvents = 'auto';
  });
}

// Add scroll event listener to disable pointer events on iframes
let scrollTimeout;
window.addEventListener('scroll', () => {
  disableIframePointerEvents();
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(enableIframePointerEvents, 100); // Adjust timeout as needed
});

// Lock scroll by setting body to fixed position and hide scrollbar
document.body.style.position = 'fixed';
document.body.style.width = '100%';
document.body.classList.add('scrollbar-hidden');

// Enable scrolling after 4 seconds and show scrollbar gracefully
setTimeout(() => {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.classList.remove('scrollbar-hidden');
  document.body.classList.add('scrollbar-visible');
  setTimeout(() => {
    document.body.classList.remove('scrollbar-visible');
  }, 2000); // Match this duration with the transition duration
}, 4000);

// Give header-container the header-container-scrolled class on scroll
window.addEventListener('scroll', function () {
  const headerContainer = document.querySelector('.header-container');
  const scrollHint = document.getElementById('scrollhintp');
  console.log('ScrollHint Element:', scrollHint); // Check if the element is found
  if (window.scrollY > 0) {
    headerContainer.classList.add('header-container-scrolled');
    console.log('Before setting opacity to 0:', scrollHint.style.opacity);
    scrollHint.style.opacity = '0';
    console.log('After setting opacity to 0:', scrollHint.style.opacity);
  } else {
    headerContainer.classList.remove('header-container-scrolled');
    console.log('Before setting opacity to 1:', scrollHint.style.opacity);
    scrollHint.style.opacity = '1';
    console.log('After setting opacity to 1:', scrollHint.style.opacity);
  }
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
    entries.forEach((entry) => {
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
    threshold: 0.5, // Trigger when 50% of the element is visible
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
  }
});
