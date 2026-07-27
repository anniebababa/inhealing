import Image from 'next/image';

const services = [
  {
    title: '台北實體調香體驗課',
    desc: '以天然精油為媒介，調製屬於你的專屬香氣，找回自己的獨特氣息',
    href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8',
    image: '/images/kyp/section-img-1.png',
  },
  {
    title: '療癒手作體驗',
    desc: '透過手作香氛的過程，讓身心在自然植物的氣息中得到深度放鬆',
    href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8',
    image: '/images/kyp/portrait-2.png',
  },
  {
    title: '香氛療癒諮詢',
    desc: '一對一陪伴你探索氣味與情緒的連結，找到最適合你的療癒路徑',
    href: 'https://calendly.com/tingwenlin/1-1',
    image: '/images/kyp/portrait-3.png',
  },
];

export default function HealingSection() {
  return (
    <section>
      {/* Full-width image banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '420px',
        overflow: 'hidden',
      }} className="heal-banner">
        <Image
          src="/images/kyp/landscape-2.png"
          alt="找回自己"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20,12,4,0.32)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center',
          color: 'var(--white)',
          padding: '24px',
        }}>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 44px)',
            fontWeight: '400',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            找回自己、呵護自己
          </h2>
          <p style={{
            fontSize: 'clamp(13px, 1.8vw, 16px)',
            fontWeight: '300',
            letterSpacing: '0.1em',
            opacity: 0.9,
          }}>
            每一次深呼吸的芬芳，都是回到自己心底的旅程
          </p>
        </div>
      </div>

      {/* 3 service cards */}
      <div style={{ backgroundColor: 'var(--cream)', padding: '64px 0 80px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }} className="heal-grid">
            {services.map(service => (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  marginBottom: '20px',
                }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.5s ease' }}
                    className="heal-card-img"
                  />
                </div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                  color: 'var(--text)',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '300',
                  color: 'var(--text-muted)',
                  lineHeight: '1.8',
                  letterSpacing: '0.03em',
                }}>
                  {service.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .heal-card-img:hover { transform: scale(1.04); }
        @media (max-width: 1024px) {
          .heal-grid { gap: 20px !important; }
        }
        @media (max-width: 640px) {
          .heal-banner { height: 280px !important; }
          .heal-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
