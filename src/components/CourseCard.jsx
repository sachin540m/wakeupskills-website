import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <Link 
      to={`/courses/${course.slug}`} 
      className={`course-card ${course.featured ? 'featured-card' : ''}`}
    >
      <div className="card-top">
        <div className="card-icon-wrapper">
          {course.icon}
        </div>
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <span className="badge" style={{ margin: 0, padding: '2px 10px', fontSize: '0.6rem', background: 'rgba(255,107,43,0.1)', color: 'var(--sunrise)', borderColor: 'transparent', fontWeight: '700' }}>
            {course.category}
          </span>
        </div>

        <h3>{course.title}</h3>
        <p className="short-desc">{course.shortDescription}</p>
      </div>

      <div className="card-bottom">
        <div className="course-meta">
          <div className="meta-item">
            <span className="meta-label">Duration</span>
            <span className="meta-value">{course.duration}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Level</span>
            <span className="meta-value">{course.level}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Mode</span>
            <span className="meta-value">{course.format}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Certificate support</span>
            <span className="meta-value">{course.support || 'Certificate + placement support'}</span>
          </div>
        </div>

        <div className="btn-primary">View Track Details</div>
      </div>
    </Link>
  );
}
