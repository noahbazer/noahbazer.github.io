import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles['header-container']}>
      <header
        className={styles['header']}
        id="header"
      >
        {/* ... */}
        <div className={styles['scheme-switcher']}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              id="theme-toggle"
              onClick={toggleTheme}
            />
            <span className={`${styles.slider} ${styles.round}`}>
              <FontAwesomeIcon icon={faSun} />
              <FontAwesomeIcon icon={faMoon} />
            </span>
          </label>
        </div>
        {/* ... */}
        <nav className={styles.socials}>
          <a href="https://www.linkedin.com/in/noahbazer/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:noahbazerdev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="twitter.com/noahbazer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="github.com/noahbazer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="medium.com/@noahbazer">
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </nav>
      </header>
    </div>
  );
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
}
