import { useEffect, useState } from "react";
import "./Slide3.css";

const backgroundImages = [
  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    alt: "Soft abstract mental health imagery",
  },
  {
    url: "https://images.unsplash.com/photo-1516166325324-18276b44d1df?auto=format&fit=crop&w=1600&q=80",
    alt: "Contemplative person in warm light",
  },
  {
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    alt: "Quiet landscape for calm reflection",
  },
];

export default function Slide3() {
  const [flipped, setFlipped] = useState(false);
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveBg((current) => (current + 1) % backgroundImages.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="slide-page slide-3">
      <div className="slide-3-bg">
        {backgroundImages.map((image, index) => (
          <div
            key={image.url}
            className={`bg-layer ${index === activeBg ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.url})` }}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="content slide-3-content">
        <div className="slide-label">Our Why</div>

        <div
          className={`flip-wrapper ${
            flipped ? "flipped" : ""
          }`}
          onClick={() => setFlipped((v) => !v)}
        >
          <div className="flip-card">
            {/* FRONT */}
            <div className="flip-face flip-front">

              <h2 className="flip-title">
                Why This Matters
              </h2>

              <p className="flip-subtitle">
                Mental health is the foundation of everything we do.
              </p>
              <div className="flip-hint">
                Tap to read more
              </div>
            </div>

            {/* BACK */}
            <div className="flip-face flip-back">
              <p>
               Mental Health should be one of the most important things every human being should be aware of as it is the foundation of our life. Without our minds being right, it can cause us to abuse our family member or loved one, poor financial decision or even do something as serious as hurt ourselves or others physically or mentally.
              </p>

              <p>
                Many young people in our community between the ages of 10 and 19 do not have consistent access to reliable mental health support, qualified providers, or safe spaces to process their emotional and behavioral needs. Without timely access to mental health care, young people may struggle to stay in school, maintain healthy relationships, and reach their full potential. Addressing the mental health access gap is essential for helping youth build resilience, stability, and long-term well-being.
              </p>

              <div className="slide3-hint-image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/9a59f9_8c480e8e9d244921bb63facf0a030848~mv2.jpg/v1/fill/w_640,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a59f9_8c480e8e9d244921bb63facf0a030848~mv2.jpg"
                  alt="Mental health imagery"
                />
              </div>

              <div className="flip-hint">
                Tap to flip back
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}