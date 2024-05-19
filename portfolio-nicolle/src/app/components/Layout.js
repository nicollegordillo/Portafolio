import React, { useState } from 'react';
import styles from './Layout.module.css';
import Slideshow from './Slideshow';

const Layout = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const rectangleSlides = [
    <div className={styles.rectangleButton}>Rectangular Button 1</div>,
    <div className={styles.rectangleButton}>Rectangular Button 2</div>,
    <div className={styles.rectangleButton}>Rectangular Button 3</div>
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Nicolle Gordillo</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.vinylRecord} style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}></div>
          <div className={styles.recordNeedle}></div>
          <button className={styles.playButton} onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className={styles.right}>
          <Slideshow slides={rectangleSlides} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
