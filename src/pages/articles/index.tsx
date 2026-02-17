import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface Post {
    id: string;
    title: string;
    published: string;
    updated: string;
    url: string;
    content: string;
    summary?: string;
    labels?: string[];
    author: {
        displayName: string;
        image?: { url: string };
    };
    replies?: { totalItems: string };
}

interface BlogProps {
    posts: Post[];
    blogMeta: {
        name: string;
        description: string;
        url: string;
        locale: string;
    };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';
const BLOG_NAME = 'My Game Ground';
const BLOG_DESCRIPTION = 'Level up your knowledge with the latest gaming news, patch notes, and deep dives.';

const createSlug = (title: string, id: string) => {
    const cleanTitle = title
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
    return `/articles/${cleanTitle}-${id}`;
};

const stripHtml = (html: string) =>
    html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();

const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

const estimateReadTime = (content: string) => {
    const wordCount = stripHtml(content).split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / 200));
};

export default function GamingBlog({ posts, blogMeta }: BlogProps) {
    const canonicalUrl = SITE_URL;
    const ogImageUrl = `${SITE_URL}/og-image.png`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: BLOG_NAME,
        description: BLOG_DESCRIPTION,
        url: canonicalUrl,
        blogPost: posts.slice(0, 5).map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.published,
            dateModified: post.updated,
            author: {
                '@type': 'Person',
                name: post.author.displayName,
            },
            url: `${SITE_URL}${createSlug(post.title, post.id)}`,
            description: post.summary || stripHtml(post.content).substring(0, 160),
        })),
    };

    return (
        <div className="min-h-screen text-gray-100 font-sans" style={{ background: '#080b10' }}>
            <Head>
                {/* ── Primary ── */}
                <title>{`${BLOG_NAME} — Patch Notes & Gaming News`}</title>
                <meta name="description" content={BLOG_DESCRIPTION} />
                <meta name="keywords" content="gaming news, patch notes, game updates, esports, reviews" />
                <meta name="author" content={BLOG_NAME} />
                <link rel="canonical" href={canonicalUrl} />

                {/* ── Open Graph ── */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`${BLOG_NAME} — Patch Notes & Gaming News`} />
                <meta property="og:description" content={BLOG_DESCRIPTION} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={`${BLOG_NAME} logo and banner`} />
                <meta property="og:site_name" content={BLOG_NAME} />
                <meta property="og:locale" content={blogMeta.locale} />

                {/* ── Twitter / X ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@GameCentralGG" />
                <meta name="twitter:creator" content="@GameCentralGG" />
                <meta name="twitter:title" content={`${BLOG_NAME} — Patch Notes & Gaming News`} />
                <meta name="twitter:description" content={BLOG_DESCRIPTION} />
                <meta name="twitter:image" content={ogImageUrl} />
                <meta name="twitter:image:alt" content={`${BLOG_NAME} banner`} />

                {/* ── Robots & Indexing ── */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />

                {/* ── Mobile & PWA ── */}
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="theme-color" content="#080b10" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content={BLOG_NAME} />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />

                {/* ── Favicons ── */}
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="shortcut icon" href="/favicon.ico" />

                {/* ── Feeds ── */}
                <link rel="alternate" type="application/rss+xml" title={`${BLOG_NAME} RSS Feed`} href="/rss.xml" />
                <link rel="alternate" type="application/atom+xml" title={`${BLOG_NAME} Atom Feed`} href="/atom.xml" />

                {/* ── Fonts ── */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;700&display=swap"
                    rel="stylesheet"
                />

                {/* ── JSON-LD Structured Data ── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            {/* ── Ambient background ── */}
            <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden">
                <div style={{
                    position: 'absolute', top: '-20%', left: '10%',
                    width: '60vw', height: '60vw', maxWidth: 700,
                    background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '-10%',
                    width: '50vw', height: '50vw', maxWidth: 600,
                    background: 'radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }} />
                {/* scanline overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                    pointerEvents: 'none',
                }} />
            </div>

            <main className="relative max-w-7xl mx-auto px-6 md:px-12 py-14">

                {/* ── HEADER ── */}
                <header className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.2em' }}
                                className="text-cyan-500 uppercase mb-3 opacity-80">
                                // latest dispatches
                            </p>
                            <h1 style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                fontWeight: 900,
                                lineHeight: 1,
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(135deg, #e0e0ff 10%, #a78bfa 40%, #22d3ee 80%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                PATCH NOTES<br />
                                <span style={{ WebkitTextFillColor: 'transparent', opacity: 0.4 }}>&amp; NEWS</span>
                            </h1>
                            <p style={{ fontFamily: "'DM Sans', sans-serif" }}
                                className="text-gray-400 mt-4 text-base max-w-md leading-relaxed">
                                {BLOG_DESCRIPTION}
                            </p>
                        </div>

                        <div className="flex flex-col items-end gap-2 shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}
                                    className="text-emerald-400 uppercase tracking-widest">
                                    Live Feed
                                </span>
                            </div>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}
                                className="text-gray-600">
                                {posts.length} articles indexed
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-10 flex items-center gap-4">
                        <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, rgba(139,92,246,0.6), rgba(6,182,212,0.6), transparent)' }} />
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }} className="text-gray-700 shrink-0 uppercase tracking-widest">GC</span>
                    </div>
                </header>

                {/* ── ARTICLE GRID ── */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => {
                            const excerpt = post.summary
                                ? stripHtml(post.summary)
                                : stripHtml(post.content).substring(0, 155);
                            const readTime = estimateReadTime(post.content);
                            const slug = createSlug(post.title, post.id);
                            const isHero = i === 0;

                            return (
                                <article
                                    key={post.id}
                                    className={isHero ? 'md:col-span-2' : ''}
                                    style={{
                                        background: 'rgba(22,27,34,0.85)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        borderRadius: 16,
                                        overflow: 'hidden',
                                        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                        (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px -10px rgba(6,182,212,0.2)';
                                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.3)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                                    }}
                                >
                                    {/* Top accent bar */}
                                    <div style={{
                                        height: 3,
                                        background: isHero
                                            ? 'linear-gradient(90deg, #7c3aed, #22d3ee)'
                                            : 'linear-gradient(90deg, rgba(6,182,212,0.4), transparent)',
                                    }} />

                                    <div className={`p-6 flex flex-col h-full ${isHero ? 'md:p-8' : ''}`}>

                                        {/* Meta row */}
                                        <div className="flex flex-wrap items-center gap-2 mb-4">
                                            {isHero && (
                                                <span style={{
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: 9, letterSpacing: '0.15em',
                                                    background: 'linear-gradient(90deg, #7c3aed, #22d3ee)',
                                                    borderRadius: 4, padding: '3px 8px',
                                                    color: '#fff', fontWeight: 700,
                                                }} className="uppercase">
                                                    Featured
                                                </span>
                                            )}

                                            {/* Labels / tags */}
                                            {post.labels?.slice(0, 2).map(label => (
                                                <span key={label} style={{
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: 9, letterSpacing: '0.12em',
                                                    border: '1px solid rgba(6,182,212,0.25)',
                                                    color: 'rgba(6,182,212,0.7)',
                                                    borderRadius: 4, padding: '3px 8px',
                                                }} className="uppercase">
                                                    {label}
                                                </span>
                                            ))}

                                            {/* If no labels, show generic */}
                                            {(!post.labels || post.labels.length === 0) && (
                                                <span style={{
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: 9, letterSpacing: '0.12em',
                                                    border: '1px solid rgba(6,182,212,0.25)',
                                                    color: 'rgba(6,182,212,0.7)',
                                                    borderRadius: 4, padding: '3px 8px',
                                                }} className="uppercase">
                                                    Article
                                                </span>
                                            )}

                                            <time
                                                dateTime={post.published}
                                                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}
                                                className="text-gray-600 ml-auto"
                                            >
                                                {formatDate(post.published)}
                                            </time>
                                        </div>

                                        {/* Title */}
                                        <Link href={slug}>
                                            <h2 style={{
                                                fontFamily: isHero ? "'Orbitron', sans-serif" : "'DM Sans', sans-serif",
                                                fontWeight: isHero ? 900 : 700,
                                                fontSize: isHero ? 'clamp(1.4rem, 3vw, 2rem)' : '1.15rem',
                                                lineHeight: 1.25,
                                                letterSpacing: isHero ? '-0.01em' : 'normal',
                                                color: '#e2e8f0',
                                                transition: 'color 0.2s',
                                                cursor: 'pointer',
                                                marginBottom: '0.75rem',
                                            }}
                                                onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
                                                onMouseLeave={e => (e.currentTarget.style.color = '#e2e8f0')}
                                            >
                                                {post.title}
                                            </h2>
                                        </Link>

                                        {/* Excerpt */}
                                        <p style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65, fontSize: '0.9rem' }}
                                            className="text-gray-400 mb-6 flex-1"
                                        >
                                            {excerpt.substring(0, isHero ? 220 : 140)}{excerpt.length > (isHero ? 220 : 140) ? '…' : ''}
                                        </p>

                                        {/* Footer */}
                                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}
                                            className="flex items-center justify-between gap-3 flex-wrap">

                                            <div className="flex items-center gap-3">
                                                {/* Avatar placeholder */}
                                                <div style={{
                                                    width: 30, height: 30, borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0,
                                                }}>
                                                    {post.author.displayName.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500 }}
                                                        className="text-gray-300">
                                                        {post.author.displayName}
                                                    </p>
                                                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}
                                                        className="text-gray-600">
                                                        {readTime} min read
                                                        {post.replies && parseInt(post.replies.totalItems) > 0
                                                            ? ` · ${post.replies.totalItems} comments`
                                                            : ''}
                                                    </p>
                                                </div>
                                            </div>

                                            <Link href={slug}
                                                style={{
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: 11, letterSpacing: '0.1em',
                                                    color: '#22d3ee', fontWeight: 700,
                                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                                    textDecoration: 'none', transition: 'gap 0.2s',
                                                }}
                                                onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                                                onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
                                                aria-label={`Read full article: ${post.title}`}
                                            >
                                                READ MORE
                                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div style={{
                        border: '2px dashed rgba(255,255,255,0.08)',
                        borderRadius: 24, textAlign: 'center', padding: '5rem 2rem',
                    }}>
                        <p style={{ fontFamily: "'JetBrains Mono', monospace" }}
                            className="text-gray-600 italic">
                            // no quests found in this region (0 posts)
                        </p>
                    </div>
                )}

            </main>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const apiKey = process.env.BLOGGER_API_KEY;
        const blogId = process.env.BLOG_ID;
        const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=10`;

        const res = await fetch(url);
        const data = await res.json();

        return {
            props: {
                posts: data.items || [],
                blogMeta: {
                    name: BLOG_NAME,
                    description: BLOG_DESCRIPTION,
                    url: SITE_URL,
                    locale: 'en_US',
                },
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error('Error fetching blogger posts:', error);
        return {
            props: {
                posts: [],
                blogMeta: {
                    name: BLOG_NAME,
                    description: BLOG_DESCRIPTION,
                    url: SITE_URL,
                    locale: 'en_US',
                },
            },
            revalidate: 30,
        };
    }
};