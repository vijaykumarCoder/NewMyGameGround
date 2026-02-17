'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Gamepad2, Twitter, Youtube, Instagram, Github, ArrowRight, Flame, ChevronRight } from 'lucide-react';

const footerSections = {
  platform: [
    { href: '/news', label: 'Latest News' },
    { href: '/reviews', label: 'Game Reviews' },
    { href: '/guides', label: 'Pro Guides' },
    { href: '/hardware', label: 'Hardware' },
  ],
  support: [
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/rss.xml', label: 'RSS Feed' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
  ],
};

const SOCIALS = [
  { icon: Twitter, href: 'https://twitter.com/GameCentralGG', label: 'Twitter', hoverColor: '#1d9bf0' },
  { icon: Youtube, href: 'https://youtube.com/@GameCentralGG', label: 'YouTube', hoverColor: '#ff0000' },
  { icon: Instagram, href: 'https://instagram.com/GameCentralGG', label: 'Instagram', hoverColor: '#e1306c' },
  { icon: Github, href: 'https://github.com/GameCentralGG', label: 'GitHub', hoverColor: '#e2e8f0' },
];

const footerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=JetBrains+Mono:wght@400;600&family=DM+Sans:wght@400;500;600&display=swap');

  .gc-footer-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    color: #4b5563;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s;
    line-height: 1;
  }
  .gc-footer-link:hover { color: #22d3ee; }
  .gc-footer-link .arrow { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; }
  .gc-footer-link:hover .arrow { opacity: 1; transform: translateX(0); }

  .gc-social-btn {
    width: 34px; height: 34px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.07);
    background: rgba(22,27,34,0.8);
    display: flex; align-items: center; justify-content: center;
    color: #4b5563;
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .gc-social-btn:hover { transform: translateY(-2px); }

  .gc-newsletter-input {
    flex: 1;
    background: rgba(13,17,23,0.9);
    border: 1px solid rgba(255,255,255,0.07);
    border-right: none;
    border-radius: 8px 0 0 8px;
    padding: 0 14px;
    height: 38px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #c9d1d9;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    min-width: 0;
  }
  .gc-newsletter-input::placeholder { color: #374151; }
  .gc-newsletter-input:focus {
    border-color: rgba(6,182,212,0.35);
    box-shadow: 0 0 0 3px rgba(6,182,212,0.07);
  }

  .gc-newsletter-btn {
    height: 38px;
    padding: 0 16px;
    background: linear-gradient(135deg, #7c3aed, #0891b2);
    border: none;
    border-radius: 0 8px 8px 0;
    color: #fff;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    display: flex; align-items: center; gap: 6px;
    transition: opacity 0.2s, transform 0.15s;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .gc-newsletter-btn:hover { opacity: 0.88; }

  .gc-section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #374151;
    margin-bottom: 16px;
    display: block;
  }

  @keyframes status-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  .status-dot { animation: status-pulse 2s ease-in-out infinite; }
`;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(''); }
  };

  return (
    <>
      <style>{footerStyles}</style>

      <footer style={{
        background: '#0d1117',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: 'auto',
      }}>

        {/* ── Top gradient bar ── */}
        <div style={{ height: 2, background: 'linear-gradient(90deg, #7c3aed, #22d3ee, #7c3aed)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 1.5rem 0' }}>

          {/* ══ 4-column grid ══ */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
          }}>

            {/* ── Col 1: Brand ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                  background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 14px rgba(124,58,237,0.35)',
                }}>
                  <Gamepad2 color="white" size={18} />
                </div>
                <span style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 900, fontSize: '0.9rem', letterSpacing: '-0.01em',
                  background: 'linear-gradient(120deg, #f0f0ff 30%, #818cf8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  GAME CENTRAL
                </span>
              </Link>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, color: '#374151', lineHeight: 1.75, maxWidth: 220,
              }}>
                The ultimate destination for gaming news, deep-dive reviews, and pro-level guides. Built by gamers, for gamers.
              </p>

              {/* Status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span className="status-dot" style={{
                  width: 6, height: 6, borderRadius: '50%', background: '#22c55e', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9, letterSpacing: '0.15em', color: '#374151', textTransform: 'uppercase',
                }}>
                  All systems operational
                </span>
              </div>

              {/* Socials */}
              <div style={{ display: 'flex', gap: 8 }}>
                {SOCIALS.map(({ icon: Icon, href, label, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="gc-social-btn"
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = hoverColor;
                      (e.currentTarget as HTMLElement).style.borderColor = `${hoverColor}33`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 14px ${hoverColor}22`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = '#4b5563';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2: Platform ── */}
            <div>
              <span className="gc-section-label">// Platform</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {footerSections.platform.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="gc-footer-link">
                      <ChevronRight size={11} className="arrow" style={{ color: '#22d3ee' }} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Support ── */}
            <div>
              <span className="gc-section-label">// Support</span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {footerSections.support.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="gc-footer-link">
                      <ChevronRight size={11} className="arrow" style={{ color: '#22d3ee' }} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Newsletter ── */}
            <div>
              <span className="gc-section-label">// Stay Updated</span>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, color: '#374151', marginBottom: 16, lineHeight: 1.6,
              }}>
                Weekly gaming wrap-up — no spam, unsubscribe anytime.
              </p>

              {submitted ? (
                <div style={{
                  background: 'rgba(6,182,212,0.07)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: 8, padding: '12px 16px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11, color: '#22d3ee', letterSpacing: '0.08em',
                }}>
                  ✓ You're in. Welcome to the squad.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex' }}>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="gc-newsletter-input"
                    aria-label="Email address"
                  />
                  <button type="submit" className="gc-newsletter-btn">
                    <ArrowRight size={12} />
                    Sub
                  </button>
                </form>
              )}

              {/* Blog promo */}
              <Link href="/blog" style={{
                marginTop: 20, display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(249,115,22,0.06)',
                border: '1px solid rgba(249,115,22,0.15)',
                borderRadius: 8, padding: '10px 14px',
                textDecoration: 'none', transition: 'background 0.2s',
              }}>
                <Flame size={13} style={{ color: '#f97316', flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, letterSpacing: '0.1em', color: '#9a3412',
                  textTransform: 'uppercase',
                }}>
                  Latest Patch Notes →
                </span>
              </Link>
            </div>
          </div>

          {/* ══ Bottom bar ══ */}
          <div style={{
            marginTop: '3.5rem',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: '#1f2937', letterSpacing: '0.06em',
            }}>
              © {currentYear} Game Central. All rights reserved. Game on.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {footerSections.legal.map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, letterSpacing: '0.08em',
                  color: '#1f2937', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4b5563')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#1f2937')}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}