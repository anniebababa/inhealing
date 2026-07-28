import Image from 'next/image';

export default function AchievementSection() {
  return (
    <section className="brand-belief-section" style={{ padding: '80px 0 96px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '68% 32%',
          gap: '64px',
          alignItems: 'center',
        }} className="ach-grid">
          {/* Left: text */}
          <div>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 34px)',
              fontWeight: '500',
              letterSpacing: '0.06em',
              lineHeight: '1.4',
              marginBottom: '20px',
              color: 'var(--heading-brown)',
              fontFamily: 'var(--font-noto-serif-tc), "Source Han Serif TC", serif',
            }}>
              我們相信，每個人都值得一段香氛療癒旅程
            </h2>
            <p style={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'var(--body-brown)',
              letterSpacing: '0.05em',
              lineHeight: '1.9',
              marginBottom: '40px',
              fontFamily: 'var(--font-noto-sans-tc), "Source Han Sans TC", sans-serif',
            }}>
              『你喜歡的香氛，也許正是你靈魂的提示』<br />
              讓香氛療癒陪你遇見無限可能的自己。<br /><br />
              在創業、斜槓、追求財富自由的路上，透過香氛療癒讓你擁有滿滿的正能量與動力，陪你找到下一個可能。
            </p>
          </div>

          {/* Right: image */}
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '2px', overflow: 'hidden' }}>
            <Image
              src="/images/Image (1)拷貝.png"
              alt="香氛療癒"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ach-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .ach-grid > div:last-child { aspect-ratio: 3/2 !important; }
        }
      `}</style>
    </section>
  );
}
