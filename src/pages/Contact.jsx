import { useState } from 'react';
import PageHero from '../components/PageHero';
import usePageTitle from '../hooks/usePageTitle';

export default function Contact() {
  usePageTitle(
    'Contact',
    'Get in touch with WakeupSkills for questions about courses, admissions, mentorship, and career support.',
    '/contact'
  );
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <main>
      <PageHero 
        badge="Get in Touch"
        title={<span>We're Here to <em>Help</em> You</span>}
        subtitle="Have questions? Want to collaborate? Or just want to say hi? Reach out to our community team."
      />

      <section>
        <div className="network-inner" style={{ alignItems: 'flex-start' }}>
          <div>
            <div className="section-label">Contact Info</div>
            <h2 className="section-title">Global Headquarters</h2>
            <div className="contact-cards" style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
              <div className="card" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--sunrise)', marginBottom: '8px' }}>Email Us</h4>
                <p><a href="mailto:support@wakeupskills.com" style={{ color: 'var(--muted)', textDecoration: 'none' }}>support@wakeupskills.com</a></p>
                <p><a href="mailto:wakeupskillsindia@gmail.com" style={{ color: 'var(--muted)', textDecoration: 'none' }}>wakeupskillsindia@gmail.com</a></p>
              </div>
              <div className="card" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--sunrise)', marginBottom: '8px' }}>Call Us</h4>
                <p><a href="tel:919326554031" style={{ color: 'var(--muted)', textDecoration: 'none' }}>+91 93265 54031</a></p>
                <p style={{ marginTop: '6px' }}><a href="https://wa.me/919326554031" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none' }}>WhatsApp Us</a></p>
              </div>
              <div className="card" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--sunrise)', marginBottom: '8px' }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                  <span style={{ cursor: 'pointer', color: 'var(--muted)' }}>Twitter</span>
                  <span style={{ cursor: 'pointer', color: 'var(--muted)' }}>LinkedIn</span>
                  <span style={{ cursor: 'pointer', color: 'var(--muted)' }}>Instagram</span>
                </div>
              </div>
            </div>

          </div>
          
          <div className="card" style={{ padding: '20px', overflow: 'hidden' }}>
            <h3 style={{ marginBottom: '20px' }}>Enquiry Form</h3>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              {!formLoaded && (
                <div className="iframe-skeleton">
                  <div className="iframe-skeleton-card">
                    <div className="skeleton-line skeleton-title" />
                    <div className="skeleton-line skeleton-text" />
                    <div className="skeleton-line skeleton-text short" />
                  </div>
                </div>
              )}
              <iframe
                title="Google Enquiry Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLScXUWDT40vB6moKY_-KPLL44v3BBPduiu15E4lYXITMipEZ8Q/viewform?embedded=true"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allowFullScreen
                onLoad={() => setFormLoaded(true)}
              ></iframe>
            </div>
            <p style={{ marginTop: '16px', color: 'var(--muted)', fontSize: '0.9rem' }}>
              If the form does not load, <a href="https://docs.google.com/forms/d/e/1FAIpQLScXUWDT40vB6moKY_-KPLL44v3BBPduiu15E4lYXITMipEZ8Q/viewform" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sunrise)' }}>open it in a new tab</a>.
            </p>
            <div style={{ marginTop: '36px' }}>
              <h3 className="section-title" style={{ fontSize: '1.4rem' }}>Frequently Asked Questions</h3>
              <div className="faq-list" style={{ marginTop: '20px', display: 'grid', gap: '15px' }}>
                <details className="faq-item">
                  <summary>How long does enrollment take?</summary>
                  <p style={{ color: 'var(--muted)', marginTop: '10px', fontSize: '0.9rem' }}>Enrollment is usually confirmed within 24 hours once you submit the form and complete the initial onboarding process.</p>
                </details>
                <details className="faq-item">
                  <summary>Can I book a demo session before I enroll?</summary>
                  <p style={{ color: 'var(--muted)', marginTop: '10px', fontSize: '0.9rem' }}>Yes — choose "Book a Free Demo" in the contact form or reach out via WhatsApp to schedule a demo with our admissions team.</p>
                </details>
                <details className="faq-item">
                  <summary>When do placement batches start?</summary>
                  <p style={{ color: 'var(--muted)', marginTop: '10px', fontSize: '0.9rem' }}>New placement-focused batches begin each month with limited seats, so we recommend applying early to secure your spot.</p>
                </details>
                <details className="faq-item">
                  <summary>Who is eligible for placement support?</summary>
                  <p style={{ color: 'var(--muted)', marginTop: '10px', fontSize: '0.9rem' }}>Placement support is available for all enrolled students who complete the core curriculum and capstone project, regardless of prior experience.</p>
                </details>
                <details className="faq-item">
                  <summary>What support is available after enrollment?</summary>
                  <p style={{ color: 'var(--muted)', marginTop: '10px', fontSize: '0.9rem' }}>Students receive mentor support, placement guidance, and regular progress check-ins throughout the course.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
