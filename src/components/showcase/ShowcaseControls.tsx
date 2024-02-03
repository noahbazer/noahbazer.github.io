import { useState } from 'react';

export function ShowcaseControls() {
  const [activePage, setActivePage] = useState(0);

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
        onClick={() => setPage(0)}
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

export default ShowcaseControls;
