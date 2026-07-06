import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import usePageTitle from '../hooks/usePageTitle';

export default function About() {
  usePageTitle(
    'About Us',
    'Discover WakeupSkills—our mission, values, and the career-focused learning model that helps students build skills and land placements.',
    '/about'
  );
  return (
    <main>
      <PageHero 
        badge="Our Story"
        title={<span>Redefining <em>Learning</em> for a New Era</span>}
        subtitle="WakeupSkills is a global movement dedicated to making practical knowledge accessible to driven individuals worldwide."
      />

      <section>
        <div className="network-inner">
          <div>
            <div className="section-label">Our Mission</div>
            <h2 className="section-title">Democratizing Knowledge</h2>
            <p className="section-desc">
              We believe that education should be a right, not a privilege. Our mission is to provide high-quality, real-world skills training to any individual with the desire to learn and grow.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--sunrise)' }}>Vision 2030</h3>
            <p>To build the world's largest collaborative learning network where every member is both a student and a teacher, fostering a culture of mutual growth and success.</p>
          </div>
        </div>
      </section>

      <section className="ages-section">
        <div className="section-label">Why Us?</div>
        <h2 className="section-title">Rooted in Community</h2>
        <div className="cards-grid" style={{ marginTop: '40px' }}>
          <div className="card">
            <h3>Practical Over Theory</h3>
            <p>We focus on skills you can use the moment you finish a lesson. No filler, only value.</p>
          </div>
          <div className="card">
            <h3>Flexible Learning</h3>
            <p>Learn at your own pace with a curriculum designed to fit around your professional commitments.</p>
          </div>
          <div className="card">
            <h3>Mentorship</h3>
            <p>Connect with professionals who have been where you are and want to help you get where you're going.</p>
          </div>
        </div>
      </section>

      <section className="student-success-section">
        <div className="section-label">Success Stories</div>
        <h2 className="section-title">Learning Journeys That Led to Placements</h2>
        <p className="section-desc">Explore how our students transformed their careers with project-based learning, mentor support, and placement coaching — all without relying on images or gimmicks.</p>
        <div className="success-story-grid">
          <article className="success-story-card">
            <span className="success-story-card__tag">Journey</span>
            <h3 className="success-story-card__title">Priya — From Beginner to UX Analyst</h3>
            <p className="success-story-card__text">Priya started with zero design experience and took our immersive UX track. She completed hands-on projects, built a portfolio with live case studies, and refined her interview skills with dedicated mentor reviews.</p>
            <ul className="success-story-card__list">
              <li>Project-driven learning with weekly deliverables</li>
              <li>One-on-one mentor feedback on portfolio pieces</li>
              <li>Mock interviews and resume refinement</li>
            </ul>
            <div className="success-story-card__result">Placed as UX Analyst at a Bengaluru product studio in 4 months.</div>
          </article>

          <article className="success-story-card">
            <span className="success-story-card__tag">Journey</span>
            <h3 className="success-story-card__title">Arjun — Data Skills for a Career Switch</h3>
            <p className="success-story-card__text">Arjun pivoted from sales to data analytics through our flexible evening cohort. He learned real-world analytics tools, completed a capstone project, and received targeted placement support tailored to hiring teams.</p>
            <ul className="success-story-card__list">
              <li>Weekend-friendly lessons for working professionals</li>
              <li>Capstone project with business problem-solving</li>
              <li>Interview prep focused on practical case studies</li>
            </ul>
            <div className="success-story-card__result">Secured a data analyst role at a leading fintech company.</div>
          </article>

          <article className="success-story-card">
            <span className="success-story-card__tag">Journey</span>
            <h3 className="success-story-card__title">Shreya — Launching a Digital Marketing Career</h3>
            <p className="success-story-card__text">Shreya transitioned into digital marketing by mastering campaign planning, analytics, and content strategy. She created and optimized live campaigns while receiving career coaching that sharpened her hiring readiness.</p>
            <ul className="success-story-card__list">
              <li>Live campaign projects with measurable results</li>
              <li>Mentor-led marketing strategy and performance feedback</li>
              <li>Placement guidance with employer-ready documentation</li>
            </ul>
            <div className="success-story-card__result">Joined a digital marketing agency with a competitive stipend.</div>
          </article>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
