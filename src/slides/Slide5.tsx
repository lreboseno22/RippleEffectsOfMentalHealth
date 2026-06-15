import "./Slide5.css";

export default function Slide5() {
  return (
<section className="slide-page slide-5">
  <div className="content ripple-flow">

    {/* TITLE */}
    <div className="ripple-flow-header">
      The Ripple Effects
    </div>

    {/* FLOW LINE */}
    <div className="ripple-line" />

    {/* STEP 1 */}
    <div className="ripple-step step-1">
      <div className="step-dot" />
      <div className="step-content">
        <div className="step-title">Individual Mind</div>
        <div className="step-body">
          Mental health challenges begin internally—affecting emotions, thinking, and behavior.
        </div>
      </div>
    </div>

    {/* STEP 2 */}
    <div className="ripple-step step-2">
      <div className="step-dot" />
      <div className="step-content">
        <div className="step-title">Family & Relationships</div>
        <div className="step-body">
          Strain appears in communication, trust, and emotional connection with loved ones.
        </div>
      </div>
    </div>

    {/* STEP 3 */}
    <div className="ripple-step step-3">
      <div className="step-dot" />
      <div className="step-content">
        <div className="step-title">School & Performance</div>
        <div className="step-body">
          Attendance drops, focus declines, and academic performance is affected.
        </div>
      </div>
    </div>

    {/* STEP 4 */}
    <div className="ripple-step step-4">
      <div className="step-dot" />
      <div className="step-content">
        <div className="step-title">Community Impact</div>
        <div className="step-body">
          Broader systems feel the effects—healthcare, safety, and social stability.
        </div>
      </div>
    </div>

  </div>
</section>
  );
}
