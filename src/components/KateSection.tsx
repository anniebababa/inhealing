import Image from 'next/image';

const credentials = [
  '希塔療癒師認證師資',
  '法國 FCA 精油調香師認證',
  '美國 NAHA Level 1 & 2 芳療師認證',
  '企業組織健康教練認證',
  '國際 NLP 執行師認證',
];

export default function KateSection() {
  return (
    <section>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '560px',
      }} className="kate-grid">
        {/* Left: portrait */}
        <div style={{
          position: 'relative',
          minHeight: '560px',
          backgroundColor: 'var(--cream)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '48px 40px 0',
        }} className="kate-img-wrap">
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '360px',
            aspectRatio: '2/3',
          }}>
            <Image
              src="/images/kyp/portrait-kate.png"
              alt="Kate 老師"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>

        {/* Right: golden bg + info */}
        <div style={{
          backgroundColor: 'var(--kate-gold)',
          padding: '64px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }} className="kate-info">
          {/* Kate in cursive */}
          <p style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(52px, 7vw, 96px)',
            fontStyle: 'italic',
            fontWeight: '400',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: '1',
            marginBottom: '8px',
          }}>
            Kate
          </p>
          <p style={{
            fontSize: '13px',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '36px',
          }}>
            老師
          </p>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            fontWeight: '400',
            color: 'var(--white)',
            letterSpacing: '0.06em',
            lineHeight: '1.7',
            marginBottom: '32px',
          }}>
            當香氛成為語言，她是那位溫柔卻堅定的翻譯者
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {credentials.map(c => (
              <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)', marginTop: '4px', fontSize: '10px' }}>◆</span>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.88)', letterSpacing: '0.04em', lineHeight: '1.6' }}>
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .kate-grid { grid-template-columns: 1fr !important; }
          .kate-img-wrap { min-height: 380px !important; padding: 36px 24px 0 !important; }
          .kate-info { padding: 36px 24px !important; }
        }
      `}</style>
    </section>
  );
}
