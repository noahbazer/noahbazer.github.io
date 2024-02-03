import React, { useState } from 'react';

function ShowcaseControls({
  activePage,
  setActivePage,
}: {
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const setPage = (page: number) => {
    setActivePage(page);
  };

  const nextPage = () => {
    if (activePage < 2) {
      setActivePage(activePage + 1);
    }
  };

  const lastPage = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <div className="carousel-controls">
      <i
        className="fa fa-chevron-left"
        onClick={lastPage}
      ></i>
      <i
        className={`fa ${
          activePage === 0 ? 'fa-circle' : 'fa-regular fa-circle'
        } carousel-button`}
        onClick={() => setPage(0 as number)}
      ></i>
      <i
        className={`fa ${
          activePage === 1 ? 'fa-circle' : 'fa-regular fa-circle'
        } carousel-button`}
        onClick={() => setPage(1)}
      ></i>
      <i
        className={`fa ${
          activePage === 2 ? 'fa-circle' : 'fa-regular fa-circle'
        } carousel-button`}
        onClick={() => setPage(2)}
      ></i>
      <i
        className="fa fa-chevron-right"
        onClick={nextPage}
      ></i>
    </div>
  );
}

function ShowcaseGallery({ activePage }: { activePage: number }) {
  const carouselContainerStyle = {
    left: `-${activePage * 810}px`,
  };

  return (
    <div
      className="carousel-container"
      style={carouselContainerStyle}
    >
      {/* Carousel items... */}
      {/* Replace this comment with the actual carousel items. */}
      {/* For example, you might map over an array of images and render an <img> element for each one. */}
    </div>
  );
}

export function Showcase() {
  const [activePage, setActivePage] = useState(0);

  return (
    <div>
      <ShowcaseControls
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <ShowcaseGallery activePage={activePage} />
    </div>
  );
}
