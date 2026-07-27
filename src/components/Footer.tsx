import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--white)' }}>
      <div className="container" style={{ padding: '52px 40px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
        }} className="ft-grid">
          <div>
            <p style={{ fontSize: '17px', fontWeight: '500', letterSpacing: '0.06em', marginBottom: '10px' }}>
              植覺療癒股份有限公司
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', lineHeight: '1.9' }}>
              香氛療癒 × 創業陪跑 × 斜槓人生
            </p>
          </div>

          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.45)', marginBottom: '18px', textTransform: 'uppercase' as const }}>
              課程項目
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
              {[
                { label: '希塔療癒師認證課', href: '/course#thetahealing' },
                { label: '調香師認證課', href: '/course#perfumer' },
                { label: '芳療師培訓', href: '/course#aromatherapist' },
                { label: '常見問題 FAQ', href: '/course#faq' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.45)', marginBottom: '18px', textTransform: 'uppercase' as const }}>
              聯絡我們
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
              <a href="https://calendly.com/tingwenlin/1-1" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>
                預約免費諮詢
              </a>
              <a href="https://lin.ee/inhealingtw" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>
                LINE 官方帳號
              </a>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '28px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
            © 2025 InHealing. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ft-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
