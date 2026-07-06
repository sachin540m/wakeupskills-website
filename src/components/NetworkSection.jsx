const STEPS = [
  {
    num: 1,
    title: "Onboard",
    description: "Create your professional profile and gain access to our curated industry tracks."
  },
  {
    num: 2,
    title: "Start Learning",
    description: "Pick any skill, start immediately, go at your own pace."
  },
  {
    num: 3,
    title: "Connect & Share",
    description: (
      <>Help others, share insights, and build <em>reciprocal</em> (= mutual, two-way) relationships.</>
    )
  },
  {
    num: 4,
    title: "Transform Your Career",
    description: "Apply what you learn and see real results in your life."
  }
];

export default function NetworkSection() {
  return (
    <section id="community">
      <div className="network-inner">
        <div>
          <div className="section-label">Build Your Network</div>
          <h2 className="section-title">Collaborative Growth</h2>
          <p className="section-desc">
            WakeupSkills is an ecosystem built on <em>reciprocity</em>. Connect with peers and mentors to accelerate your collective professional journey.
          </p>
          <ul className="network-steps">
            {STEPS.map((step) => (
              <li className="network-step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <div className="step-text">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="network-visual">
          <div className="orbit orbit-1"><div className="orbit-dot">🎓</div></div>
          <div className="orbit orbit-2"><div className="orbit-dot">🤝</div></div>
          <div className="network-center">🌟</div>
        </div>
      </div>
    </section>
  );
}
