import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: '療癒師認證課', href: '/course#healing-course' },
  { label: '調香師認證課', href: '/course#perfumer-course' },
  { label: '芳療師認證課', href: '/course#aromatherapy-course' },
  { label: '常見問題', href: '/course#faq' },
];

export default function BottomCTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '520px' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/course-banner.png"
          alt="CTA background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,6,2,0.28)' }} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '520px',
        padding: '72px 20px',
        textAlign: 'center',
      }}>
        {/* Keywords */}
        <p style={{
          fontSize: 'clamp(18px, 2.4vw, 29px)',
          fontWeight: '400',
          letterSpacing: '0.16em',
          color: '#ECE7DA',
          marginBottom: '16px',
          fontFamily: 'var(--font-noto-serif-tc), serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          <span>斜槓</span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="#ECE7DA"><path d="M5 0 C5 0 0 6 0 9 A5 5 0 0 0 10 9 C10 6 5 0 5 0Z"/></svg>
          <span>創業</span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="#ECE7DA"><path d="M5 0 C5 0 0 6 0 9 A5 5 0 0 0 10 9 C10 6 5 0 5 0Z"/></svg>
          <span>變現</span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="#ECE7DA"><path d="M5 0 C5 0 0 6 0 9 A5 5 0 0 0 10 9 C10 6 5 0 5 0Z"/></svg>
          <span>陪跑</span>
        </p>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(14px, 1.8vw, 18px)',
          fontWeight: '300',
          letterSpacing: '0.1em',
          color: '#ECE7DA',
          marginBottom: '36px',
        }}>
          從 0 開始，打造專屬的芳療人生
        </p>

        {/* CTA Button */}
        <a
          href="https://calendly.com/tingwenlin/1-1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '13px 40px',
            backgroundColor: '#6B3F1E',
            color: '#ECE7DA',
            fontSize: '15px',
            letterSpacing: '0.1em',
            marginBottom: '48px',
            fontFamily: 'var(--font-noto-sans-tc), sans-serif',
          }}
        >
          立即預約免費諮詢
        </a>

        {/* Divider */}
        <div style={{ width: '32px', height: '1px', backgroundColor: 'rgba(236,231,218,0.4)', marginBottom: '40px' }} />

        {/* Navigation links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: '15px',
                fontWeight: '300',
                letterSpacing: '0.08em',
                color: '#ECE7DA',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              {l.label} <span style={{ fontSize: '13px' }}>↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
