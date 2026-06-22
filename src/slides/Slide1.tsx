import RippleBackground from "../components/RippleBackground";

import "./Slide1.css";

export default function Slide1() {
  return (
    <section className="slide-page slide-1">
      <RippleBackground />

      <div className="content slide-1-content">

        <h1 className="title-main">
          The Ripple <em>Effects</em>
          <br />
          of Mental Illness
        </h1>

        <div className="title-line" />

        <div className="title-sub">
          Vashawn Swaby · Liam Reboseno
        </div>
      </div>
    </section>
  );
}