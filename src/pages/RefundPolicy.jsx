import usePageTitle from '../hooks/usePageTitle';

export default function RefundPolicy() {
  usePageTitle(
    'Refund Policy',
    'See the WakeupSkills refund policy, eligibility terms, and how to request a refund for your course enrollment.',
    '/refund-policy'
  );

  return (
    <main>
      <section>
        <div className="section-label">Policy</div>
        <h1 className="section-title">Refund Policy</h1>
        <p className="section-desc">
          At WakeupSkills, we want you to feel confident in your learning investment. This policy explains the conditions for refunds and the process to request one.
        </p>
        <div className="card" style={{ padding: '28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h3>Refund Eligibility</h3>
          <p>Refunds are available within the first 7 days of course enrollment, provided no significant course materials have been consumed.</p>
          <h3>How to Request</h3>
          <p>Contact our support team at support@wakeupskills.com with your enrollment details and refund request.</p>
          <h3>Processing Time</h3>
          <p>Refunds are typically processed within 7–10 business days after approval.</p>
        </div>
      </section>
    </main>
  );
}
