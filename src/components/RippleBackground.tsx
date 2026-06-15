import "./RippleBackground.css";

export default function RippleBackground() {
  return (
    <div className="ripple-bg">
      <div className="ripple-ring ripple-ring-1" />
      <div className="ripple-ring ripple-ring-2" />
      <div className="ripple-ring ripple-ring-3" />
      <div className="ripple-ring ripple-ring-4" />
    </div>
  );
}