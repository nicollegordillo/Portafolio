import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';
const Slideshow = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) return 1;
      if (newIndex < 1) return slides.length;
      return newIndex;
    });
  };

  useEffect(() => {
    const showSlides = () => {
      const allSlides = document.getElementsByClassName('mySlides');
      if (allSlides.length === 0) return;
      for (let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = 'none';
      }
      allSlides[slideIndex - 1].style.display = 'block';
    };

    showSlides();
  }, [slideIndex, slides]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div key={index} className="mySlides">
          {slide}
        </div>
      ))}
      <a className="prev" onClick={() => plusSlides(-1,0)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1,0)}>&#10095;</a>
    </div>
  );
};

export default Slideshow;
