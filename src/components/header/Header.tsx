import './Header.module.css';

export function Header() {
  return (
    <div className="header-container">
      <div
        className="header"
        id="header"
      >
        <div className="header-start">
          <h3 className="logo">&lt;nb&gt;</h3>
          <h3>noahbazer.dev</h3>
        </div>
        <nav>
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>
        <p>|</p>
        <div className="scheme-switcher">
          <label className="switch">
            <input
              type="checkbox"
              id="theme-toggle"
              onClick={toggleTheme}
            />
            <span className="slider round">
              <i className="fas fa-sun"></i>
              <i className="fas fa-moon"></i>
            </span>
          </label>
        </div>
        <p>|</p>
        <nav className="socials">
          <a href="https://www.linkedin.com/in/noahbazer/">
            <span className="fa-brands fa-linkedin"></span>
          </a>
          <a href="mailto:noahbazerdev@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="twitter.com/noahbazer">
            <span className="fa-brands fa-x-twitter"></span>
          </a>
          <a href="github.com/noahbazer">
            <span className="fa-brands fa-github"></span>
          </a>
          <a href="medium.com/@noahbazer">
            <span className="fa-brands fa-medium"></span>
          </a>
        </nav>
      </div>
    </div>
  );
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
}
