import usePageTitle from '../hooks/usePageTitle';

export default function TermsOfUse() {
  usePageTitle(
    'Terms of Use',
    'Review WakeupSkills terms of use, account responsibilities, and the rules for using our learning platform.',
    '/terms-of-use'
  );

  return (
    <main>
      <section>
        <div className="section-label">Policy</div>
        <h1 className="section-title">Terms of Use</h1>
        <p className="section-desc">
          These terms govern your use of WakeupSkills. By accessing our platform, you agree to follow these guidelines and use our services responsibly.
        </p>
        <div className="card" style={{ padding: '28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h3>Use of the Platform</h3>
          <p>WakeupSkills content is meant for your personal learning and professional development. You may not redistribute our materials without permission.</p>
          <h3>Account Responsibilities</h3>
          <p>You are responsible for keeping your account details secure and using your access in compliance with our policies.</p>
          <h3>Modifications</h3>
          <p>We may update these terms as the platform grows. Continued use of the site implies acceptance of the latest version.</p>
        </div>
      </section>
    </main>
  );
}
