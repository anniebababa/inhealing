import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* Left: content */}
        <div className="site-footer__content">
          <Image
            className="site-footer__logo"
            src="/images/logo-footer.png"
            alt="inHealing"
            width={200}
            height={42}
          />
          <p className="site-footer__company">植覺療癒股份有限公司</p>
          <p className="site-footer__notice">希菲療癒吧針對各項課程內容及行銷細節保有異動權利</p>
          <p className="site-footer__copyright">© 2025 InHealing.</p>
        </div>

        {/* Right: social icons */}
        <div className="site-footer__social">
          <a href="https://lin.ee/inhealingtw" target="_blank" rel="noopener noreferrer" aria-label="LINE" className="site-footer__social-link">
            <svg width="26" height="26" viewBox="0 0 48 48" fill="currentColor">
              <path d="M24 4C12.95 4 4 11.86 4 21.5c0 5.9 3.3 11.1 8.4 14.4-.4 1.5-1.4 5.3-1.6 6.1-.2.9.3.9.7.7.3-.2 4.9-3.3 6.9-4.7 1.8.3 3.7.5 5.6.5 11.05 0 20-7.86 20-17.5S35.05 4 24 4z"/>
              <text x="24" y="26" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif" fill="#412E0C" letterSpacing="0.5">LINE</text>
            </svg>
          </a>
          <a href="https://www.instagram.com/inhealing.tw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="site-footer__social-link">
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/inhealing.tw" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="site-footer__social-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
        </div>

      </div>

      <style>{`
        .site-footer {
          width: 100%;
          min-height: 210px;
          background-color: #412E0C;
          color: #EFEADD;
          margin: 0;
          padding: 0;
          box-shadow: none;
          overflow: hidden;
        }
        .site-footer__inner {
          width: 100%;
          min-height: 210px;
          padding: 38px 60px 28px 70px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .site-footer__content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .site-footer__logo {
          width: 200px;
          height: 42px;
          object-fit: contain;
          object-position: left center;
          display: block;
          margin-bottom: 4px;
        }
        .site-footer__company {
          margin: 0 0 12px;
          color: #EFEADD;
          font-family: "Noto Serif TC", "Source Han Serif TC", serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.02em;
        }
        .site-footer__notice {
          margin: 0 0 5px;
          color: #988C75;
          font-family: "Noto Sans TC", "Source Han Sans TC", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .site-footer__copyright {
          margin: 0;
          color: #EFEADD;
          font-family: "Noto Sans TC", "Source Han Sans TC", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.01em;
        }
        .site-footer__social {
          display: flex;
          align-items: center;
          gap: 22px;
          padding-top: 0;
          align-self: flex-start;
        }
        .site-footer__social-link {
          color: #EFEADD;
          opacity: 1;
          transition: opacity 0.2s ease;
          display: flex;
          align-items: center;
        }
        .site-footer__social-link:hover {
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .site-footer { min-height: auto; }
          .site-footer__inner {
            min-height: auto;
            padding: 32px 24px 28px;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .site-footer__logo { width: 170px; }
          .site-footer__company { font-size: 15px; }
          .site-footer__notice,
          .site-footer__copyright { font-size: 13px; white-space: normal; }
          .site-footer__social { padding-top: 0; gap: 20px; }
        }
      `}</style>
    </footer>
  );
}
