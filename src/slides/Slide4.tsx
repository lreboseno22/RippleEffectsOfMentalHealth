import { useState } from "react";
import "./Slide4.css";
import VegaChart from "../components/VegaChart";
import { nycMapSpec } from "./nycMapSpec";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";


export default function Slide4() {
  const [flipped, setFlipped] = useState(false);

  const trendData = [
  { year: "2018", rate: 12 },
  { year: "2019", rate: 13 },
  { year: "2020", rate: 16 },
  { year: "2021", rate: 19 },
  { year: "2022", rate: 22 },
];

const treatmentData = [
  { name: "Receive Treatment", value: 40 },
  { name: "No Treatment", value: 60 },
];

  return (
    <section className="slide-page slide-4">
      <div
        className={`flip-container ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-inner">
          {/* FRONT SIDE */}
          <div className="flip-face front">
            <div className="slide4-header">
              <h2>The Numbers Behind the Crisis</h2>
              <p>
                Mental health challenges are affecting NYC communities
                differently.
              </p>
            </div>

            <div className="top-stats">
              <div className="stat-card hero">
                <div className="stat-number">1 in 5</div>
                <div className="stat-label">
                  NYC youth experience symptoms of a mental health disorder
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-number">+30%</div>
                <div className="stat-label">
                  Increase in anxiety and depression concerns reported since the
                  pandemic
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-number">60%</div>
                <div className="stat-label">
                  Of affected youth never receive adequate treatment
                </div>
              </div>
            </div>

            <div className="chart-section">
              <h3>Mental Health Burden by Community</h3>

              <div className="community-chart">
                <div className="bar-row">
                  <span>Latino Adults</span>
                  <div className="bar">
                    <div className="fill latino" style={{ width: "100%" }} />
                  </div>
                  <strong>10%</strong>
                </div>

                <div className="bar-row">
                  <span>Black Adults</span>
                  <div className="bar">
                    <div className="fill black" style={{ width: "80%" }} />
                  </div>
                  <strong>8%</strong>
                </div>

                <div className="bar-row">
                  <span>White Adults</span>
                  <div className="bar">
                    <div className="fill white" style={{ width: "70%" }} />
                  </div>
                  <strong>7%</strong>
                </div>
              </div>
            </div>

            <div className="charts-grid">
              {/* LINE CHART */}

              <div className="chart-card">
                <h3>Increase in Youth Depression</h3>

                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={trendData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#5DADE2"
                      strokeWidth={4}
                      dot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* PIE CHART */}

              <div className="chart-card">
                <h3>Treatment Access</h3>

                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={treatmentData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={85}
                      label
                      innerRadius={55}
                    >
                      <Cell fill="#5DADE2" />
                      <Cell fill="#1B263B" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="insight-panel">
              <div className="insight">
                Financial insecurity remains one of the largest barriers to
                treatment.
              </div>

              <div className="insight">
                Many Black and Latino residents report difficulty finding
                culturally understanding therapists.
              </div>

              <div className="insight">
                Mental health stigma remains common in Caribbean, African, and
                Latino communities.
              </div>
            </div>

            <div className="flip-hint">
              Click to explore an interactive NYC mental health map →
            </div>
          </div>

          {/* BACK SIDE (MAP) */}
          <div className="flip-face back">
            <div className="map-wrapper">
              <VegaChart spec={nycMapSpec} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}