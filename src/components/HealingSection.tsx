import Image from 'next/image';

const services = [
  {
    title: '台北實體調香體驗課',
    desc: '以氣味描繪靈魂，調出屬於你的獨特香氣',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScEYqUV8g5hfKy0fjxrCa6we_lPoROskKdG9YMdi-64lVwRLQ/viewform',
    icon: <Image src="/images/FlowerTulip.png" alt="FlowerTulip" width={48} height={48} style={{ objectFit: 'contain' }} />,
  },
  {
    title: '療癒手作體驗',
    desc: '透過香氛創作，療癒情緒、連結內在，找回平靜與力量',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe2Q3y9GEXBFEF00SuvRLK6Zx99-lle3E67VHmXcyy0Mi1scg/viewform',
    icon: <Image src="/images/HandHeart.png" alt="HandHeart" width={48} height={48} style={{ objectFit: 'contain' }} />,
  },
  {
    title: '香氛療癒諮詢',
    desc: '結合芳療與潛意識探索，量身調配香氛配方，療癒情緒與身心失衡',
    href: 'https://calendly.com/healingbar/one-on-one-with-kate?month=2026-07',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Heart outline */}
        <path d="M24 38 C24 38 8 28 8 18 C8 13 12 9 17 9 C20 9 22 11 24 13 C26 11 28 9 31 9 C36 9 40 13 40 18 C40 28 24 38 24 38Z" />
        {/* Pulse line */}
        <polyline points="12,24 17,24 20,18 23,30 26,22 29,24 36,24" />
      </svg>
    ),
  },
];

export default function HealingSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/full-banner.png"
          alt="找回自己"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,12,4,0.2)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '72px 0 80px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '52px', padding: '0 20px' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontWeight: '500',
            letterSpacing: '0.08em',
            color: '#ffffff',
            marginBottom: '14px',
            fontFamily: 'var(--font-noto-serif-tc), serif',
          }}>
            找回自己、呵護自己
          </h2>
          <p style={{
            fontSize: '18px',
            fontWeight: '400',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.8)',
            fontFamily: 'var(--font-noto-sans-tc), sans-serif',
          }}>
            每一次深層對話，都是回到自己的起點
          </p>
        </div>

        {/* 3 cards */}
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }} className="heal-grid">
            {services.map(service => (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  aspectRatio: '1/1',
                  padding: '32px',
                  border: 'none',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(4px)',
                  transition: 'background 0.3s',
                }}
                className="heal-card"
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '300',
                  letterSpacing: '0.18em',
                  marginBottom: '14px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                  textAlign: 'center',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '300',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: '1.9',
                  letterSpacing: '0.04em',
                  fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                  textAlign: 'center',
                }}>
                  {service.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .heal-card:hover { background: rgba(255,255,255,0.16) !important; }
        @media (max-width: 640px) {
          .heal-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
