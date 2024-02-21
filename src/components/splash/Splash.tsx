import './Splash.module.css';
import DynamicWord from './DynamicWord';

export function Splash() {
  return (
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
          <DynamicWord />
        </div>
        <h2>Developer</h2>
      </div>
    </div>
  );
}
