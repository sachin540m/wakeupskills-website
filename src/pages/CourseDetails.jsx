import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/coursesData';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import usePageTitle from '../hooks/usePageTitle';

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  // Set title dynamically — works whether course exists or not
  usePageTitle(
    course ? course.title : 'Course Not Found',
    course
      ? `Learn about ${course.title}, syllabus, real projects, and career-ready outcomes at WakeupSkills.`
      : 'The requested course was not found. Browse our available programs to discover the right learning path.',
    course ? `/courses/${course.slug}` : '/courses'
  );

  if (!course) {
    return (
      <div style={{ padding: '100px 6%', textAlign: 'center' }}>
        <h2>Course Not Found</h2>
        <Link to="/courses" className="btn-primary" style={{ marginTop: '20px' }}>Back to Courses</Link>
      </div>
    );
  }

  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <main>
      <PageHero 
        badge={`${course.category} Track`}
        title={<span>{course.title} <em>Professional</em></span>}
        subtitle={course.shortDescription}
      />

      <section className="details-container">
        <div className="network-inner" style={{ alignItems: 'flex-start' }}>
          <div className="details-content">
            {/* Overview Section */}
            <div className="section-group">
              <h3 className="section-title" style={{ fontSize: '1.4rem', borderLeft: '4px solid var(--sunrise)', paddingLeft: '15px' }}>Course Overview</h3>
              <div className="section-desc" style={{ maxWidth: '100%', marginBottom: '40px', whiteSpace: 'pre-line' }}>
                {course.fullDescription}
              </div>
            </div>

            {/* Outcomes Section */}
            <div className="section-group" style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '40px' }}>
              <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '24px' }}>What You'll Master</h3>
              <div className="outcomes-grid">
                {course.outcomes.map((outcome, i) => (
                  <div key={i} className="list-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <span style={{ color: 'var(--sunrise)', marginRight: '12px', fontSize: '1.1rem', fontWeight: 'bold' }}>✓</span> 
                    <span style={{ color: 'var(--white)', fontSize: '0.95rem' }}>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach & Certification */}
            <div className="network-inner" style={{ gridTemplateColumns: '1fr 1fr', gap: '30px', margin: '40px 0' }}>
              <div className="card" style={{ padding: '25px', backgroundColor: 'transparent' }}>
                <h4 style={{ color: 'var(--sunrise)', marginBottom: '12px', fontFamily: 'Playfair Display, serif' }}>Learning Approach</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.6' }}>{course.methodology}</p>
              </div>
              <div className="card" style={{ padding: '25px', backgroundColor: 'transparent' }}>
                <h4 style={{ color: 'var(--sunrise)', marginBottom: '12px', fontFamily: 'Playfair Display, serif' }}>Certification</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.6' }}>{course.certification}</p>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="section-group">
              <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Career Pathways</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {course.careers.map((career, i) => (
                  <div key={i} className="badge" style={{ backgroundColor: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.3)', color: 'var(--sunrise)', textTransform: 'none', margin: '0', padding: '8px 16px' }}>
                    {career}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Use Cases */}
            <div className="section-group" style={{ marginTop: '40px' }}>
                <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Industry Applications</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{course.useCases}</p>
            </div>

            {/* Technologies Covered */}
            <div className="section-group" style={{ marginTop: '50px' }}>
              <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Technologies Covered</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {course.technologies.map(tech => (
                  <span key={tech} className="tech-tag" style={{ backgroundColor: 'var(--sky)', border: '1px solid var(--border)', padding: '10px 20px', borderRadius: '12px', fontSize: '0.85rem', color: 'var(--white)', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: '6px', height: '6px', background: 'var(--sunrise)', borderRadius: '50%', marginRight: '10px' }}></span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="details-sidebar">
            <div className="card sticky-sidebar" style={{ backgroundColor: 'rgba(15,15,26,0.5)', border: '1px solid var(--border)', backdropFilter: 'blur(10px)' }}>
              <div className="card-icon" style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '15px' }}>{course.icon}</div>
              <h4 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>Track Metadata</h4>
              
              <div className="stat-list">
                <div className="stat-row">
                  <span className="label">Duration</span>
                  <span className="value">{course.duration}</span>
                </div>
                <div className="stat-row">
                  <span className="label">Classes</span>
                  <span className="value">{course.weeklySchedule}</span>
                </div>
                <div className="stat-row">
                  <span className="label">Daily Commitment</span>
                  <span className="value">{course.dailyHours}</span>
                </div>
                <div className="stat-row">
                  <span className="label">Skill Level</span>
                  <span className="value">{course.level}</span>
                </div>
                <div className="stat-row">
                  <span className="label">Learning Format</span>
                  <span className="value">{course.format}</span>
                </div>
              </div>

              <Link to={`/contact?subject=Request%20Enrollment&course=${encodeURIComponent(course.title)}`} className="btn-primary" style={{ width: '100%', marginTop: '35px', padding: '16px 0', display: 'inline-flex' }}>Request Enrollment</Link>
            </div>
          </aside>
        </div>
      </section>

      {relatedCourses.length > 0 && (
        <section className="related-section" style={{ borderTop: '1px solid var(--border)', background: 'linear-gradient(135deg, rgba(15,15,26,1) 0%, rgba(26,26,46,1) 100%)' }}>
          <div className="section-label">Extend Your Learning</div>
          <h2 className="section-title">Similar Academic Tracks</h2>
          <div className="cards-grid" style={{ marginTop: '40px' }}>
            {relatedCourses.map(related => (
              <Link to={`/courses/${related.slug}`} key={related.id} className="card course-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-icon">{related.icon}</div>
                <h3>{related.title}</h3>
                <p style={{ fontSize: '0.85rem' }}>{related.shortDescription}</p>
                <div className="btn-primary" style={{ marginTop: '20px', padding: '10px 0', fontSize: '0.8rem', width: '100%' }}>Explore Track</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}
