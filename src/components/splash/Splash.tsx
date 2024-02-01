import './Splash.module.css';

export function Splash() {
  <div className="splash">
    <div className="text-splash">
      <img
        className="splashstar"
        src="./assets/starpgn1.png"
      />
      <img
        className="splashstar"
        src="./assets/starpgn2.png"
      />
      <h2>Your Favorite</h2>
      <div className="int">
        <h3 id="dynText"></h3>
        <h3 id="dynCursor">|</h3>
      </div>
      <h2>Developer</h2>
    </div>
  </div>;
}
