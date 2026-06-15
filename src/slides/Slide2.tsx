import "./Slide2.css";

export default function Slide2() {
  return (
    <section className="slide-page slide-2">
      <div className="content slide-2-content">
        <div className="slide-label">Who We Are</div>

        <div className="bio-grid">
          <div className="bio-card">
            <div className="bio-header">
              <div className="bio-avatar">L</div>
              <div className="bio-name">Liam</div>
            </div>

            <p className="bio-text">
              Hi. My name is Liam. I'm 23 years old and from Bushwick. I'm passionate about tech and making a positive impact in my community.
            </p>
          </div>

          <div className="bio-card">
            <div className="bio-header">
              <div className="bio-avatar alt">V</div>
              <div className="bio-name">Vashawn Swaby</div>
            </div>

            <p className="bio-text">
              Hello, My name is Vashawn Swaby. I'm a 24-year-old from Queens who loves Theater performance. I’m studying Social Work at Medgar Evers College.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}