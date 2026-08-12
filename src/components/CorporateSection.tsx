import Image from 'next/image';

const services = [
  {
    title: '品牌香氛產品設計',
    desc: '用香氛打造品牌關鍵記憶點，提供從設計香氛到量產產品服務，打造企業品牌創造獨特競爭力',
    href: 'https://line.me/R/ti/p/@133hvsdc',
    image: '/images/Image (4).png',
  },
  {
    title: '企業調香講座',
    desc: '為客戶或員工來場有質感的法式調香，讓香氛展開與自己對話的療癒時光',
    href: 'https://line.me/R/ti/p/@133hvsdc',
    image: '/images/Image (5).png',
  },
  {
    title: '企業培訓自我成長',
    desc: '讓香氛來引領，察覺情緒找到平行，從香氛找到自癒力，提升工作效率與身心靈健康',
    href: 'https://line.me/R/ti/p/@133hvsdc',
    image: '/images/Image (6).png',
  },
];

export default function CorporateSection() {
  return (
    <section style={{ backgroundColor: 'var(--cream)' }}>
      {/* Title */}
      <div className="corp-title-block" style={{ padding: '72px 20px 48px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: '500',
          letterSpacing: '0.06em',
          color: 'var(--heading-brown)',
          marginBottom: '16px',
          fontFamily: 'var(--font-noto-serif-tc), serif',
        }}>
          企業成長
        </h2>
        <p style={{
          fontSize: '18px',
          fontWeight: '400',
          color: 'var(--body-brown)',
          letterSpacing: '0.05em',
          lineHeight: '1.9',
          fontFamily: 'var(--font-noto-sans-tc), sans-serif',
        }}>
          透過香氛打造企業風格與文化感知力
        </p>
      </div>

      {/*
        Desktop: grid-auto-flow:column → images fill row 1, texts fill row 2
        Mobile:  grid-auto-flow:row   → interleaved image→text→image→text
      */}
      <div className="corp-grid">
        {services.flatMap(s => [
          <div key={`img-${s.title}`} className="corp-img-cell">
            <Image
              src={s.image}
              alt={s.title}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>,
          <a
            key={`txt-${s.title}`}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="corp-txt-cell"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                letterSpacing: '0.04em',
                color: '#38290F',
                fontFamily: 'var(--font-noto-serif-tc), serif',
              }}>
                {s.title}
              </h3>
              <span style={{ fontSize: '16px', color: '#38290F', flexShrink: 0, marginLeft: '12px', marginTop: '2px' }}>↗</span>
            </div>
            <p style={{
              fontSize: '13px',
              fontWeight: '400',
              color: 'rgba(56,41,15,0.9)',
              lineHeight: '1.9',
              letterSpacing: '0.03em',
            }}>
              {s.desc}
            </p>
          </a>,
        ])}
      </div>

      <style>{`
        .corp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-flow: column;
          gap: 0;
        }
        .corp-img-cell {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .corp-txt-cell {
          display: block;
          padding: 28px 32px 36px;
          text-decoration: none;
          background-color: #ECE7DA;
        }
        @media (max-width: 768px) {
          .corp-title-block { text-align: left !important; padding: 48px 20px 32px !important; }
          .corp-grid {
            grid-template-columns: 1fr;
            grid-auto-flow: row;
          }
          .corp-txt-cell {
            padding: 20px 20px 28px;
            font-size: 15px;
          }
          .corp-txt-cell h3 { font-size: 18px !important; }
        }
      `}</style>
    </section>
  );
}
