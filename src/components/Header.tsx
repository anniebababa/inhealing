'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BOOKING_URL = 'https://calendly.com/tingwenlin/1-1?month=2026-07';

const dropdownItems = [
  { label: '療癒師認證課', href: '/course#healing-course' },
  { label: '調香師認證課', href: '/course#perfumer-course' },
  { label: '芳療師認證課', href: '/course#aromatherapy-course' },
  { label: '常見問題', href: '/course#faq' },
];

const mobileMenuItems = [
  { label: '培訓課程', href: '/course' },
  { label: '療癒師認證課', href: '/course#healing-course' },
  { label: '調香師認證課', href: '/course#perfumer-course' },
  { label: '芳療師認證課', href: '/course#aromatherapy-course' },
  { label: '常見問題', href: '/course#faq' },
];

export default function Header() {
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const courseWrapRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (courseWrapRef.current && !courseWrapRef.current.contains(e.target as Node)) {
        setIsCourseMenuOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsCourseMenuOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="hd-inner">
        <Link href="/" className="hd-logo-link">
          <Image
            src="/images/logo.png"
            alt="InHealing 植覺療癒"
            width={260}
            height={69}
            priority
            style={{ width: '130px', height: 'auto', objectFit: 'contain', objectPosition: 'left center' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hd-nav">
          <div
            className="hd-course-wrap"
            ref={courseWrapRef}
            onMouseEnter={() => setIsCourseMenuOpen(true)}
            onMouseLeave={() => setIsCourseMenuOpen(false)}
          >
            <button
              className="hd-course-btn"
              onClick={() => setIsCourseMenuOpen(v => !v)}
              aria-expanded={isCourseMenuOpen}
              aria-haspopup="menu"
            >
              培訓課程
              <svg
                className={`hd-chevron${isCourseMenuOpen ? ' open' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
              >
                <path d="M1 1l4 4 4-4" stroke="#7a6548" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isCourseMenuOpen && (
              <div className="hd-dropdown" role="menu">
                {dropdownItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hd-dropdown-item"
                    role="menuitem"
                    onClick={() => setIsCourseMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hd-book-btn"
          >
            立即預約
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="hd-burger"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? '關閉選單' : '開啟選單'}
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen
              ? (<><line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" /></>)
              : (<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>)
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="hd-mobile-menu" aria-label="手機選單">
          {mobileMenuItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="hd-mobile-item"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hd-mobile-book"
            onClick={() => setMobileOpen(false)}
          >
            立即預約
          </a>
        </nav>
      )}
    </header>
  );
}
