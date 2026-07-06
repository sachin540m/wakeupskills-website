import usePageTitle from '../hooks/usePageTitle';

export default function PrivacyPolicy() {
  usePageTitle(
    'Privacy Policy',
    'Read WakeupSkills privacy practices, what data we collect, and how we keep your information secure.',
    '/privacy-policy'
  );

  return (
    <main>
      <section>
        <div className="section-label">Policy</div>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-desc">
          WakeupSkills is committed to protecting your privacy. This policy outlines the data we collect, how we use it, and your rights to control your information.
        </p>
        <div className="card" style={{ padding: '28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h3>Information We Collect</h3>
          <p>We collect only the information needed to deliver our services, support your learning journey, and improve the platform.</p>
          <h3>How We Use Your Data</h3>
          <p>Your contact details are used for communication, course updates, and support. We never sell your personal information to third parties.</p>
          <h3>Your Rights</h3>
          <p>You have the right to access, update, or request deletion of your personal data. Contact us anytime for privacy support.</p>
        </div>
      </section>
    </main>
  );
}
