import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    label: '專業培訓',
    image: '/images/hero-banner.png',
    href: '/course',
    external: false,
    objectPosition: 'center center',
    span: 'large',
  },
  {
    label: '講師培訓',
    image: '/images/section-img-1.png',
    href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8',
    external: true,
    objectPosition: 'center top',
    span: 'small',
  },
  {
    label: '創業陪跑',
    image: '/images/section-img-2.png',
    href: 'https://forms.gle/SaM6QgXC5JmsxwJW7',
    external: true,
    objectPosition: 'center center',
    span: 'small',
  },
];

function CardInner({ label }: { label: string }) {
  return (
    <>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(18, 12, 6, 0.32)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
      }}>
        <p style={{
          fontSize: '24px',
          fontWeight: '300',
          letterSpacing: '0.12em',
          fontFamily: 'var(--font-noto-sans-tc), sans-serif',
          textAlign: 'center',
          color: '#ffffff',
          textDecoration: 'underline',
          textUnderlineOffset: '12px',
        }}>
          {label}
        </p>
      </div>
    </>
  );
}

export default function CoursesGridSection() {
  return (
    <section className="brand-belief-section" style={{ padding: '0 0 96px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '80px 20px 52px' }}>
        <h2 style={{
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: '500',
          letterSpacing: '0.06em',
          color: 'var(--heading-brown)',
          marginBottom: '16px',
          fontFamily: 'var(--font-noto-serif-tc), "Source Han Serif TC", serif',
        }}>
          成就自己｜打造你的香氛療癒斜槓人生
        </h2>
        <p style={{
          fontSize: '18px',
          fontWeight: '400',
          color: 'var(--body-brown)',
          letterSpacing: '0.05em',
          lineHeight: '1.9',
          fontFamily: 'var(--font-noto-sans-tc), "Source Han Sans TC", sans-serif',
        }}>
          從零基礎到國際認證，從香氣美學學到身心療癒，陪你找到熱情、建立專業、創造價值
        </p>
      </div>

      {/* 3-panel grid */}
      <div className="container">
        <div className="cg-grid">

          {/* Left: large panel — spans 2 rows */}
          <Link
            href={cards[0].href}
            className="cg-card cg-left"
          >
            <Image
              src={cards[0].image}
              alt={cards[0].label}
              fill
              sizes="63vw"
              style={{ objectFit: 'cover', objectPosition: cards[0].objectPosition }}
            />
            <CardInner label={cards[0].label} />
          </Link>

          {/* Top-right */}
          <a
            href={cards[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="cg-card"
          >
            <Image
              src={cards[1].image}
              alt={cards[1].label}
              fill
              sizes="37vw"
              style={{ objectFit: 'cover', objectPosition: cards[1].objectPosition }}
            />
            <CardInner label={cards[1].label} />
          </a>

          {/* Bottom-right */}
          <a
            href={cards[2].href}
            target="_blank"
            rel="noopener noreferrer"
            className="cg-card"
          >
            <Image
              src={cards[2].image}
              alt={cards[2].label}
              fill
              sizes="37vw"
              style={{ objectFit: 'cover', objectPosition: cards[2].objectPosition }}
            />
            <CardInner label={cards[2].label} />
          </a>

        </div>
      </div>
    </section>
  );
}
