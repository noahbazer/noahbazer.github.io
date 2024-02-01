import { AboutMeContent } from './AboutMeContent';

export function AboutMe() {
  return (
    <div className="about-me">
      <AboutMeContent />
      <div className="about-me-photo">
        <img
          src="./assets/photo.webp"
          alt="me"
        />
      </div>
    </div>
  );
}
