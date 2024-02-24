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

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY >= 5) {
    document
      .getElementById('header-container')
      .classList.add('header-container-scrolled');
  } else {
    document
      .getElementById('header-container')
      .classList.remove('header-container-scrolled');
  }
});

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
