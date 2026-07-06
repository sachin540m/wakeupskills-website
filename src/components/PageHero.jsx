export default function PageHero({ title, subtitle, badge }) {
  return (
    <div className="hero" style={{ padding: '60px 6% 40px' }}>
      {badge && <div className="badge">{badge}</div>}
      <h1 style={{ marginBottom: '16px' }}>{title}</h1>
      {subtitle && <p className="hero-sub">{subtitle}</p>}
    </div>
  );
}
