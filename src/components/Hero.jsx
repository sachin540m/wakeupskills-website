import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="hero">
      <div className="badge">⭐ Professional Tech Learning Platform</div>
      <h1>Learn Real Skills.<br /><em>Advance Your Career.</em></h1>
      <p className="hero-sub">WakeupSkills provides industry-standard training for students, professionals, and businesses to master the modern tech landscape.</p>
      <div className="hero-buttons">
        <Link to="/contact?subject=General%20Inquiry" className="btn-primary">Get Started →</Link>
        <Link to="/courses" className="btn-outline">Browse Tracks</Link>
      </div>
      <p className="url-tag">🌐 <a href="/">www.wakeupskills.com</a></p>
    </div>
  );
}
