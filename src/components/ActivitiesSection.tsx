import Image from 'next/image';

const activities = [
  {
    title: '【翻轉信念・改變人生】希塔療癒師認證課入門〈基礎 DNA〉｜線上直播＋國際證書，打開自癒力新人生',
    tag: '療癒師',
    image: '/images/activity-1.png',
    href: 'https://weekielife.com/blog/thetahealing-basic-dna-certification',
  },
  {
    title: '【你也能擁有法式專屬香氣】法國 F.C.A. 精油調香師入門課｜9小時帶你從芳療小白變斜槓高手',
    tag: '調香師',
    image: '/images/activity-2.png',
    href: 'https://weekielife.com/blog/fca-essential-oil-perfumer-beginner',
  },
  {
    title: '【拿下國際芳療師證書】美國 NAHA Level 1 芳療師認證課｜線上學習＋國際證書',
    tag: '芳療師',
    image: '/images/activity-3.png',
    href: 'https://weekielife.com/blog/naha-level1-aromatherapist-certification',
  },
];

export default function ActivitiesSection() {
  return (
    <section style={{ backgroundColor: '#ECE7DA', padding: '80px 0 96px' }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(26px, 3.6vw, 44px)',
          fontWeight: '500',
          letterSpacing: '0.08em',
          textAlign: 'center',
          marginBottom: '52px',
          color: '#38290F',
          fontFamily: 'var(--font-noto-serif-tc), serif',
        }}>
          最新活動
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
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
                marginBottom: '18px',
              }}>
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }}
                  className="act-img"
                />
              </div>
              <h3 style={{
                fontSize: '19px',
                fontWeight: '400',
                letterSpacing: '0.03em',
                color: '#38290F',
                lineHeight: '1.8',
                marginBottom: '10px',
                fontFamily: 'var(--font-noto-sans-tc), sans-serif',
              }}>
                {act.title}
              </h3>
              <p style={{
                fontSize: '17px',
                fontWeight: '300',
                color: '#C4A040',
                letterSpacing: '0.06em',
              }}>
                {act.tag}
              </p>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <a
            href="https://forms.gle/Sg3HV5Ec5J8eiQdV8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '13px 44px',
              border: '1px solid #38290F',
              fontSize: '17px',
              letterSpacing: '0.12em',
              color: '#38290F',
              backgroundColor: 'transparent',
            }}
          >
            查看更多活動
          </a>
        </div>
      </div>

      <style>{`
        .act-img:hover { transform: scale(1.04); }
        @media (max-width: 1024px) {
          .act-grid { gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .act-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
