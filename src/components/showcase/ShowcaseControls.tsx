export function ShowcaseControls() {
  return (
    <div className="carousel-controls">
      <i
        className="fa fa-chevron-left"
        onClick={lastPage}
      ></i>
      <i
        className="fa fa-circle carousel-button"
        onClick={setPage(0)}
      ></i>
      <i
        className="fa-regular fa-circle carousel-button"
        onClick={setPage(1)}
      ></i>
      <i
        className="fa-regular fa-circle carousel-button"
        onClick={setPage(2)}
      ></i>
      <i
        className="fa fa-chevron-right"
        onClick={nextPage}
      ></i>
    </div>
  );
}

interface activePage {
  activePage: number;
}

interface carouselContainer {
  carouselContainer: HTMLElement;
}

interface carouselButtons {
  carouselButtons: HTMLCollectionOf<Element>;
}

let activePage = 0;

const carouselContainer = document.getElementById('carouselcon');
const carouselButtons = document.getElementsByClassName('carousel-button');

const setPage = (page: number) => {
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

const movePage = (page: number) => {
  const count = page * 810;
  const newLeft = `-${count}px`;
  console.log('New left:', newLeft);
  if (carouselContainer) {
    carouselContainer.style.left = newLeft;
  }
};
