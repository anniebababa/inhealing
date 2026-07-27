import Image from 'next/image';

const activities = [
  {
    title: '希塔療癒體驗工作坊',
    date: '2025.08',
    image: '/images/kyp/activity-1.png',
    href: 'https://www.weekielife.com/',
  },
  {
    title: '法式精油調香體驗課',
    date: '2025.08',
    image: '/images/kyp/section-img-1.png',
    href: 'https://www.weekielife.com/',
  },
  {
    title: '香氛療癒創業分享會',
    date: '2025.09',
    image: '/images/kyp/activity-3.png',
    href: 'https://www.weekielife.com/',
  },
];

export default function ActivitiesSection() {
  return (
    <section style={{ backgroundColor: 'var(--cream)', padding: '80px 0 96px' }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(24px, 3vw, 36px)',
          fontWeight: '400',
          letterSpacing: '0.08em',
          textAlign: 'center',
          marginBottom: '52px',
          color: 'var(--text)',
        }}>
          最新活動
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }} className="act-grid">
          {activities.map(act => (
            <a
              key={act.title}
              href={act.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}
            >
              <div style={{
                position: 'relative',
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: '2px',
                marginBottom: '16px',
              }}>
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }}
                  className="act-img"
                />
              </div>
              <p style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                marginBottom: '8px',
              }}>
                {act.date}
              </p>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '400',
                letterSpacing: '0.04em',
                color: 'var(--text)',
                lineHeight: '1.5',
              }}>
                {act.title}
              </h3>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <a
            href="https://www.weekielife.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 40px',
              border: '1px solid var(--text)',
              fontSize: '14px',
              letterSpacing: '0.1em',
              color: 'var(--text)',
              transition: 'background 0.25s, color 0.25s',
            }}
          >
            查看更多活動
          </a>
        </div>
      </div>

      <style>{`
        .act-img:hover { transform: scale(1.04); }
        @media (max-width: 1024px) {
          .act-grid { gap: 20px !important; }
        }
        @media (max-width: 640px) {
          .act-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
