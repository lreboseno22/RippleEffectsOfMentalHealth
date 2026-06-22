import "./Slide5.css";

const stepData = [
  {
    key: "housing",
    title: "Housing Instability",
    meta: "Step 01",
    body:
      "Serious mental health illness can impair a person's ability to maintain a steady income, leading to housing stress, eviction, and unstable shelter.",
    imageUrl:
      "https://www.yesmagazine.org/wp-content/uploads/imports/10b022875b9c480993e73038cea81134.gif",
    imageAlt: "Person in distress near institutional surroundings",
  },
  {
    key: "legal",
    title: "The Legal System",
    meta: "Step 02",
    body:
      "Housing instability often funnels people into policing and courts, where laws criminalizing homelessness punish survival behavior rather than supporting recovery.",
    imageUrl:
      "https://www.postnewsgroup.com/wp-content/uploads/2022/11/mentally-ill-california-prisons-featured-web.jpg",
    imageAlt: "Courtroom or legal system context",
  },
  {
    key: "food",
    title: "Food Insecurity",
    meta: "Step 03",
    body:
      "Lack of regular meals drives people into survival mode and increases the likelihood of crisis contacts, which can lead to arrest and deeper involvement with jail systems.",
    imageUrl:
      "https://cmsatoday.com/wp-content/uploads/sites/9/2022/06/021-780x470.jpg",
    imageAlt: "Food insecurity or scarce meal imagery",
  },
  {
    key: "community",
    title: "Community Impact",
    meta: "Step 04",
    body:
      "When jails become de facto psychiatric shelter, people return to the street disconnected from care and insurance, worsening the cycle of crisis, food insecurity, and homelessness.",
    imageUrl:
      "https://nnirr.org/wp-content/uploads/2022/03/Migrant-mental-health-logo-NNIRR.png",
    imageAlt: "Community members impacted by system failures",
  },
];

export default function Slide5() {
  return (
    <section className="slide-page slide-5">
      <div className="content ripple-flow">
        <div className="ripple-flow-header">The Ripple Effects</div>

        {stepData.map((step, index) => (
          <div key={step.key} className={`ripple-step step-${index + 1}`}>
            <div className="step-image">
              <img src={step.imageUrl} alt={step.imageAlt} />
            </div>
            <div className="step-content">
              {/* <div className="step-meta">{step.meta}</div> */}
              <div className="step-title">{step.title}</div>
              <div className="step-body">{step.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
