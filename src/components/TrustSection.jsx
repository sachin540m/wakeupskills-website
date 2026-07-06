import { MessageSquareQuote, Star, TrendingUp, Briefcase, Quote } from 'lucide-react';

const trustPoints = [
  {
    icon: Star,
    title: 'Google reviews',
    value: '4.9/5',
    meta: 'Rated by 650+ verified learners',
    copy: 'Students consistently praise the practical teaching style, rapid support, and career-focused guidance.'
  },
  {
    icon: MessageSquareQuote,
    title: 'Student review',
    value: '98% recommend',
    meta: 'Loved for clarity and confidence',
    copy: 'Learners say the sessions make complex topics easy to understand and directly applicable to real work.'
  },
  {
    icon: TrendingUp,
    title: 'Placement stats',
    value: '92% placed',
    meta: 'Within 6 months of completion',
    copy: 'Our career support and portfolio-driven learning help students transition into strong roles faster.'
  },
  {
    icon: Briefcase,
    title: 'Hiring partners',
    value: '250+ companies',
    meta: 'Trusted recruiters and employers',
    copy: 'Graduates connect with top employers across tech, finance, and startups through our hiring network.'
  }
];

const testimonials = [
  {
    name: 'Aditi Sharma',
    role: 'Pune · Data Analytics',
    quote: 'The mentors explained every concept in a simple way and helped me build confidence for interviews. I got my first analyst role within four months.'
  },
  {
    name: 'Rohan Verma',
    role: 'Hyderabad · Web Development',
    quote: 'The assignments were practical and the support was excellent. I was able to build a portfolio that helped me crack a good placement.'
  },
  {
    name: 'Priya Nair',
    role: 'Bengaluru · Digital Marketing',
    quote: 'I loved how the course balanced theory with real examples. It made learning feel relevant and gave me the push I needed to start freelancing.'
  }
];

export default function TrustSection() {
  return (
    <section className="trust-section" aria-labelledby="trust-section-title">
      <div className="trust-section__header">
        <span className="trust-badge">Trusted by learners</span>
        <h2 id="trust-section-title">Social proof that helps students decide faster</h2>
        <p>
          From verified Google reviews to placement outcomes and hiring partners, our community trust is built on measurable results: 12,000+ learners trained, 92% placement rate, and 250+ companies hiring our graduates.
        </p>
      </div>

      <div className="trust-grid">
        {trustPoints.map((item, index) => {
          const Icon = item.icon;
          return (
            <article className="trust-card" key={index}>
              <div className="trust-card__icon">
                <Icon size={18} />
              </div>
              <div className="trust-card__body">
                <div className="trust-card__value">{item.value}</div>
                <div className="trust-card__title">{item.title}</div>
                <div className="trust-card__meta">{item.meta}</div>
                <p>{item.copy}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="testimonial-section">
        <div className="testimonial-section__header">
          <h3>What our students say</h3>
          <p>Real experiences from learners across India.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={index}>
              <div className="testimonial-card__top">
                <div>
                  <div className="testimonial-card__name">{item.name}</div>
                  <div className="testimonial-card__role">{item.role}</div>
                </div>
                <div className="testimonial-card__quote">
                  <Quote size={18} />
                </div>
              </div>
              <div className="testimonial-card__rating">★★★★★</div>
              <p>{item.quote}</p>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
