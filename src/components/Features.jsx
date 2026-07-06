const FEATURES = [
  {
    icon: "💼",
    title: "Business Skills",
    description: (
      <>Build the <em>acumen</em> (= sharp business judgment) you need to grow — from strategy to sales to communication.</>
    )
  },
  {
    icon: "📱",
    title: "Digital Marketing",
    description: "Master SEO, social media, content creation, and paid ads with practical, hands-on lessons."
  },
  {
    icon: "🧠",
    title: "Soft Skills",
    description: (
      <>Leadership, public speaking, and negotiation — skills that make you <em>indispensable</em> (= impossible to replace).</>
    )
  },
  {
    icon: "💻",
    title: "Tech & Tools",
    description: "Learn the digital tools that professionals use every day — no prior experience needed."
  },
  {
    icon: "💰",
    title: "Finance Basics",
    description: (
      <>Understand money, budgeting, and investments in simple, <em>lucid</em> (= very clear and easy to understand) language.</>
    )
  },
  {
    icon: "🚀",
    title: "Career Growth",
    description: "Resume building, interview skills, and personal branding — transform your career trajectory."
  }
];

export default function Features() {
  return (
    <section id="skills">
      <div className="section-label">What We Offer</div>
      <h2 className="section-title">Anything You Want to Learn, We've Got It</h2>
      <p className="section-desc">From digital marketing to personal finance — WakeupSkills gives you practical, actionable knowledge you can use immediately.</p>
      <div className="cards-grid">
        {FEATURES.map((feature, idx) => (
          <div className="card" key={idx}>
            <div className="card-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
