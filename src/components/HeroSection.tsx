/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <section className="hero-section">

      {/* ── 3-column image grid ── */}
      <div className="hero-grid">
        {/* Left: single tall image */}
        <div className="hero-col">
          <img src="/images/activity-1.png" alt="" className="hero-img" style={{ objectPosition: 'center center' }} />
        </div>

        {/* Middle: two stacked images */}
        <div className="hero-col hero-col-split">
          <img src="/images/portrait-2.png" alt="" className="hero-img" />
          <img src="/images/activity-3.png" alt="" className="hero-img" />
        </div>

        {/* Right: single tall image */}
        <div className="hero-col">
          <img src="/images/portrait-3.png" alt="" className="hero-img" style={{ objectPosition: 'center center' }} />
        </div>
      </div>

      {/* ── Centered text band with white overlay ── */}
      <div className="hero-text-band">
        <h1 className="hero-title">讓香氛與療癒成為你人生的新起點</h1>
        <p className="hero-subtitle">從自我療癒到專業轉職，打造屬於你的香氛斜槓人生</p>
      </div>

      {/* ── Central circular logo ── */}
      <img src="/images/Logo1.png" alt="InHealing" className="hero-logo" />

    </section>
  );
}
