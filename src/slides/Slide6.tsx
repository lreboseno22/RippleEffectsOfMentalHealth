import { useState } from "react";
import "./Slide6.css";

type Topic = {
  eyebrow: string;
  title: string;
  body: {
    paragraphs?: string[];
    list?: string[];
  };
  image?: string;
};

const topics: Topic[] = [
  {
    eyebrow: "Government & Leadership",
    title: "Who Has the Power to Act",
    body: {
      paragraphs: [
        "NYC's elected officials. From the Mayor's office to the City Council and the Department of Education. They hold the levers needed to transform mental health access for young people.",
        "Mayor's Office of Community Mental Health oversees NYC's ThriveNYC framework and can direct funding toward schools, community centers, and provider pipelines in underserved neighborhoods.",
      ],
      list: [
        "Mandate mental health counselors in every public school, K12",
        "Increase funding for community-based mental health clinics in the South Bronx and Central Brooklyn",
        "Remove insurance and administrative barriers for youth seeking care",
        "Invest in culturally competent providers who reflect the communities they serve",
      ],
    },
    image:
      "https://images.foxtv.com/static.ktvu.com/www.ktvu.com/content/uploads/2026/01/764/432/gettyimages-2253647879-scaled.jpg?ve=1&tl=1",
  },
  {
    eyebrow: "Warning Signs",
    title: "What to Look For",
    body: {
      paragraphs: [
        "Recognizing when someone may be struggling is the first step to getting them connected with help. Look for changes from their baseline, not just single behaviors."
      ],
      list: [
        "Withdrawl",
        "Mood Shifts",
        "Changes in sleep / appetite",
        "Declining Performance",
        "Hopeless Talk",
        "Self Harm",
        "Risk-taking",
        "Giving things away"
      ],
    },
    image:
      "https://newroadstreatment.org/wp-content/uploads/2022/02/yasin-yusuf-fMh-VTuMHQs-unsplash-1080x675.jpg",
  },
  {
    eyebrow: "Resources & Help",
    title: "Where to Get Support",
    body: {
      list: [
        "988 Suicide & Crisis LifeLine: Call or text 988 (free 24/7, confidential",
        "Crisis Text Line: Text HOME to 741741 (free, 24/7)",
        "NYC Well: nyc.gov.nycwell or call 1-888-NYCWELL. Free mental health support in 200+ languages",
        "ThriveNYC: Mental health resources and provider navigator for NYC residents",
        "The Door (NYC): Comprehensive youth development and mental health services for ages 12-24",
        "Safe Horizon: Support for youth experiencing trauma or violence",
        "Born This Way Foundation: Crisis support and mental wellness resources for young people"
      ],
    },
    image:
      "https://turnwell.com/wp-content/uploads/2025/04/turnwell-building-support-networks.webp",
  },
];

export default function Slide6() {
  const [active, setActive] = useState(0);

  return (
    <section className="slide-page slide-6">
      <div className="ambient-glow" />
      <div className="content hub-layout">
        {/* CENTER HUB */}
        <div className="hub-center">
          <div className="hub-title">How Are We Moving Forward?</div>
        </div>

        {/* NODES */}
        <div
          className={`hub-node ${active === 0 ? "active" : ""}`}
          style={{
            backgroundImage: `url(${topics[0].image})`,
            top: "8%",
            left: "1%",
          }}
          onClick={() => setActive(0)}
        >
          <div className="node-overlay">Government</div>
        </div>

        <div
          className={`hub-node ${active === 1 ? "active" : ""}`}
          style={{
            backgroundImage: `url(${topics[1].image})`,
            top: "40%",
            left: "-50%",
          }}
          onClick={() => setActive(1)}
        >
          <div className="node-overlay">Warning Signs</div>
        </div>

        <div
          className={`hub-node ${active === 2 ? "active" : ""}`}
          style={{
            backgroundImage: `url(${topics[2].image})`,
            bottom: "8%",
            left: "1%",
          }}
          onClick={() => setActive(2)}
        >
          <div className="node-overlay">Resources</div>
        </div>

        {/* SIDE PANEL */}
        <div className="hub-panel">
          <div className="hub-eyebrow">{topics[active].eyebrow}</div>

          <div className="hub-heading">{topics[active].title}</div>

          <div className="hub-body">
            {topics[active].body.paragraphs?.map((p, i) => (
             <>
              <p key={i}>{p}</p><br></br>
             </>
            ))}

            {topics[active].body.list && (
              <ul>
                {topics[active].body.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
