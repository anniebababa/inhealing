'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinkStyle: React.CSSProperties = {
    padding: '8px 16px',
    fontSize: '15px',
    color: 'var(--text)',
    letterSpacing: '0.04em',
    fontWeight: '400',
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      height: 'var(--header-h)',
      backgroundColor: scrolled ? 'rgba(247,244,239,0.97)' : 'rgba(247,244,239,0.80)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      transition: 'background-color 0.3s, border-color 0.3s',
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image
            src="/images/kyp/logo.png"
            alt="InHealing 植覺療癒"
            width={130}
            height={36}
            style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hd-nav">
          <Link href="/course#course" style={navLinkStyle}>
            專業培訓
          </Link>
          <a
            href="https://forms.gle/Sg3HV5Ec5J8eiQdV8"
            target="_blank"
            rel="noopener noreferrer"
            style={navLinkStyle}
          >
            講師培訓
          </a>
          <a
            href="https://forms.gle/SaM6QgXC5JmsxwJW7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: '12px',
              padding: '9px 24px',
              backgroundColor: 'var(--gold)',
              color: 'var(--white)',
              fontSize: '14px',
              letterSpacing: '0.06em',
              borderRadius: '2px',
              fontWeight: '400',
            }}
          >
            創業陪跑
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="選單"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: 'var(--text)',
          }}
          className="hd-burger"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? (<><line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" /></>)
              : (<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>)
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0, right: 0,
          backgroundColor: 'rgba(247,244,239,0.99)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '8px 0 28px',
        }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="/course#course" onClick={() => setMenuOpen(false)} style={{
              padding: '16px 0',
              fontSize: '16px',
              color: 'var(--text)',
              letterSpacing: '0.04em',
              borderBottom: '1px solid var(--border)',
            }}>
              專業培訓
            </Link>
            <a
              href="https://forms.gle/Sg3HV5Ec5J8eiQdV8"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '16px 0',
                fontSize: '16px',
                color: 'var(--text)',
                letterSpacing: '0.04em',
                borderBottom: '1px solid var(--border)',
              }}
            >
              講師培訓
            </a>
            <a
              href="https://forms.gle/SaM6QgXC5JmsxwJW7"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '14px 28px',
                backgroundColor: 'var(--gold)',
                color: 'var(--white)',
                fontSize: '15px',
                letterSpacing: '0.06em',
                borderRadius: '2px',
                textAlign: 'center' as const,
              }}
            >
              創業陪跑
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hd-nav { display: none !important; }
          .hd-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
