import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="nav-announce">
        🚀 New Batch Starting July 2026 &nbsp;·&nbsp;
        <Link to="/courses" className="nav-announce-link">Enroll Now →</Link>
      </div>

      {/* Main Nav */}
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          Wake<span>Up</span>Skills
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Courses</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </div>

        {/* CTA + Hamburger */}
        <div className="nav-right">
          <a href="tel:919326554031" className="nav-phone" aria-label="Call WakeupSkills">📞 93265 54031</a>
          <Link to="/contact?subject=General%20Inquiry" className="nav-cta-btn" onClick={() => setMenuOpen(false)} aria-label="Open enquiry form">
            Enquiry →
          </Link>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setMenuOpen(!menuOpen);
              }
            }}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `mob-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `mob-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/courses" className={({ isActive }) => `mob-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mob-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <a href="tel:919326554031" className="mob-phone">📞 93265 54031</a>
          <Link to="/contact?subject=General%20Inquiry" className="btn-primary mob-cta" onClick={() => setMenuOpen(false)}>Enquiry →</Link>
        </div>
      </nav>
    </>
  );
}
