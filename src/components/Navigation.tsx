type NavigationProps = {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
};

export default function Navigation({
  current,
  total,
  onNext,
  onPrev,
  onSelect,
}: NavigationProps) {
  return (
    <div id="nav">
      <button
        className="nav-btn"
        onClick={onPrev}
      >
        ←
      </button>

      <div id="dots">
        {Array.from({ length: total }).map(
          (_, index) => (
            <div
              key={index}
              className={`nav-dot ${
                current === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                onSelect(index)
              }
            />
          )
        )}
      </div>

      <span id="slide-counter">
        {current + 1} / {total}
      </span>

      <button
        className="nav-btn"
        onClick={onNext}
      >
        →
      </button>
    </div>
  );
}