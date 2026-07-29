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
    image: '/images/testimonial-1.png',
  },
  {
    name: '雅婷',
    role: '上班族 → 希塔療癒師',
    text: '希塔療癒的課程讓我真正理解了信念轉換的力量。Kate 老師耐心溫柔，每一次上課都有深刻的收穫。',
    image: '/images/testimonial-2.png',
  },
  {
    name: '妍君',
    role: '媽媽 → 芳療師',
    text: '原本只是想學精油護膚，沒想到拿到了國際芳療師認證，還開始接案服務客戶。感謝 Kate 老師的引導！',
    image: '/images/testimonial-3.png',
  },
];

const faqs = [
  {
    q: '我沒有相關背景或經驗，可以報名課程嗎？',
    a: '當然可以！我們所有課程都從零基礎設計，無需任何芳療或身心靈背景。只要你對自我療癒或精油香氛感興趣、喜歡學習新的課程從中找到成就感與方向，就非常適合參加。',
  },
  {
    q: 'F.C.A 精油調香師課程與 NAHA 芳療師課程有什麼不同？',
    a: 'F.C.A 調香師課程著重於手作與香氛設計，適合初學者與手作愛好者 NAHA L1 課程則為美國專業芳療認證課程，涵蓋精油藥理、人體系統與芳療諮詢，適合想取得國際證照者。\n\n💡 NAHA L1 課程需先完成 F.C.A 入門課程。\n這兩個課程老師會隨著課程的學習提供適度的斜槓 / 創業指引。',
  },
  {
    q: '希塔療癒課程學完後可以從事療癒工作？',
    a: '可以。完成課程後將獲得官方希塔療癒師認證電子證書，具備執行一對一療癒的資格。我們也提供創業輔導與學員媒合平台，協助你開展斜槓創業。',
  },
  {
    q: '課程是線上還是實體？上課時間怎麼安排？',
    a: '我們課程提供線上 Zoom 直播或錄播課程，部分課程提供實體班（以台北市為主）。報名後一年內皆可彈性安排上課時段，也可免費複訓或複訓支付材料費方案，讓學員可以隨時回來進修加強。',
  },
  {
    q: '課程提供哪些教材或工具？',
    a: '我們會提供課程教材與輔助教材包，如調香課程會提供精油、基底油、滾珠瓶、講義等，讓線上學員線上同步學習不中斷。',
  },
  {
    q: '完成課程可以拿到什麼證書？',
    a: '希塔療癒課：官方希塔療癒師電子證書\nF.C.A 課程：F.C.A 調香師入門級證書電子證書（通過檢定後申請）\nNAHA 課程：NAHA 芳療師 L1 進修證書，可進一步申請官方會員證書',
  },
  {
    q: '我適合選哪一門課？可以一次報多門嗎？',
    a: '若你想自我療癒並深入潛意識達到內在穩定，建議先選【希塔療癒課程】；若你對精油與調香有興趣，可從【F.C.A 入門課】開始，之後進階【NAHA 專業課程】。\n\n✨ 我們提供多門合報優惠，還有社群支持與斜槓創業輔導。',
  },
];

/* ─── FAQ Accordion ───────────────────────────────────── */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {faqs.map((f, i) => (
        <div key={i} style={{ borderBottom: '1px solid rgba(56,41,15,0.15)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '22px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left' as const,
            }}
          >
            <span style={{
              fontSize: '20px',
              letterSpacing: '0.04em',
              lineHeight: '1.6',
              paddingRight: '24px',
              color: open === i ? '#C4A040' : '#38290F',
              fontFamily: 'var(--font-noto-serif-tc), serif',
              fontWeight: '400',
              transition: 'color 0.2s',
            }}>
              {f.q}
            </span>
            <span style={{
              flexShrink: 0,
              fontSize: '26px',
              color: 'rgba(56,41,15,0.5)',
              lineHeight: 1,
            }}>
              {open === i ? '⊖' : '⊕'}
            </span>
          </button>
          {open === i && (
            <div style={{
              paddingBottom: '22px',
              fontSize: '18px',
              fontWeight: '400',
              color: '#38290F',
              lineHeight: '1.9',
              letterSpacing: '0.03em',
              fontFamily: 'var(--font-noto-sans-tc), sans-serif',
              whiteSpace: 'pre-line',
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
        <section style={{ backgroundColor: '#ECE7DA', padding: '80px 0 88px' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '66% 34%',
              gap: '56px',
              alignItems: 'center',
            }} className="ch-grid">
              <div>
                <h1 style={{
                  fontSize: 'clamp(21px, 2.56vw, 32px)',
                  fontWeight: '500',
                  letterSpacing: '0.04em',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  color: '#38290F',
                  fontFamily: 'var(--font-noto-serif-tc), serif',
                }}>
                  從自我覺察到專業斜槓，<br />用香氛與療癒開啟你的下一段旅程
                </h1>
                <p style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'rgba(56,41,15,0.75)',
                  letterSpacing: '0.04em',
                  lineHeight: '1.9',
                  marginBottom: '36px',
                  fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                }}>
                  當你準備好迎接改變，無論是轉職、副業、覺察內在，還是療<br />癒他人，植覺療癒都會是你溫柔的起點。
                </p>
                <a
                  href="#healing-course"
                  style={{
                    display: 'inline-block',
                    padding: '11px 32px',
                    border: '1px solid #38290F',
                    backgroundColor: 'transparent',
                    color: '#38290F',
                    fontSize: '17px',
                    letterSpacing: '0.08em',
                    fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                    textDecoration: 'none',
                  }}
                >
                  探索課程
                </a>
              </div>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', transform: 'translateX(-15%)' }}>
                <Image
                  src="/images/course-theta.png"
                  alt="課程介紹"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Course Selection Grid ─────────────────────── */}
        <section id="course-selection" style={{ backgroundColor: '#ECE7DA' }}>
          {/* Title */}
          <div style={{ textAlign: 'center', padding: '52px 20px 40px' }}>
            <h2 style={{
              fontSize: 'clamp(21px, 2.56vw, 32px)',
              fontWeight: '400',
              letterSpacing: '0.1em',
              color: '#38290F',
              fontFamily: 'var(--font-noto-serif-tc), serif',
            }}>
              依照你的學習目標，選擇最適合的開始
            </h2>
          </div>

          {/* 3-column image cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }} className="csg-grid">
            {[
              {
                image: '/images/activity-1.png',
                badge: '課程分級',
                title: '希塔療癒課程',
                bullets: ['適合對能量療癒、信念轉化有興趣的你', '不需相關背景，帶你一步步深入了解自我潛意識'],
                href: '#healing-course',
              },
              {
                image: '/images/course-perfumer.png',
                badge: '新手推薦',
                title: '調香師認證',
                bullets: ['適合想要打造專屬香氣的你', '法國 F.C.A 調香師入門級認證', '沈浸式學習五感饗宴'],
                href: '#perfumer-course',
              },
              {
                image: '/images/course-aroma.png',
                badge: '變現推薦',
                title: '芳療師培訓',
                bullets: ['適合想走向專業芳療之路的你', '美國 NAHA Level 1 芳療師認證', '課程含精油知識＋實務應用'],
                href: '#aromatherapy-course',
              },
            ].map(card => (
              <a key={card.title} href={card.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} className="csg-card">
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <Image src={card.image} alt={card.title} fill style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.4s ease' }} className="csg-img" />
                  {/* Gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,6,2,0.82) 0%, rgba(10,6,2,0.3) 50%, transparent 70%)' }} />
                  {/* All text overlaid */}
                  <div style={{
                    position: 'absolute',
                    top: 'calc(45% + 140px)',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: '0 24px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'flex-start',
                  }}>
                    {/* Badge */}
                    <span style={{
                      display: 'inline-block',
                      padding: '5px 20px',
                      backgroundColor: '#C4A040',
                      color: '#ffffff',
                      fontSize: '14px',
                      borderRadius: '999px',
                      letterSpacing: '0.08em',
                      fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                      marginBottom: '10px',
                    }}>{card.badge}</span>
                    {/* Title */}
                    <h3 style={{
                      fontSize: 'clamp(20px, 2vw, 26px)',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '12px',
                      letterSpacing: '0.04em',
                      fontFamily: 'var(--font-noto-serif-tc), serif',
                      textAlign: 'center',
                    }}>{card.title}</h3>
                    {/* Bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px', width: '100%' }}>
                      {card.bullets.map(b => (
                        <div key={b} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>・</span>
                          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', letterSpacing: '0.02em', fontFamily: 'var(--font-noto-sans-tc), sans-serif' }}>{b}</span>
                        </div>
                      ))}
                    </div>
                    {/* Circle button */}
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                      <span style={{
                        width: '30px', height: '30px',
                        border: '1px solid rgba(255,255,255,0.7)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: '15px',
                      }}>↓</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Theta Healing ─────────────────────────── */}
        <section id="healing-course" style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '791px 1fr',
          minHeight: '1446px',
          background: '#E9E3D5',
          width: '100%',
          fontFamily: '"Noto Serif TC", "Songti TC", "PMingLiU", serif',
        }} className="theta-section">

          {/* ── Left column ── */}
          <div>
            {/* Main image: 662×450, margin-left:29px, margin-top:57px */}
            <div style={{ marginLeft: '129px', marginTop: '57px', width: '662px', height: '450px', overflow: 'hidden', flexShrink: 0 }}>
              <Image
                src="/images/testimonial-1.png"
                alt="希塔療癒課程"
                width={662}
                height={450}
                style={{ width: '662px', height: '450px', objectFit: 'cover', objectPosition: 'center 40%', display: 'block', borderRadius: 0 }}
              />
            </div>

            {/* Course info text */}
            <div style={{ marginLeft: '129px', marginTop: '29px', width: '620px' }}>
              {/* Title + badge */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{
                  fontSize: '34px', fontWeight: 700, lineHeight: 1.2,
                  letterSpacing: '1px', color: '#38290F', margin: 0,
                  fontFamily: '"Noto Serif TC", "Songti TC", "PMingLiU", serif',
                }}>希塔療癒課程</h2>
                <span style={{
                  display: 'inline-flex', alignItems: 'center',
                  height: '30px', padding: '0 11px', marginLeft: '12px',
                  borderRadius: '999px', background: '#c89a22',
                  color: '#fff4cf', fontSize: '13px', fontWeight: 600,
                  whiteSpace: 'nowrap', flexShrink: 0,
                  fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif',
                  letterSpacing: '0.08em',
                }}>課程分級</span>
              </div>

              {/* Subtitle with water drop */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                <svg width="11" height="16" viewBox="0 0 11 16" style={{ flexShrink: 0, marginRight: '8px' }}>
                  <path d="M5.5 0 C5.5 0 0 7 0 10.5 A5.5 5.5 0 0 0 11 10.5 C11 7 5.5 0 5.5 0Z" fill="#c89a00"/>
                </svg>
                <span style={{ fontSize: '19px', fontWeight: 500, lineHeight: 1.6, color: '#51463c', fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif', letterSpacing: '0.1em' }}>
                  適合對能量療癒、信念轉化有興趣的你
                </span>
              </div>

              {/* 了解更多 link */}
              <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '25px', fontSize: '18px', fontWeight: 700, color: '#a07a00', textDecoration: 'none' }}>
                了解更多
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="9" cy="9" r="8" stroke="#a07a00" strokeWidth="1.5"/>
                  <path d="M6 9h6M10.5 6.5l2.5 2.5-2.5 2.5" stroke="#a07a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right column: timeline + four groups ── */}
          <div style={{ position: 'relative' }}>
            {/* Vertical timeline line: left:0 of right col = x:691 of section */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: '#a89d8d' }} />

            {/* Four course groups, absolutely positioned */}
            {([
              {
                groupTop: 73,
                nodeTop: 12,
                nodeFill: 25,
                title: '基礎 DNA',
                items: ['希塔腦波科學','宇宙源頭','潛意識信念系統','淨化腦輪','清除負能量','召喚貴人與靈魂伴侶','改善祖先遺傳基因','前世今生','天使與指導靈','解讀未來','修復DNA','啟動青春力基因'],
              },
              {
                groupTop: 469,
                nodeTop: 12,
                nodeFill: 50,
                title: '進階 DNA',
                items: ['七界療癒','感覺創造','釋放憎恨與負面信念','解除誓言／詛咒／誓約','送愛給子宮的胎兒','植物與水晶療癒','祖先和動物療癒','高我療癒','心之歌','淨化空間','憶起未來'],
              },
              {
                groupTop: 842,
                nodeTop: 12,
                nodeFill: 75,
                title: '深度挖掘',
                items: ['釋放限制性信念','釋放細胞的恐懼','10種挖掘信念的技巧','顯化夢想'],
              },
              {
                groupTop: 1050,
                nodeTop: 12,
                nodeFill: 100,
                title: '植物主與你',
                items: ['辨識小我、高我及植物主','時刻連結無條件的愛','快速信念挖掘','釋放恐懼'],
              },
            ]).map((group) => (
              <div key={group.title} style={{ position: 'absolute', top: `${group.groupTop}px`, left: 0, right: 0 }}>
                {/* Timeline node */}
                <div style={{
                  position: 'absolute',
                  left: '-11px',
                  top: `${group.nodeTop}px`,
                  width: '22px', height: '22px',
                  borderRadius: '50%',
                  background: group.nodeFill === 100
                    ? '#d6aa00'
                    : `conic-gradient(#d6aa00 0% ${group.nodeFill}%, #f4f0dc ${group.nodeFill}% 100%)`,
                  border: '3px solid #d6aa00',
                  boxSizing: 'border-box',
                }} />

                {/* Content */}
                <div style={{ marginLeft: '-11px', width: '500px' }}>
                  <h3 style={{
                    fontSize: '23px', fontWeight: 700, lineHeight: 1.3,
                    color: '#c09d17', margin: '5px 0 14px 43px',
                    fontFamily: '"Noto Serif TC", "Songti TC", "PMingLiU", serif',
                  }}>{group.title}</h3>
                  <ul style={{
                    margin: '0 0 0 48px', padding: '0 0 0 15px',
                    fontSize: '15px', fontWeight: 500, lineHeight: 1.55,
                    color: '#4d4338', listStyleType: 'square',
                    fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif',
                    letterSpacing: '0.08em',
                  }}>
                    {group.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      height: '33px', padding: '0 14px', marginTop: '13px', marginLeft: '40px',
                      border: '1px solid #4b402b', background: 'transparent',
                      color: '#6d5b3a', fontSize: '14px', fontWeight: 500,
                      textDecoration: 'none', borderRadius: 0,
                      fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif',
                      letterSpacing: '0.08em',
                    }}>立即預約</a>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 900px) {
              .theta-section {
                grid-template-columns: 1fr !important;
                min-height: auto !important;
              }
              .theta-section > div:first-child > div:first-child {
                width: 100% !important;
                height: 260px !important;
                margin-left: 0 !important;
              }
              .theta-section > div:last-child {
                position: static !important;
                padding: 40px 20px 60px;
              }
              .theta-section > div:last-child > div[style*="position: absolute"] {
                position: static !important;
                margin-bottom: 40px;
              }
            }
          `}</style>
        </section>

        {/* ── Perfumer ──────────────────────────────── */}
        <section id="perfumer-course" style={{ backgroundColor: '#E4DBC7', padding: '80px 0 96px' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '55% 45%',
              gap: '60px',
              alignItems: 'start',
            }} className="cat-grid">

              {/* Left: title + two sub-courses */}
              <div>
                {/* Section header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <h2 style={{
                    fontSize: '34px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#38290F',
                    fontFamily: 'var(--font-noto-serif-tc), serif',
                    margin: 0,
                  }}>調香師認證</h2>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    height: '30px', padding: '0 11px', marginLeft: '12px',
                    borderRadius: '999px', background: '#c89a22',
                    color: '#fff4cf', fontSize: '13px', fontWeight: 600,
                    whiteSpace: 'nowrap', flexShrink: 0,
                    fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif',
                    letterSpacing: '0.08em',
                  }}>新手推薦</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '48px' }}>
                  <svg width="11" height="16" viewBox="0 0 11 16" style={{ flexShrink: 0 }}>
                    <path d="M5.5 0 C5.5 0 0 7 0 10.5 A5.5 5.5 0 0 0 11 10.5 C11 7 5.5 0 5.5 0Z" fill="#c89a00"/>
                  </svg>
                  <span style={{ fontSize: '19px', fontWeight: 500, lineHeight: 1.6, color: '#51463c', fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif', letterSpacing: '0.1em' }}>
                    適合想要打造專屬香氣的你
                  </span>
                </div>

                {/* Sub-course 1 */}
                <div style={{ marginBottom: '48px' }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#38290F',
                    letterSpacing: '0.04em',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-noto-serif-tc), serif',
                  }}>法國 F.C.A. 精油調香師入門課</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                    {[
                      '規劃並製作 7 種以上手作精油商品\n（萬用膏、空間噴霧、按摩滾珠瓶、保養油等）',
                      '設計專屬高品質天然香氛配方',
                      '辨識 20 種精油香氛特徵與正面效用',
                      '創造兼具美感與功能的香氛產品',
                    ].map(item => (
                      <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#38290F', fontSize: '16px', flexShrink: 0 }}>・</span>
                        <span style={{ fontSize: '16px', color: '#38290F', lineHeight: '1.8', letterSpacing: '0.02em', fontFamily: 'var(--font-noto-sans-tc), sans-serif', whiteSpace: 'pre-line' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '25px', gap: '12px' }}>
                    <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '18px', fontWeight: 700, color: '#a07a00', textDecoration: 'none' }}>
                      了解更多
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                        <circle cx="9" cy="9" r="8" stroke="#a07a00" strokeWidth="1.5"/>
                        <path d="M6 9h6M10.5 6.5l2.5 2.5-2.5 2.5" stroke="#a07a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '8px 24px',
                        border: '1px solid #38290F',
                        backgroundColor: 'transparent',
                        color: '#38290F',
                        fontSize: '16px',
                        letterSpacing: '0.08em',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                      }}>立即預約</a>
                  </div>
                </div>

                {/* Sub-course 2 */}
                <div>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#38290F',
                    letterSpacing: '0.04em',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-noto-serif-tc), serif',
                  }}>韓國 KDCA 二日班調香師</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                    {[
                      '香水的歷史與背景',
                      '香氣調性搭配',
                      '香水原料與協同',
                      '講香流程',
                      '香氣原料庫建立',
                      '科學調香系統',
                      '芳香療法應用',
                      '實際調香演練',
                      '體驗課程經驗分享',
                    ].map(item => (
                      <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#38290F', fontSize: '16px', flexShrink: 0 }}>・</span>
                        <span style={{ fontSize: '16px', color: '#38290F', lineHeight: '1.8', letterSpacing: '0.02em', fontFamily: 'var(--font-noto-sans-tc), sans-serif', whiteSpace: 'pre-line' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '25px', gap: '12px' }}>
                    <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '18px', fontWeight: 700, color: '#a07a00', textDecoration: 'none' }}>
                      了解更多
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                        <circle cx="9" cy="9" r="8" stroke="#a07a00" strokeWidth="1.5"/>
                        <path d="M6 9h6M10.5 6.5l2.5 2.5-2.5 2.5" stroke="#a07a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '8px 24px',
                        border: '1px solid #38290F',
                        backgroundColor: 'transparent',
                        color: '#38290F',
                        fontSize: '16px',
                        letterSpacing: '0.08em',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                      }}>立即預約</a>
                  </div>
                </div>
              </div>

              {/* Right: two stacked images */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignSelf: 'end' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', width: '120%' }}>
                  <Image src="/images/testimonial-2.png" alt="調香師課程" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', width: '120%' }}>
                  <Image src="/images/testimonial-3.png" alt="調香師課程2" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Aromatherapy ───────────────────────────── */}
        <section id="aromatherapy-course" style={{ backgroundColor: '#ECE7DA', padding: '80px 0 96px' }}>
          <div className="container">
            {/* Section header */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <h2 style={{
                  fontSize: '34px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: '#38290F',
                  fontFamily: 'var(--font-noto-serif-tc), serif',
                  margin: 0,
                }}>芳療師培訓</h2>
                <span style={{
                  display: 'inline-flex', alignItems: 'center',
                  height: '30px', padding: '0 11px', marginLeft: '12px',
                  borderRadius: '999px', background: '#c89a22',
                  color: '#fff4cf', fontSize: '13px', fontWeight: 600,
                  whiteSpace: 'nowrap', flexShrink: 0,
                  fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif',
                  letterSpacing: '0.08em',
                }}>變現推薦</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="11" height="16" viewBox="0 0 11 16" style={{ flexShrink: 0 }}>
                  <path d="M5.5 0 C5.5 0 0 7 0 10.5 A5.5 5.5 0 0 0 11 10.5 C11 7 5.5 0 5.5 0Z" fill="#c89a00"/>
                </svg>
                <span style={{ fontSize: '19px', fontWeight: 500, lineHeight: 1.6, color: '#51463c', fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif', letterSpacing: '0.1em' }}>
                  適合想走向專業芳療之路的你
                </span>
              </div>
            </div>

            {/* 3-column cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="aroma-grid">
              {[
                {
                  title: '美國 NAHA Level 1 芳療師認證課',
                  image: '/images/hero-banner.webp',
                  prereq: '*學習本課程前需完成法國 F.C.A調香師入門級認證課',
                  items: [
                    '了解 20 種天然植物精油的能量、藥理、化學、生物本質',
                    '專業調合與運用精油，結合人體系統芳療應用',
                    '芳療諮詢流程與專業溝通技巧',
                    '個案分析與客製化芳療方案設計',
                  ],
                },
                {
                  title: '美國 NAHA Level 2 芳療師認證課',
                  image: '/images/course-detail-2.png',
                  prereq: '*學習本課程前需為已取得 NAHA L1 國際證照者',
                  items: [
                    '結合中醫與芳療觀點，理解全人療癒與體質平衡',
                    '學習精油、植物油、純露倫論與安全應用',
                    '實作經絡、九型人格、情緒與身體療癒',
                    '建立專業諮詢技巧與個人品牌',
                  ],
                },
                {
                  title: '英國 ITEC 芳療雙證書認證課',
                  image: '/images/course-detail-3.png',
                  prereq: '*學習本課程前需為已取得 NAHA L2 國際證照者',
                  items: [
                    '瑞典式全身按摩手技訓練',
                    '生理學指導',
                  ],
                },
              ].map(card => (
                <div key={card.title}>
                  {/* Image with title overlay */}
                  <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', marginBottom: '16px' }}>
                    <Image src={card.image} alt={card.title} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,12,4,0.45)' }} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px',
                    }}>
                      <p style={{
                        fontSize: '22px',
                        fontWeight: '500',
                        color: '#E9E3D5',
                        lineHeight: '1.7',
                        letterSpacing: '0.04em',
                        fontFamily: 'var(--font-noto-serif-tc), serif',
                        textAlign: 'center',
                        margin: 0,
                      }}>{card.title}</p>
                    </div>
                  </div>
                  {/* Content below image */}
                  <p style={{
                    fontSize: '13px',
                    color: '#C4A040',
                    lineHeight: '1.7',
                    letterSpacing: '0.02em',
                    marginBottom: '14px',
                    fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                    whiteSpace: 'pre-line',
                  }}>{card.prereq}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                    {card.items.map(item => (
                      <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#38290F', fontSize: '16px', flexShrink: 0 }}>・</span>
                        <span style={{ fontSize: '16px', color: '#38290F', lineHeight: '1.8', letterSpacing: '0.02em', fontFamily: 'var(--font-noto-sans-tc), sans-serif', whiteSpace: 'pre-line' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '25px', marginBottom: '14px', fontSize: '18px', fontWeight: 700, color: '#a07a00', textDecoration: 'none' }}>
                      了解更多
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                        <circle cx="9" cy="9" r="8" stroke="#a07a00" strokeWidth="1.5"/>
                        <path d="M6 9h6M10.5 6.5l2.5 2.5-2.5 2.5" stroke="#a07a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                  <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '10px 0',
                      border: '1px solid #38290F',
                      backgroundColor: 'transparent',
                      color: '#38290F',
                      fontSize: '16px',
                      letterSpacing: '0.08em',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                    }}>立即預約</a>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media(max-width:768px) {
              .aroma-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── Latest courses ─────────────────────────── */}
        <section id="course" style={{ backgroundColor: '#E4DBC7', padding: '80px 0 96px' }}>
          <div className="container">
            <h2 style={{
              fontSize: '34px',
              fontWeight: 700,
              letterSpacing: '1px',
              textAlign: 'center',
              marginBottom: '48px',
              color: '#38290F',
              fontFamily: 'var(--font-noto-serif-tc), serif',
            }}>最新課程</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '54% 46%', gap: '28px', alignItems: 'start' }} className="lc-main">
              {/* Left: large card */}
              <a href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', marginBottom: '18px', width: '95%' }}>
                  <Image src="/images/activity-1.png" alt="希塔療癒師認證課" fill
                    style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} className="lc-img" />
                </div>
                <p style={{
                  fontSize: '18px', fontWeight: '400', color: '#38290F',
                  lineHeight: '1.8', letterSpacing: '0.03em', marginBottom: '10px',
                  fontFamily: 'var(--font-noto-sans-tc), sans-serif', whiteSpace: 'pre-line',
                }}>
                  【翻轉信念・改變人生】希塔療癒師認證課入門〈基礎 DNA〉{'\n'}｜線上直播＋國際證書，打開自癒力新人生
                </p>
                <p style={{ fontSize: '17px', color: '#C4A040', letterSpacing: '0.06em', fontFamily: 'var(--font-noto-sans-tc), sans-serif' }}>療癒師</p>
              </a>

              {/* Right: two stacked small cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginLeft: '-30px' }}>
                {[
                  {
                    image: '/images/activity-2.png',
                    title: '【你也能擁有法式專屬香氣】法國 F.C.A. 精油調香師入門課｜9小時帶你從芳療小白變斜槓高手',
                    tag: '調香師',
                  },
                  {
                    image: '/images/activity-3.png',
                    title: '【拿下國際芳療師證書】美國 NAHA Level 1 芳療師認證課｜線上學習＋國際證書',
                    tag: '芳療師',
                  },
                ].map(item => (
                  <a key={item.tag} href="https://forms.gle/Sg3HV5Ec5J8eiQdV8" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'grid', gridTemplateColumns: '48% 52%', gap: '14px', color: 'inherit', textDecoration: 'none', alignItems: 'start' }}>
                    <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                      <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                    <div>
                      <p style={{
                        fontSize: '16px', fontWeight: '400', color: '#38290F',
                        lineHeight: '1.8', letterSpacing: '0.02em', marginBottom: '8px',
                        fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                      }}>{item.title}</p>
                      <p style={{ fontSize: '16px', color: '#C4A040', letterSpacing: '0.06em' }}>{item.tag}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            .lc-img:hover { transform: scale(1.04); }
            @media(max-width:640px) { .lc-main { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Testimonials ───────────────────────────── */}
        <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#D5C9B8', padding: '88px 0 108px' }}>
          {/* Background texture image */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src="/images/course-detail-4.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: '34px',
              fontWeight: 700,
              letterSpacing: '1px',
              textAlign: 'center',
              marginBottom: '64px',
              color: '#38290F',
              fontFamily: 'var(--font-noto-serif-tc), serif',
            }}>學員心得</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }} className="tm-grid">
              {[
                {
                  label: '療癒師認證課',
                  text: '上完希塔基礎課，我才真正明白，原來過去一直卡住我的，不是現實，而是內在的信念。這堂課就像打開了一盞燈，讓我看見了自己的思維模式，並學會用能量轉化去清理它們。',
                  name: '王小姐',
                },
                {
                  label: '調香師認證課',
                  text: '一開始我只是單純喜歡香氣，從未想過自己也能調出專屬的香氣。Kate 老師的課程讓我不只學會了專業調香技巧，更打開了對氣味的全新認知。',
                  name: '張先生',
                },
                {
                  label: '芳療師認證課',
                  text: '報名前我一直以為芳療只是「好聞」的輔助，但在課程裡我才真正認識精油的能量與科學基礎。老師用紮實的國際芳療師培訓，帶領我們從基礎到實務，一步步累積專業。',
                  name: 'Yuki',
                },
              ].map(t => (
                <div key={t.name}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="#c4a040"><path d="M4.5 0 C4.5 0 0 6 0 9 A4.5 4.5 0 0 0 9 9 C9 6 4.5 0 4.5 0Z"/></svg>
                    <span style={{ fontSize: '19px', color: '#38290F', letterSpacing: '0.08em', fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif', fontWeight: 500 }}>{t.label}</span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(56,41,15,0.25)', marginBottom: '22px' }} />
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    color: '#38290F',
                    lineHeight: '2',
                    letterSpacing: '0.04em',
                    marginBottom: '24px',
                    fontFamily: 'var(--font-noto-sans-tc), sans-serif',
                  }}>{t.text}</p>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#38290F',
                    letterSpacing: '0.06em',
                    fontFamily: '"Noto Sans TC", "Source Han Sans TC", sans-serif',
                  }}>{t.name}</p>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .tm-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
        </section>

        {/* ── FAQ ────────────────────────────────────── */}
        <section id="faq" style={{ backgroundColor: '#ECE7DA', padding: '80px 0 96px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '28% 72%', gap: '60px', alignItems: 'start' }} className="faq-grid">
              {/* Left: heading */}
              <div style={{ paddingTop: '8px' }}>
                <h2 style={{
                  fontSize: 'clamp(26px, 3vw, 38px)',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  lineHeight: '1.4',
                  color: '#38290F',
                  fontFamily: 'var(--font-noto-serif-tc), serif',
                  marginBottom: '8px',
                }}>常見問題</h2>
                <p style={{
                  fontSize: 'clamp(26px, 3vw, 38px)',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  color: '#38290F',
                  fontFamily: 'var(--font-cormorant), serif',
                  letterSpacing: '0.04em',
                }}>FAQ</p>
              </div>
              {/* Right: accordion */}
              <div>
                <FaqAccordion />
              </div>
            </div>
          </div>
          <style>{`
            @media(max-width:768px) {
              .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
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
          .csg-grid { grid-template-columns: 1fr !important; }
        }
        .csg-card:hover .csg-img { transform: scale(1.05); }
      `}</style>
    </>
  );
}
