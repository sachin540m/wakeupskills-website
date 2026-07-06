const STATS = [
  { num: '12,000+', label: 'Students Trained' },
  { num: '92%', label: 'Placement Rate' },
  { num: '250+', label: 'Hiring Partners' },
  { num: '4.9/5', label: 'Student Satisfaction' }
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {STATS.map((stat, idx) => (
        <div className="stat" key={idx}>
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
