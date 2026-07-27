const services = [
  { label: '品牌香氛產品設計', href: 'https://lin.ee/inhealingtw' },
  { label: '企業調香講座', href: 'https://lin.ee/inhealingtw' },
  { label: '企業培訓自我成長', href: 'https://lin.ee/inhealingtw' },
];

export default function CorporateSection() {
  return (
    <section style={{ backgroundColor: 'var(--beige)', padding: '80px 0 96px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }} className="corp-grid">
          {/* Left */}
          <div>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: '400',
              letterSpacing: '0.06em',
              marginBottom: '16px',
              color: 'var(--text)',
            }}>
              企業成長
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: '300',
              color: 'var(--text-muted)',
              letterSpacing: '0.05em',
              lineHeight: '1.8',
            }}>
              協助客戶打造企業高度與文化凝聚力
            </p>
          </div>

          {/* Right: service list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--border)',
                  fontSize: '16px',
                  color: 'var(--text)',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                }}
              >
                <span>{s.label}</span>
                <span style={{ fontSize: '18px', color: 'var(--gold)' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .corp-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
