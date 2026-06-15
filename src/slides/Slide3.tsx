import { useState } from "react";
import "./Slide3.css";

export default function Slide3() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="slide-page slide-3">
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
               Mental Health is not talked about enough as it should be! It is probably one of the most important things every human being should be aware of as it is the foundation of our life. Without our minds being right, it can cause us to abuse our family member or loved one, poor financial decision or even do something as serious as hurt ourselves or others physically or mentally.
              </p>

              <p>
                Many young people in our community between the ages of 10 and 19 do not have consistent access to reliable mental health support, qualified providers, or safe spaces to process their emotional and behavioral needs. Without timely access to mental health care, young people may struggle to stay in school, maintain healthy relationships, and reach their full potential. Addressing the mental health access gap is essential for helping youth build resilience, stability, and long-term well-being.
              </p>

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