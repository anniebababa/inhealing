'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomCTA from '@/components/BottomCTA';

/* ─── Course data ─────────────────────────────────────── */

const thetaCourses = [
  { title: '希塔療癒 DNA 基礎班', desc: '翻轉潛意識信念，開啟自我療癒的第一步', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
  { title: '希塔療癒 DNA 進階班', desc: '深入挖掘情緒根源，強化信念轉換的能量', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
  { title: '希塔療癒 DNA 深度挖掘班', desc: '從靈魂層次進行深度療癒與清理', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
  { title: '希塔療癒 植物精油彩虹冥想靜心', desc: '結合精油頻率與希塔療癒的獨特靜心體驗', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
];

const perfumerCourses = [
  { title: '法國 FCA 精油調香師基礎認證課', desc: '9小時帶你從芳療小白變斜槓高手，取得國際調香師認證', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
  { title: '法國 FCA 精油調香師進階認證課', desc: '深化調香技術，建立自己的品牌香氛產品線', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
];

const aromaCourses = [
  { title: '美國 NAHA Level 1 芳療師認證課', desc: '國際芳療認證，線上學習 + 一年內隨時進修', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
  { title: '美國 NAHA Level 2 芳療師認證課', desc: '進階芳療師專業知識，深入植物精油的能量應用', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
  { title: 'TTA 臺灣芳療師認證課', desc: '台灣在地認證課程，深度探索芳香療法的本質', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
];

const testimonials = [
  {
    name: '小芸',
    role: '行銷企劃 → 香氛斜槓創業者',
    text: '上完 Kate 老師的調香師認證課，我真的從零開始建立了自己的香氛品牌！老師的陪伴讓我相信自己是有能力的。',
    image: '/images/kyp/testimonial-1.png',
  },
  {
    name: '雅婷',
    role: '上班族 → 希塔療癒師',
    text: '希塔療癒的課程讓我真正理解了信念轉換的力量。Kate 老師耐心溫柔，每一次上課都有深刻的收穫。',
    image: '/images/kyp/testimonial-2.png',
  },
  {
    name: '妍君',
    role: '媽媽 → 芳療師',
    text: '原本只是想學精油護膚，沒想到拿到了國際芳療師認證，還開始接案服務客戶。感謝 Kate 老師的引導！',
    image: '/images/kyp/testimonial-3.png',
  },
];

const faqs = [
  {
    q: '我沒有任何芳療或療癒基礎，可以報名嗎？',
    a: '完全可以！我們的課程設計從零開始，不需要任何前修課程。Kate 老師會以清晰易懂的方式帶領你進入香氛療癒的世界。',
  },
  {
    q: '課程是線上還是實體進行？',
    a: '依課程類型而異。希塔療癒課程以 Zoom 線上直播為主，調香師認證課提供線上直播與台北實體課程選項，芳療師培訓則以線上學習為主，附贈實體教材。',
  },
  {
    q: '取得的認證是國際認可的嗎？',
    a: '是的。法國 FCA 調香師認證、美國 NAHA 芳療師認證均為國際認可證書，希塔療癒師認證亦為 ThetaHealing® 國際機構頒發。',
  },
  {
    q: '完成課程後可以開始接案嗎？',
    a: '可以！拿到認證後即具備對外服務的資格。Kate 老師也提供創業陪跑服務，協助你從認證到實際接案、建立品牌的完整過程。',
  },
  {
    q: '講師培訓課程適合哪些人報名？',
    a: '適合已完成初階認證、希望成為認證講師的學員。透過講師培訓，你將學習如何教授課程、帶領學生，以及建立自己的師資品牌。',
  },
  {
    q: '我想了解更多，可以先進行諮詢嗎？',
    a: '當然！你可以預約 Kate 老師的免費一對一諮詢，深入了解適合你的課程方向，諮詢完全免費、無任何壓力。',
  },
  {
    q: '可以分期付款嗎？',
    a: '部分課程提供分期付款方案。詳細的費用及付款方式請在預約諮詢時與老師確認，我們會為你安排最適合的方案。',
  },
];

/* ─── FAQ Accordion ───────────────────────────────────── */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {faqs.map((f, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left' as const,
              color: 'var(--text)',
            }}
          >
            <span style={{ fontSize: '16px', letterSpacing: '0.04em', lineHeight: '1.5', paddingRight: '24px' }}>
              {f.q}
            </span>
            <span style={{
              flexShrink: 0,
              fontSize: '20px',
              color: 'var(--gold)',
              transition: 'transform 0.25s',
              transform: open === i ? 'rotate(45deg)' : 'none',
            }}>
              +
            </span>
          </button>
          {open === i && (
            <div style={{
              paddingBottom: '20px',
              fontSize: '14px',
              fontWeight: '300',
              color: 'var(--text-muted)',
              lineHeight: '1.9',
              letterSpacing: '0.04em',
            }}>
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Course card ─────────────────────────────────────── */
function CourseCard({ course }: { course: { title: string; desc: string; href: string } }) {
  return (
    <a
      href={course.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '22px 0',
        borderBottom: '1px solid var(--border)',
        color: 'inherit',
        textDecoration: 'none',
        gap: '16px',
      }}
    >
      <div>
        <p style={{ fontSize: '16px', letterSpacing: '0.04em', marginBottom: '6px', color: 'var(--text)' }}>
          {course.title}
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.7', letterSpacing: '0.03em' }}>
          {course.desc}
        </p>
      </div>
      <span style={{ flexShrink: 0, fontSize: '18px', color: 'var(--gold)', marginTop: '2px' }}>→</span>
    </a>
  );
}

/* ─── Badge ───────────────────────────────────────────── */
function Badge({ label }: { label: string }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 14px',
      backgroundColor: 'var(--gold)',
      color: 'var(--white)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      borderRadius: '2px',
      marginBottom: '20px',
    }}>
      {label}
    </span>
  );
}

/* ─── Page ────────────────────────────────────────────── */
export default function CoursePage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Course Hero ──────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--cream)', padding: '72px 0 80px' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }} className="ch-grid">
              <div>
                <h1 style={{
                  fontSize: 'clamp(24px, 3.5vw, 42px)',
                  fontWeight: '400',
                  letterSpacing: '0.06em',
                  lineHeight: '1.5',
                  marginBottom: '24px',
                  color: 'var(--text)',
                }}>
                  從自我覺察到專業斜槓，
                  <br />用香氛與療癒做你的下一段旅程
                </h1>
                <p style={{
                  fontSize: '15px',
                  fontWeight: '300',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  lineHeight: '1.9',
                  marginBottom: '36px',
                }}>
                  讓你從零開始到國際認證，在每一個認識自己、療癒自己的過程中，建立自己的專業，用香氛和療癒開展你的生命旅途。
                </p>
                <a
                  href="https://calendly.com/tingwenlin/1-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '13px 36px',
                    backgroundColor: 'var(--gold)',
                    color: 'var(--white)',
                    fontSize: '14px',
                    letterSpacing: '0.1em',
                    borderRadius: '2px',
                  }}
                >
                  預約免費諮詢
                </a>
              </div>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: '2px' }}>
                <Image
                  src="/images/kyp/portrait-2.png"
                  alt="課程介紹"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Guide subtitle ───────────────────────────── */}
        <section style={{ backgroundColor: 'var(--beige)', padding: '56px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold)', display: 'inline-block' }} />
              <p style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', fontWeight: '400', letterSpacing: '0.08em', color: 'var(--text)' }}>
                依照你的學習目標，選擇最適合的開始
              </p>
            </div>
          </div>
        </section>

        {/* ── Theta Healing ─────────────────────────── */}
        <section id="healing-course" style={{ backgroundColor: 'var(--cream)', padding: '80px 0 96px' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }} className="cat-grid">
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '2px' }}>
                <Image src="/images/kyp/course-theta.png" alt="希塔療癒課程" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <Badge label="課程" />
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '400', letterSpacing: '0.06em', marginBottom: '20px' }}>
                  希塔療癒課程
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                  {['學員互助，結合精油調香深化療癒體驗', '翻轉信念、改變人生的關鍵修練'].map(b => (
                    <div key={b} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', marginTop: '4px', fontSize: '10px' }}>◆</span>
                      <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', letterSpacing: '0.03em' }}>{b}</span>
                    </div>
                  ))}
                </div>
                <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--gold)', letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
                  ＋ 了解更多
                </a>
                {thetaCourses.map(c => <CourseCard key={c.title} course={c} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ── Perfumer ──────────────────────────────── */}
        <section id="perfumer-course" style={{ backgroundColor: 'var(--beige)', padding: '80px 0 96px' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }} className="cat-grid">
              <div>
                <Badge label="認證" />
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '400', letterSpacing: '0.06em', marginBottom: '20px' }}>
                  調香師認證
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                  {['法式調香美學，打造香氛斜槓能量', '深度植物精油調香技術，建立你的品牌'].map(b => (
                    <div key={b} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', marginTop: '4px', fontSize: '10px' }}>◆</span>
                      <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', letterSpacing: '0.03em' }}>{b}</span>
                    </div>
                  ))}
                </div>
                <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--gold)', letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
                  ＋ 了解更多
                </a>
                {perfumerCourses.map(c => <CourseCard key={c.title} course={c} />)}
              </div>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '2px' }}>
                <Image src="/images/kyp/course-perfumer.png" alt="調香師認證" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Aromatherapy ───────────────────────────── */}
        <section id="aromatherapy-course" style={{ backgroundColor: 'var(--cream)', padding: '80px 0 96px' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }} className="cat-grid">
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '2px' }}>
                <Image src="/images/kyp/course-aroma.png" alt="芳療師培訓" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <Badge label="培訓" />
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '400', letterSpacing: '0.06em', marginBottom: '20px' }}>
                  芳療師培訓
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                  {['國際芳療認證，深入了解植物精油的能量與應用', '線上學習，一年內隨時進修取得認證'].map(b => (
                    <div key={b} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', marginTop: '4px', fontSize: '10px' }}>◆</span>
                      <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', letterSpacing: '0.03em' }}>{b}</span>
                    </div>
                  ))}
                </div>
                <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--gold)', letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
                  ＋ 了解更多
                </a>
                {aromaCourses.map(c => <CourseCard key={c.title} course={c} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ── Latest courses (activities section reuse) ── */}
        <section id="course" style={{ backgroundColor: 'var(--beige)', padding: '80px 0 96px' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '400', letterSpacing: '0.08em', textAlign: 'center', marginBottom: '52px' }}>
              最新課程
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="lc-grid">
              {[
                { title: '希塔療癒 DNA 基礎班', date: '2025.08', image: '/images/kyp/course-detail-1.png', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
                { title: '法國 FCA 精油調香師認證課', date: '2025.08', image: '/images/kyp/course-perfumer.png', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
                { title: '美國 NAHA Level 1 芳療師認證課', date: '2025.09', image: '/images/kyp/course-aroma.png', href: 'https://forms.gle/Sg3HV5Ec5J8eiQdV8' },
              ].map(c => (
                <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '2px', marginBottom: '16px' }}>
                    <Image src={c.image} alt={c.title} fill style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} className="lc-img" />
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '8px' }}>{c.date}</p>
                  <h3 style={{ fontSize: '16px', fontWeight: '400', letterSpacing: '0.04em', color: 'var(--text)', lineHeight: '1.5' }}>{c.title}</h3>
                </a>
              ))}
            </div>
          </div>
          <style>{`.lc-img:hover{transform:scale(1.04)}`}</style>
        </section>

        {/* ── Testimonials ───────────────────────────── */}
        <section style={{ backgroundColor: 'var(--cream)', padding: '80px 0 96px' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '400', letterSpacing: '0.08em', textAlign: 'center', marginBottom: '52px' }}>
              學員心得
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="tm-grid">
              {testimonials.map(t => (
                <div key={t.name} style={{
                  backgroundColor: '#ECE7DA',
                  padding: '32px 28px',
                  borderRadius: '2px',
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '300',
                    color: 'var(--text-muted)',
                    lineHeight: '1.9',
                    letterSpacing: '0.04em',
                    marginBottom: '28px',
                  }}>
                    「{t.text}」
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                      <Image src={t.image} alt={t.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: '500', letterSpacing: '0.04em', color: 'var(--text)' }}>{t.name}</p>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.04em', marginTop: '2px' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────── */}
        <section id="faq" style={{ backgroundColor: 'var(--beige)', padding: '80px 0 96px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: '400', letterSpacing: '0.08em', marginBottom: '48px' }}>
              常見問題<br />
              <span style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: '1.1em', color: 'var(--gold)' }}>FAQ</span>
            </h2>
            <FaqAccordion />
          </div>
        </section>

        <BottomCTA />
      </main>
      <Footer />

      <style>{`
        @media(max-width:640px) {
          .cat-grid { grid-template-columns: 1fr !important; }
          .cat-grid > div:first-child { order: -1; }
          .ch-grid { grid-template-columns: 1fr !important; }
          .ch-grid > div:last-child { aspect-ratio: 3/2 !important; }
          .lc-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .tm-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </>
  );
}
