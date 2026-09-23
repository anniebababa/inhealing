import Image from 'next/image';

const experiences = [
  '2025 國際美學調香大賞冠軍',
  '國際調香師、芳療師、療癒師培育導師',
  '植覺療癒有限公司負責人',
  '植覺療癒品牌主理人',
  '前金融業20年副總裁',
];

const certifications = [
  'NAHA Level 1暨 Level 2芳療師暨講師',
  'F.C.A 法國F.C.A. 精油調香師暨講師',
  '韓國 KDCA 調香師',
  '英國 IFA 芳療師',
  '安根植物學苑授證講師',
  '希塔療癒師暨授證導師',
];

export default function KateSection() {
  return (
    <section>
      {/* Upper: photo + bio */}
      <div style={{
        backgroundColor: '#ECE7DA',
        display: 'grid',
        gridTemplateColumns: '44% 56%',
        alignItems: 'stretch',
      }} className="kate-upper">

        {/* Left: photo */}
        <div style={{
          position: 'relative',
          minHeight: '520px',
          overflow: 'hidden',
          backgroundColor: '#ECE7DA',
        }} className="kate-img-wrap">
          <Image
            src="/images/Image (7).png"
            alt="Kate 老師"
            fill
            style={{ objectFit: 'contain', objectPosition: 'right bottom', transform: 'translateX(2%) translateY(2%) scale(0.97)' }}
          />
        </div>

        {/* Right: text */}
        <div style={{
          padding: '64px 56px 64px 52px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }} className="kate-info">
          <p style={{
            fontSize: '18px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            color: '#C4A040',
            marginBottom: '12px',
            fontFamily: 'var(--font-noto-serif-tc), serif',
          }}>
            講師介紹
          </p>

          <h2 className="kate-h2" style={{
            fontSize: '38px',
            fontWeight: '500',
            letterSpacing: '0.03em',
            lineHeight: '1.3',
            color: '#38290F',
            marginBottom: '16px',
            fontFamily: '"Noto Serif TC", "Source Han Serif TC", serif',
          }}>
            Kate 老師
          </h2>

          <p className="kate-tagline" style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#38290F',
            letterSpacing: '0.06em',
            lineHeight: '1.6',
            marginBottom: '24px',
            fontFamily: 'var(--font-noto-serif-tc), serif',
          }}>
            當香氛成為語言，她是那位溫柔卻堅定的翻譯者
          </p>

          <p className="kate-bio" style={{
            fontSize: '17px',
            fontWeight: '400',
            color: '#38290F',
            letterSpacing: '0.04em',
            lineHeight: '1.7',
            marginBottom: '32px',
          }}>
            在課堂中，你學到的不僅是芳療與調香技術，更是一種與自己和世界對話的生活方式。Kate 老師以紮實的實證背景與溫柔引導，陪伴超過百位學員打造屬於自己的香氣斜槓人生。
          </p>

          <p style={{
            fontSize: '20px',
            fontWeight: '600',
            letterSpacing: '0.06em',
            color: '#38290F',
            marginBottom: '14px',
            fontFamily: 'var(--font-noto-serif-tc), serif',
          }}>
            經歷
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {experiences.map(e => (
              <div key={e} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#7a6a52', flexShrink: 0, marginTop: '2px' }}>・</span>
                <span style={{ fontSize: '15px', color: 'rgba(56,41,15,0.85)', letterSpacing: '0.04em', lineHeight: '1.7' }}>
                  {e}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lower: golden certifications bar */}
      <div style={{ backgroundColor: '#C4A040', padding: '52px 0 60px' }}>
        <div className="container">
          <p style={{
            fontSize: '21px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            color: '#ffffff',
            marginBottom: '24px',
            fontFamily: 'var(--font-noto-serif-tc), serif',
          }}>
            專業認證
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {certifications.map(c => (
              <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)', flexShrink: 0, marginTop: '2px' }}>・</span>
                <span style={{ fontSize: '16px', color: '#ffffff', letterSpacing: '0.04em', lineHeight: '1.7' }}>
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          /* Switch to flex so order works */
          .kate-upper {
            display: flex !important;
            flex-direction: column !important;
          }
          /* Text first */
          .kate-info { order: 1; padding: 36px 20px 28px !important; }
          /* Photo second */
          .kate-img-wrap { order: 2; min-height: 360px !important; }
          .kate-img-wrap img {
            object-fit: cover !important;
            object-position: top center !important;
            transform: none !important;
          }
          .kate-h2 { font-size: 28px !important; }
          .kate-tagline { font-size: 16px !important; }
          .kate-bio { font-size: 15px !important; }
        }
      `}</style>
    </section>
  );
}
