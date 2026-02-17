'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, Menu, X, Gamepad2, Flame, BookOpen, Trophy, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/articles', label: 'Articles', icon: BookOpen },
  { href: '/guides', label: 'Guides', icon: Trophy },
];

const headerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=JetBrains+Mono:wght@400;600&family=DM+Sans:wght@400;500;600&display=swap');

  .gc-header {
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .gc-header.scrolled {
    background: rgba(8, 11, 16, 0.97) !important;
    border-bottom-color: rgba(6,182,212,0.15) !important;
    box-shadow: 0 4px 24px -4px rgba(0,0,0,0.6);
  }

  .gc-nav-link {
    position: relative;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6b7280;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 2px;
    transition: color 0.2s;
  }
  .gc-nav-link::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 1.5px;
    background: linear-gradient(90deg, #7c3aed, #22d3ee);
    transition: width 0.25s ease;
    border-radius: 2px;
  }
  .gc-nav-link:hover { color: #e2e8f0; }
  .gc-nav-link:hover::after { width: 100%; }

  .gc-search {
    background: rgba(22,27,34,0.9);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    height: 36px;
    width: 220px;
    padding: 0 12px 0 36px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #c9d1d9;
    outline: none;
    transition: border-color 0.2s, width 0.3s ease, box-shadow 0.2s;
    backdrop-filter: blur(8px);
  }
  .gc-search::placeholder { color: #374151; letter-spacing: 0.05em; }
  .gc-search:focus {
    border-color: rgba(6,182,212,0.35);
    box-shadow: 0 0 0 3px rgba(6,182,212,0.08);
    width: 260px;
  }

  .gc-join-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 600;
    background: linear-gradient(135deg, #7c3aed, #0891b2);
    color: #fff;
    border: none;
    border-radius: 7px;
    padding: 8px 18px;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
    white-space: nowrap;
  }
  .gc-join-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .gc-join-btn:active { transform: translateY(0); }

  .gc-icon-btn {
    background: rgba(22,27,34,0.9);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    color: #6b7280;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .gc-icon-btn:hover { border-color: rgba(6,182,212,0.3); color: #22d3ee; }

  /* Mobile drawer */
  .gc-drawer {
    position: fixed;
    top: 0; right: 0;
    width: 300px; height: 100dvh;
    background: #0d1117;
    border-left: 1px solid rgba(255,255,255,0.07);
    z-index: 100;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex; flex-direction: column;
    padding: 0;
    box-shadow: -20px 0 60px rgba(0,0,0,0.5);
  }
  .gc-drawer.open { transform: translateX(0); }

  .gc-backdrop {
    position: fixed;
    inset: 0; z-index: 99;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }
  .gc-backdrop.open { opacity: 1; pointer-events: all; }

  .gc-drawer-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px;
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6b7280;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    transition: color 0.2s, background 0.2s;
  }
  .gc-drawer-link:hover { color: #22d3ee; background: rgba(6,182,212,0.04); }

  @keyframes logo-pulse {
    0%, 100% { box-shadow: 0 0 12px rgba(124,58,237,0.4); }
    50% { box-shadow: 0 0 22px rgba(6,182,212,0.5); }
  }
  .gc-logo-icon { animation: logo-pulse 3s ease-in-out infinite; }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <style>{headerStyles}</style>

      <header
        className={`gc-header${scrolled ? ' scrolled' : ''}`}
        style={{
          background: 'rgba(8,11,16,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Top micro-bar */}
        <div style={{
          height: 2,
          background: 'linear-gradient(90deg, #7c3aed, #22d3ee, #7c3aed)',
          backgroundSize: '200% 100%',
        }} />

        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 1.5rem',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>

          {/* ── LEFT: Logo + Nav ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>

            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <div className="gc-logo-icon" style={{
                width: 38, height: 38, borderRadius: 9,
                background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Gamepad2 color="white" size={20} />
              </div>
              <span style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                letterSpacing: '-0.01em',
                background: 'linear-gradient(120deg, #f0f0ff 30%, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                whiteSpace: 'nowrap',
              }}>
                GAME CENTRAL
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
              className="hidden md:flex">
              {NAV_LINKS.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className="gc-nav-link">
                  <Icon size={12} style={{ opacity: 0.6 }} />
                  {label}
                </Link>
              ))}
              {/* Blog link with hot indicator */}
              <Link href="/blog" className="gc-nav-link" style={{ color: '#f97316' }}>
                <Flame size={12} />
                Blog
              </Link>
            </nav>
          </div>

          {/* ── RIGHT: Search + Actions ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

            {/* Search */}
            <div style={{ position: 'relative' }} className="hidden sm:block">
              <Search size={13} style={{
                position: 'absolute', left: 11, top: '50%',
                transform: 'translateY(-50%)', color: '#374151', pointerEvents: 'none',
              }} />
              <input
                type="search"
                placeholder="Search games..."
                className="gc-search"
                aria-label="Search games"
              />
            </div>

            {/* Join CTA */}
            <button className="gc-join-btn hidden sm:block">
              Join Now
            </button>

            {/* Mobile: search icon */}
            <button className="gc-icon-btn sm:hidden" aria-label="Search">
              <Search size={16} />
            </button>

            {/* Mobile: menu toggle */}
            <button
              className="gc-icon-btn md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* ══════════ MOBILE DRAWER ══════════ */}
      <div
        className={`gc-backdrop${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      <aside className={`gc-drawer${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">

        {/* Drawer header */}
        <div style={{
          height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 20px 0 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900, fontSize: '0.85rem',
            letterSpacing: '0.04em', color: '#e2e8f0',
          }}>
            MENU
          </span>
          <button
            className="gc-icon-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer nav */}
        <nav style={{ flex: 1, paddingTop: 8 }}>
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="gc-drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <Icon size={13} style={{ opacity: 0.5 }} />
                {label}
              </span>
              <ChevronRight size={13} style={{ opacity: 0.3 }} />
            </Link>
          ))}
          <Link href="/blog" className="gc-drawer-link" onClick={() => setMenuOpen(false)}
            style={{ color: '#f97316' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Flame size={13} />Blog
            </span>
            <ChevronRight size={13} style={{ opacity: 0.3 }} />
          </Link>
        </nav>

        {/* Drawer footer: search + CTA */}
        <div style={{
          padding: '20px 24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          <div style={{ position: 'relative' }}>
            <Search size={13} style={{
              position: 'absolute', left: 11, top: '50%',
              transform: 'translateY(-50%)', color: '#374151', pointerEvents: 'none',
            }} />
            <input
              type="search"
              placeholder="Search games..."
              className="gc-search"
              style={{ width: '100%', boxSizing: 'border-box' }}
              aria-label="Search games"
            />
          </div>
          <button className="gc-join-btn" style={{ width: '100%', padding: '10px' }}>
            Join Now
          </button>
        </div>
      </aside>
    </>
  );
}