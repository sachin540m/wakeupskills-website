import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section id="join" className="cta-section">
      <h2>Build <em style={{ color: 'var(--sunrise)', fontStyle: 'normal' }}>Industry-Ready</em> Skills.</h2>
      <p>Master the tools and technologies used by top tech companies worldwide.</p>
      <div className="cta-buttons">
        <Link
          to="/contact?subject=Enroll%20Now"
          className="btn-primary"
          style={{ fontSize: '1rem', padding: '16px 40px' }}
          aria-label="Enroll now with WakeupSkills"
        >
          Enroll Now →
        </Link>
        <Link
          to="/contact?subject=Free%20Demo"
          className="btn-outline"
          style={{ fontSize: '1rem', padding: '16px 40px' }}
          aria-label="Book a free demo with WakeupSkills"
        >
          Book a Free Demo
        </Link>
      </div>
      <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--muted)' }}>🌐 www.wakeupskills.com</p>
    </section>
  );
}
