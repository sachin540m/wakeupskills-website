import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import TrustSection from '../components/TrustSection';
import Features from '../components/Features';
import NetworkSection from '../components/NetworkSection';
import CTASection from '../components/CTASection';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle(
    'Home',
    'WakeupSkills delivers hands-on courses in web development, AI, cloud, and data analytics with mentorship and placement-focused learning.',
    '/'
  );
  return (
    <main>
      <Hero />
      <StatsBar />
      <TrustSection />
      <Features />
      <NetworkSection />
      <CTASection />
    </main>
  );
}
