import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface Post {
    id: string;
    title: string;
    published: string;
    updated: string;
    content: string;
    summary?: string;
    labels?: string[];
    author: { displayName: string; image?: { url: string } };
    url: string;
    replies?: { totalItems: string };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamecentral.gg';
const BLOG_NAME = 'Game Central';

const stripHtml = (html: string) =>
    html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();

const estimateReadTime = (content: string) =>
    Math.max(1, Math.ceil(stripHtml(content).split(/\s+/).length / 200));

const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    });

const formatDateShort = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
    });

const articleStyles = `
  /* ── Fonts ── */
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;600&display=swap');

  /* ── Body copy ── */
  .article-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.05rem;
    line-height: 1.85;
    color: #c9d1d9;
  }

  /* ── Paragraphs ── */
  .article-body p {
    margin-bottom: 1.6rem;
  }

  /* ── Headings ── */
  .article-body h1,
  .article-body h2,
  .article-body h3,
  .article-body h4 {
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    letter-spacing: -0.01em;
    color: #f0f0ff;
    margin-top: 2.8rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .article-body h2 {
    font-size: 1.55rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(6,182,212,0.2);
  }
  .article-body h3 { font-size: 1.2rem; color: #a5f3fc; }
  .article-body h4 { font-size: 1rem; color: #67e8f9; text-transform: uppercase; letter-spacing: 0.06em; }

  /* ── Unordered lists ── */
  .article-body ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.8rem 0;
  }
  .article-body ul li {
    position: relative;
    padding-left: 1.6rem;
    margin-bottom: 0.65rem;
    color: #b0bec5;
  }
  .article-body ul li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #22d3ee;
    font-size: 0.75rem;
    top: 0.25em;
  }

  /* ── Nested lists ── */
  .article-body ul ul,
  .article-body ol ol,
  .article-body ul ol,
  .article-body ol ul {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .article-body ul ul li::before { color: #818cf8; content: '◦'; }

  /* ── Ordered lists ── */
  .article-body ol {
    list-style: none;
    counter-reset: gc-counter;
    padding: 0;
    margin: 0 0 1.8rem 0;
  }
  .article-body ol li {
    counter-increment: gc-counter;
    position: relative;
    padding-left: 2.4rem;
    margin-bottom: 0.65rem;
    color: #b0bec5;
  }
  .article-body ol li::before {
    content: counter(gc-counter, decimal-leading-zero);
    position: absolute;
    left: 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    font-weight: 600;
    color: #22d3ee;
    background: rgba(6,182,212,0.08);
    border: 1px solid rgba(6,182,212,0.2);
    border-radius: 4px;
    padding: 1px 5px;
    top: 0.2em;
    line-height: 1.4;
  }

  /* ── Blockquotes ── */
  .article-body blockquote {
    border-left: 3px solid #7c3aed;
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    background: rgba(124,58,237,0.06);
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #a78bfa;
  }
  .article-body blockquote p { margin-bottom: 0; }

  /* ── Code ── */
  .article-body code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82em;
    background: rgba(6,182,212,0.08);
    color: #67e8f9;
    border: 1px solid rgba(6,182,212,0.15);
    border-radius: 4px;
    padding: 0.15em 0.45em;
  }
  .article-body pre {
    background: #0d1117;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 1.4rem;
    overflow-x: auto;
    margin: 2rem 0;
  }
  .article-body pre code {
    background: none;
    border: none;
    padding: 0;
    color: #c9d1d9;
    font-size: 0.875rem;
  }

  /* ── Tables ── */
  .article-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.9rem;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.07);
  }
  .article-body thead {
    background: rgba(6,182,212,0.1);
    border-bottom: 1px solid rgba(6,182,212,0.25);
  }
  .article-body th {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #22d3ee;
    padding: 0.85rem 1.1rem;
    text-align: left;
    font-weight: 600;
  }
  .article-body td {
    padding: 0.8rem 1.1rem;
    color: #b0bec5;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    vertical-align: top;
  }
  .article-body tr:last-child td { border-bottom: none; }
  .article-body tbody tr:nth-child(even) { background: rgba(255,255,255,0.02); }
  .article-body tbody tr:hover { background: rgba(6,182,212,0.04); transition: background 0.2s; }

  /* ── Links ── */
  .article-body a {
    color: #22d3ee;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    transition: color 0.2s, text-decoration-color 0.2s;
  }
  .article-body a:hover { color: #a5f3fc; }

  /* ── Strong & Em ── */
  .article-body strong { color: #e2e8f0; font-weight: 600; }
  .article-body em { color: #a78bfa; font-style: italic; }

  /* ── Images ── */
  .article-body img {
    max-width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.07);
    margin: 1.5rem auto;
    display: block;
  }

  /* ── HR ── */
  .article-body hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent);
    margin: 3rem 0;
  }

  /* ── Share button hover ── */
  .copy-btn:hover { background: #0891b2 !important; }
  .copy-btn:active { transform: scale(0.97); }
`;

export default function BlogPost({ post }: { post: Post }) {
    if (!post) {
        return (
            <div style={{ background: '#080b10', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6b7280' }}>// Post not found.</p>
            </div>
        );
    }

    const canonicalUrl = `${SITE_URL}/articles/${post.id}`;
    const ogImage = `${SITE_URL}/og-image.png`;
    const description = post.summary
        ? stripHtml(post.summary).substring(0, 160)
        : stripHtml(post.content).substring(0, 160);
    const readTime = estimateReadTime(post.content);
    const wordCount = stripHtml(post.content).split(/\s+/).length;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description,
        datePublished: post.published,
        dateModified: post.updated || post.published,
        author: {
            '@type': 'Person',
            name: post.author.displayName,
            ...(post.author.image ? { image: post.author.image.url } : {}),
        },
        publisher: {
            '@type': 'Organization',
            name: BLOG_NAME,
            url: SITE_URL,
        },
        url: canonicalUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        ...(post.labels ? { keywords: post.labels.join(', ') } : {}),
        wordCount,
        timeRequired: `PT${readTime}M`,
        inLanguage: 'en-US',
        isPartOf: { '@type': 'Blog', name: BLOG_NAME, url: SITE_URL },
    };

    const handleCopy = () => {
        if (typeof window !== 'undefined') {
            window.navigator.clipboard.writeText(window.location.href).catch(() => {});
        }
    };

    return (
        <div style={{ background: '#080b10', minHeight: '100vh', color: '#c9d1d9' }}>
            <Head>
                {/* ── Primary ── */}
                <title>{`${post.title} | ${BLOG_NAME}`}</title>
                <meta name="description" content={description} />
                {post.labels && <meta name="keywords" content={post.labels.join(', ')} />}
                <meta name="author" content={post.author.displayName} />
                <link rel="canonical" href={canonicalUrl} />

                {/* ── Open Graph ── */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`${post.title} | ${BLOG_NAME}`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={post.title} />
                <meta property="og:site_name" content={BLOG_NAME} />
                <meta property="og:locale" content="en_US" />
                {/* Article-specific OG */}
                <meta property="article:published_time" content={post.published} />
                {post.updated && <meta property="article:modified_time" content={post.updated} />}
                <meta property="article:author" content={post.author.displayName} />
                {post.labels?.map(label => (
                    <meta key={label} property="article:tag" content={label} />
                ))}
                <meta property="article:section" content="Gaming" />

                {/* ── Twitter / X ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@GameCentralGG" />
                <meta name="twitter:creator" content="@GameCentralGG" />
                <meta name="twitter:title" content={`${post.title} | ${BLOG_NAME}`} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:image:alt" content={post.title} />
                <meta name="twitter:label1" content="Reading time" />
                <meta name="twitter:data1" content={`${readTime} min read`} />
                {post.labels?.[0] && <meta name="twitter:label2" content="Category" />}
                {post.labels?.[0] && <meta name="twitter:data2" content={post.labels[0]} />}

                {/* ── Robots ── */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

                {/* ── Mobile ── */}
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="theme-color" content="#080b10" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

                {/* ── Favicons ── */}
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

                {/* ── Fonts ── */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />

                {/* ── JSON-LD ── */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                {/* ── Article styles ── */}
                <style>{articleStyles}</style>
            </Head>

            {/* ── Top gradient bar ── */}
            <div style={{ height: 3, background: 'linear-gradient(90deg, #7c3aed, #22d3ee, #7c3aed)' }} />

            {/* ── Ambient glow ── */}
            <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
                <div style={{
                    position: 'absolute', top: '-15%', left: '5%',
                    width: '55vw', height: '55vw', maxWidth: 650,
                    background: 'radial-gradient(ellipse, rgba(124,58,237,0.09) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>

                {/* ── NAV ── */}
                <nav style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1.5rem 1rem' }}>
                    <Link href="/articles" style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11, letterSpacing: '0.15em', color: '#22d3ee',
                        textDecoration: 'none', textTransform: 'uppercase', fontWeight: 600,
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        transition: 'gap 0.2s, opacity 0.2s', opacity: 0.85,
                    }}>
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to News
                    </Link>
                </nav>

                {/* ── ARTICLE HEADER ── */}
                <header style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1.5rem 0' }}>

                    {/* Tags row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: '1.5rem' }}>
                        {post.labels?.slice(0, 3).map(label => (
                            <span key={label} style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
                                border: '1px solid rgba(6,182,212,0.3)', color: 'rgba(6,182,212,0.85)',
                                borderRadius: 4, padding: '3px 8px',
                            }}>
                                {label}
                            </span>
                        ))}
                        {(!post.labels || post.labels.length === 0) && (
                            <span style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
                                border: '1px solid rgba(124,58,237,0.4)', color: 'rgba(167,139,250,0.85)',
                                borderRadius: 4, padding: '3px 8px',
                            }}>
                                Featured Intel
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontWeight: 900,
                        fontSize: 'clamp(1.9rem, 5vw, 3rem)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        color: '#f0f0ff',
                        marginBottom: '2rem',
                    }}>
                        {post.title}
                    </h1>

                    {/* Author + meta bar */}
                    <div style={{
                        display: 'flex', flexWrap: 'wrap',
                        alignItems: 'center', justifyContent: 'space-between',
                        gap: '1rem',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        padding: '1.1rem 0',
                        marginBottom: '3.5rem',
                    }}>
                        {/* Author */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 38, height: 38, borderRadius: '50%',
                                background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0,
                                border: '1.5px solid rgba(6,182,212,0.25)',
                            }}>
                                {post.author.displayName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <p style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 13, fontWeight: 600, color: '#e2e8f0',
                                    margin: 0, lineHeight: 1.3,
                                }}>
                                    {post.author.displayName}
                                </p>
                                <time dateTime={post.published} style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 11, color: '#4b5563',
                                }}>
                                    {formatDate(post.published)}
                                    {post.updated && post.updated !== post.published && (
                                        <span style={{ marginLeft: 8, color: '#374151' }}>
                                            · Updated {formatDateShort(post.updated)}
                                        </span>
                                    )}
                                </time>
                            </div>
                        </div>

                        {/* Read stats */}
                        <div style={{
                            display: 'flex', gap: 16,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11, color: '#4b5563',
                        }}>
                            <span>⏱ {readTime} min read</span>
                            <span>📝 {wordCount.toLocaleString()} words</span>
                            {post.replies && parseInt(post.replies.totalItems) > 0 && (
                                <span>💬 {post.replies.totalItems} comments</span>
                            )}
                        </div>
                    </div>
                </header>

                {/* ── ARTICLE BODY ── */}
                <main style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
                    <article
                        className="article-body"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* ── Labels footer ── */}
                    {post.labels && post.labels.length > 0 && (
                        <div style={{
                            marginTop: '3rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8,
                        }}>
                            <span style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 11, color: '#4b5563', marginRight: 4,
                            }}>
                                Tags:
                            </span>
                            {post.labels.map(label => (
                                <span key={label} style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
                                    background: 'rgba(124,58,237,0.08)',
                                    border: '1px solid rgba(124,58,237,0.2)',
                                    color: '#a78bfa',
                                    borderRadius: 5, padding: '4px 10px', cursor: 'default',
                                }}>
                                    {label}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* ── Share card ── */}
                    <div style={{
                        marginTop: '4rem',
                        padding: '2.5rem',
                        background: 'rgba(22,27,34,0.9)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 16,
                        textAlign: 'center',
                    }}>
                        <p style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10, letterSpacing: '0.2em', color: '#22d3ee',
                            textTransform: 'uppercase', marginBottom: 12,
                        }}>
                            // Mission Complete
                        </p>
                        <h3 style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 900, fontSize: '1.25rem',
                            color: '#f0f0ff', marginBottom: 8,
                        }}>
                            Enjoyed this Intel?
                        </h3>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: '#6b7280', marginBottom: '1.8rem', fontSize: '0.95rem',
                        }}>
                            Share this mission brief with your squad.
                        </p>
                        <button
                            className="copy-btn"
                            onClick={handleCopy}
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 12, letterSpacing: '0.12em',
                                background: 'linear-gradient(135deg, #7c3aed, #0891b2)',
                                color: '#fff', fontWeight: 700,
                                border: 'none', borderRadius: 8,
                                padding: '0.85rem 2.2rem',
                                cursor: 'pointer', transition: 'transform 0.15s',
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                            }}
                        >
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            COPY SECURE LINK
                        </button>
                    </div>

                    {/* ── Back link ── */}
                    <div style={{ marginTop: '3rem', marginBottom: '5rem', textAlign: 'center' }}>
                        <Link href="/articles" style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11, letterSpacing: '0.14em',
                            color: '#4b5563', textDecoration: 'none',
                            textTransform: 'uppercase', transition: 'color 0.2s',
                        }}>
                            ← Return to News Feed
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
    const slug = params?.url as string;

    // Extract ID from slug (format: name-of-post-POSTID)
    const parts = slug.split('-');
    const postId = parts[parts.length - 1];

    const apiKey = process.env.BLOGGER_API_KEY;
    const blogId = process.env.BLOG_ID;
    const fields = 'id,title,published,updated,content,summary,labels,author,url,replies';
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const post = await response.json();

        if (post.error) return { notFound: true };

        // Cache for 5 minutes at CDN edge, stale-while-revalidate for 10 min
        res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

        return { props: { post } };
    } catch {
        return { notFound: true };
    }
};