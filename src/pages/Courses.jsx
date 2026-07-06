import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import { courses } from '../data/coursesData';
import usePageTitle from '../hooks/usePageTitle';

const CATEGORIES = ["All", "Development", "AI & Data", "Cloud"];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  usePageTitle(
    'Courses',
    'Browse WakeupSkills courses in web development, data analytics, AI, cloud, and mobile development designed for career-ready learners.',
    '/courses'
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 280);
    return () => window.clearTimeout(timer);
  }, []);
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesLevel = activeLevel === 'All' || course.level === activeLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <main>
      <PageHero 
        badge="Pro Tech Tracks"
        title={<span>Master <em>Industry</em> Skills</span>}
        subtitle="Step into the future with our professional tracks designed for the modern tech landscape."
      />

      <section style={{ paddingTop: '0' }}>
        <div className="filters-container" style={{ marginBottom: '64px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div className="search-wrapper" style={{ maxWidth: '640px', margin: '0 auto', width: '100%' }}>
            <input 
              type="text" 
              placeholder="Search by technology or role..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ textAlign: 'center' }}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'center' }}>
            <div className="filter-group">
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '700', textAlign: 'center' }}>Knowledge Domain</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat} 
                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '700', textAlign: 'center' }}>Proficiency Level</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {LEVELS.map(lvl => (
                  <button 
                    key={lvl} 
                    className={`filter-btn ${activeLevel === lvl ? 'active' : ''}`}
                    onClick={() => setActiveLevel(lvl)}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cards-grid">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="skeleton-card">
                <div className="skeleton-line skeleton-title" />
                <div className="skeleton-line skeleton-text" />
                <div className="skeleton-line skeleton-text short" />
                <div className="skeleton-meta">
                  <span className="skeleton-line skeleton-chip" />
                  <span className="skeleton-line skeleton-chip small" />
                </div>
                <div className="skeleton-line skeleton-button" />
              </div>
            ))
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '60px' }}>
              <p style={{ color: 'var(--muted)', fontSize: '1.2rem' }}>No courses found matching your criteria.</p>
              <button 
                className="btn-outline" 
                style={{ marginTop: '20px' }}
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); setActiveLevel('All'); }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
