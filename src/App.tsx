import { useEffect } from 'react';
import { Header } from './components/header/Header';
import { Splash } from './components/splash/Splash';
import { AboutMe } from './components/about/AboutMe';
import { Showcase } from './components/showcase/Showcase';
import { Footer } from './components/footer/Footer';
import Rellax from 'rellax';
import './App.css';

export function App() {
  useEffect(() => {
    new Rellax('.rellax');
  }, []);

  return (
    <>
      <div
        className="rellax bg"
        data-rellax-speed="12"
      ></div>
      <div
        className="rellax bg2"
        data-rellax-speed="5"
      ></div>
      <Header />
      <Splash />
      <AboutMe />
      <Showcase />
      <Footer />
    </>
  );
}
