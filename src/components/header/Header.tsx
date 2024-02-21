import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faXTwitter,
  faGithub,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Header.module.css';
export function Header() {
  useEffect(() => {
    const header = document.getElementById('header-container');

    const checkScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add(styles['header-container-scrolled']);
      } else {
        header?.classList.remove(styles['header-container-scrolled']);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div
      className={styles['header-container']}
      id="header-container"
    >
      <header
        className={styles['header']}
        id="header"
      >
        <div className={styles['header-start']}>
          <h3 className={styles.logo}>&lt;nb&gt;</h3>
          <h3>noahbazer.dev</h3>
        </div>
        <nav>
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>
        <p className={styles['nav-divider']}>|</p>
        <div className={styles['scheme-switcher']}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              id="theme-toggle"
              onClick={toggleTheme}
            />
            <span className={`${styles.slider} ${styles.round}`}>
              <i className="fas fa-sun"></i>
              <i className="fas fa-moon"></i>
            </span>
          </label>
        </div>
        <p className={styles['nav-divider']}>|</p>
        <nav className={styles.socials}>
          <a href="https://www.linkedin.com/in/noahbazer/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles['fa-brands']}
            />
          </a>
          <a href="mailto:noahbazerdev@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles['fa-solid']}
            />
          </a>
          <a href="twitter.com/noahbazer">
            <FontAwesomeIcon
              icon={faXTwitter}
              className={styles['fa-brands']}
            />
          </a>
          <a href="github.com/noahbazer">
            <FontAwesomeIcon
              icon={faGithub}
              className={styles['fa-brands']}
            />
          </a>
          <a href="medium.com/@noahbazer">
            <FontAwesomeIcon
              icon={faMediumM}
              className={styles['fa-brands']}
            />
          </a>
        </nav>
      </header>
    </div>
  );
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
}
