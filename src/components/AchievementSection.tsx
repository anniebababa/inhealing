import Image from 'next/image';
import Link from 'next/link';

const items = [
  { label: '專業培訓', href: '/course#course' },
  { label: '講師培訓', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8', external: true },
  { label: '創業陪跑', href: 'https://forms.gle/SaM6QgXC5JmsxwJW7', external: true },
];

export default function AchievementSection() {
  return (
    <section style={{ backgroundColor: 'var(--cream)', padding: '80px 0 96px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '64px',
          alignItems: 'center',
        }} className="ach-grid">
          {/* Left: text */}
          <div>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 34px)',
              fontWeight: '400',
              letterSpacing: '0.06em',
              lineHeight: '1.4',
              marginBottom: '20px',
              color: 'var(--text)',
            }}>
              成就自己｜打造你的香氛療癒斜槓人生
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: '300',
              color: 'var(--text-muted)',
              letterSpacing: '0.05em',
              lineHeight: '1.9',
              marginBottom: '40px',
            }}>
              從零基礎到國際認證，從香氣美學學到身心療癒，找到你精彩的潛力，建立專業、創造價值
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {items.map(item =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '18px 0',
                      borderBottom: '1px solid var(--border)',
                      fontSize: '16px',
                      color: 'var(--text)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontSize: '18px', color: 'var(--gold)' }}>→</span>
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '18px 0',
                      borderBottom: '1px solid var(--border)',
                      fontSize: '16px',
                      color: 'var(--text)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontSize: '18px', color: 'var(--gold)' }}>→</span>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right: image */}
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '2px', overflow: 'hidden' }}>
            <Image
              src="/images/kyp/activity-2.png"
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
