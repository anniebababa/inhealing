import Image from 'next/image';

export default function HeroSection() {
  return (
    <section style={{ paddingTop: 'var(--header-h)' }}>
      {/* 3-panel mosaic */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - var(--header-h))',
        minHeight: '520px',
        maxHeight: '860px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        overflow: 'hidden',
      }} className="hero-mosaic">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/kyp/portrait-1.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/kyp/activity-2.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/images/kyp/landscape-1.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        </div>

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,12,4,0.38)', zIndex: 1 }} />

        {/* Text */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '24px 20px',
          color: 'var(--white)',
        }}>
          <h1 style={{
            fontSize: 'clamp(26px, 4vw, 54px)',
            fontWeight: '400',
            letterSpacing: '0.08em',
            lineHeight: '1.35',
            marginBottom: '20px',
          }}>
            讓香氛與療癒成為你人生的新起點
          </h1>
          <p style={{
            fontSize: 'clamp(13px, 1.6vw, 16px)',
            fontWeight: '300',
            letterSpacing: '0.1em',
            opacity: 0.88,
          }}>
            從自我療癒到專業轉職，打造屬於你的香氛斜槓人生
          </p>
        </div>

        {/* Circular seal */}
        <div style={{
          position: 'absolute',
          bottom: '-44px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          width: '88px', height: '88px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid var(--cream)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        }}>
          <Image src="/images/kyp/logo-square.png" alt="InHealing" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>

      {/* Space for seal overlap */}
      <div style={{ height: '64px', backgroundColor: 'var(--cream)' }} />

      <style>{`
        @media (max-width: 640px) {
          .hero-mosaic { grid-template-columns: 1fr !important; height: 75vh !important; }
          .hero-mosaic > div:nth-child(2), .hero-mosaic > div:nth-child(3) { display: none; }
        }
      `}</style>
    </section>
  );
}
