import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { gamesData } from '@/data/gamesData';
import Link from "next/link";
import { Play, TrendingUp, Gamepad2, Flame, Star } from 'lucide-react';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamecentral.gg';
const SITE_NAME = 'Game Central';
const PAGE_TITLE = 'Game Central — Your Game Ground, Always On';
const PAGE_DESCRIPTION = 'Explore the latest releases, pro-level walkthroughs, and community favorites. Play free games online instantly — no downloads needed.';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const pageStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');

  body { background: #080b10; }

  .game-card-img {
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .game-card:hover .game-card-img { transform: scale(1.08); }

  .game-card-overlay {
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .game-card:hover .game-card-overlay { opacity: 1; }

  .play-btn {
    transform: scale(0.7);
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .game-card:hover .play-btn { transform: scale(1); }

  .card-lift {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .game-card:hover .card-lift {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(6,182,212,0.15);
  }

  .hero-glow {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 20% 50%, rgba(124,58,237,0.18) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 80% 40%, rgba(6,182,212,0.12) 0%, transparent 60%);
    pointer-events: none;
  }

  .scanlines {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px);
    pointer-events: none;
  }

  .section-divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(139,92,246,0.5), rgba(6,182,212,0.5), transparent);
    flex: 1;
    margin-left: 1rem;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }
  .live-dot { animation: pulse-dot 1.8s ease-in-out infinite; }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
  .float-icon { animation: float 3s ease-in-out infinite; }
`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: PAGE_DESCRIPTION,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  const featuredGames = gamesData.slice(0, 3);

  return (
    <main className={`${geistSans.variable} ${geistMono.variable} min-h-screen pb-16`}
      style={{ background: '#080b10', color: '#c9d1d9' }}>

      <Head>
        {/* ── Primary ── */}
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content="free online games, browser games, gaming, play games online, action games, adventure games" />
        <meta name="author" content={SITE_NAME} />
        <link rel="canonical" href={SITE_URL} />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${SITE_NAME} — Play Free Games Online`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_US" />

        {/* ── Twitter / X ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GameCentralGG" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={`${SITE_NAME} — Play Free Games Online`} />

        {/* ── Robots ── */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* ── Mobile & PWA ── */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#080b10" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* ── Favicons ── */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* ── Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />

        {/* ── JSON-LD ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <style>{pageStyles}</style>
      </Head>

      {/* ── Top accent bar ── */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #7c3aed, #22d3ee, #7c3aed)' }} />

      {/* ══════════════ HERO ══════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '5rem 1.5rem 4.5rem' }}>
        <div className="hero-glow" />
        <div className="scanlines" />

        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>

            {/* Live badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.4rem' }}>
              <span className="live-dot" style={{
                display: 'block', width: 7, height: 7, borderRadius: '50%', background: '#22d3ee',
              }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, letterSpacing: '0.2em', color: '#22d3ee', textTransform: 'uppercase',
              }}>
                Live · Trending Now
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 6vw, 4rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#f0f0ff',
              marginBottom: '1.25rem',
            }}>
              YOUR GAME GROUND
              <br />
              <span style={{
                background: 'linear-gradient(120deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                ALWAYS ON
              </span>
            </h1>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#6b7280', maxWidth: 420,
              margin: '0 auto 2.5rem',
              fontSize: '1rem', lineHeight: 1.7,
            }}>
              {PAGE_DESCRIPTION}
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#games" style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, letterSpacing: '0.1em', fontWeight: 600,
                background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
                color: '#fff', textDecoration: 'none',
                padding: '0.75rem 1.8rem', borderRadius: 8,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'opacity 0.2s',
              }}>
                <Play size={14} fill="currentColor" /> PLAY NOW
              </a>
              <Link href="/articles" style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, letterSpacing: '0.1em', fontWeight: 600,
                border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee',
                textDecoration: 'none', padding: '0.75rem 1.8rem', borderRadius: 8,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'border-color 0.2s, background 0.2s',
              }}>
                <Flame size={14} /> PATCH NOTES
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap',
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            {[
              { label: 'Games', value: `${gamesData.length}+` },
              { label: 'Players Online', value: '12K+' },
              { label: 'New This Week', value: '24' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 900, fontSize: '1.6rem',
                  background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  marginBottom: 4,
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, letterSpacing: '0.15em',
                  color: '#4b5563', textTransform: 'uppercase',
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ GAME GRID ══════════════ */}
      <section id="games" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.75rem' }}>
          <Gamepad2 size={18} style={{ color: '#22d3ee', marginRight: 10, flexShrink: 0 }} />
          <h2 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900, fontSize: '1rem',
            color: '#e2e8f0', letterSpacing: '0.04em',
            textTransform: 'uppercase', marginRight: 12,
          }}>
            Popular Games
          </h2>
          <div className="section-divider" />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: '#374151',
            letterSpacing: '0.1em', marginLeft: '1rem', flexShrink: 0,
          }}>
            {gamesData.length} TITLES
          </span>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '1.25rem',
        }}>
          {gamesData.map((game, i) => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className="game-card"
              style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
              aria-label={`Play ${game.title}`}
            >
              {/* Thumbnail container */}
              <div className="card-lift" style={{
                position: 'relative',
                aspectRatio: '3/4',
                overflow: 'hidden',
                borderRadius: 12,
                background: '#161b22',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <img
                  src={game.thumbnail}
                  alt={`${game.title} thumbnail`}
                  className="game-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading={i < 10 ? 'eager' : 'lazy'}
                  decoding="async"
                />

                {/* Hover overlay */}
                <div className="game-card-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div className="play-btn" style={{
                    background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
                    borderRadius: '50%', width: 44, height: 44,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(6,182,212,0.4)',
                  }}>
                    <Play size={18} fill="white" color="white" />
                  </div>
                </div>

                {/* Category badge */}
                <div style={{ position: 'absolute', top: 8, left: 8 }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
                    color: '#c9d1d9', borderRadius: 5, padding: '3px 7px',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    {game.category || 'Action'}
                  </span>
                </div>

                {/* Hot badge for top 3 */}
                {i < 3 && (
                  <div style={{ position: 'absolute', top: 8, right: 8 }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9, letterSpacing: '0.1em',
                      background: 'linear-gradient(135deg, #ef4444, #f97316)',
                      color: '#fff', borderRadius: 5, padding: '3px 7px', fontWeight: 600,
                    }}>
                      🔥 HOT
                    </span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div style={{ marginTop: 10 }}>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600, fontSize: '0.875rem',
                  color: '#e2e8f0', margin: '0 0 4px',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  transition: 'color 0.2s',
                }}>
                  {game.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Star size={10} fill="#facc15" color="#facc15" />
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, color: '#6b7280',
                  }}>
                    4.8 · 2.4M plays
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}