import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ContactForm() {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paramSubject = params.get('subject');
    const courseName = params.get('course');

    if (paramSubject) {
      setSubject(paramSubject);
    }

    if (courseName) {
      setMessage(`I’m interested in the ${courseName} track. Please share more details.`);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="john@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Course Support">Course Support</option>
            <option value="Request Enrollment">Request Enrollment</option>
            <option value="Partnership">Partnership</option>
            <option value="Community Help">Community Help</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your message here..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
          Send Message
        </button>
      </form>

      {isSubmitted && (
        <div className="contact-success-overlay" role="dialog" aria-modal="true">
          <div className="contact-success-card">
            <div className="contact-success-icon">✓</div>
            <h3>Message received</h3>
            <p>Thanks for reaching out. Our team will get back to you shortly.</p>
            <button type="button" className="btn-primary" onClick={() => setIsSubmitted(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
