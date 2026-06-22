import { useEffect, useRef } from "react";
import embed from "vega-embed";
import "./VegaChart.css";

type Props = {
  spec: any;
};

export default function VegaChart({ spec }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    embed(containerRef.current, spec, {
      actions: false,
      renderer: "canvas",
    });
  }, [spec]);

  return <div ref={containerRef} className="vega-chart" />;
}