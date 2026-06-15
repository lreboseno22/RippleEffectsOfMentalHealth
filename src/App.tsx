import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import SlideTransition from "./components/SlideTransition";

import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";

import "./styles/global.css";
import "./styles/slideshow.css";


function App() {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) =>
      Math.min(
        current + 1,
        slides.length - 1
      )
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((current) =>
      Math.max(current - 1, 0)
    );
  }, []);

  useKeyboardNavigation(
    nextSlide,
    prevSlide
  );

  const CurrentSlide =
    slides[currentSlide];

  return (
    <>
      <main className="presentation">
        <AnimatePresence mode="wait">
          <SlideTransition
            key={currentSlide}
          >
            <CurrentSlide />
          </SlideTransition>
        </AnimatePresence>
      </main>

      <Navigation
        current={currentSlide}
        total={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onSelect={setCurrentSlide}
      />
    </>
  );
}

export default App;