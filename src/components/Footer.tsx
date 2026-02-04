import Link from 'next/link';
import { Gamepad2, Twitter, Youtube, Instagram, Github } from 'lucide-react';

const footerSections = {
  platform: [
    { href: '/news', label: 'Latest News' },
    { href: '/reviews', label: 'Game Reviews' },
    { href: '/guides', label: 'Pro Guides' },
    { href: '/hardware', label: 'Hardware' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
  ],
  support: [
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/sitemap', label: 'Sitemap' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/5 bg-gray-950 text-gray-400">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
                <Gamepad2 className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-white uppercase">
                My Game Ground
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              The ultimate destination for gaming news, deep-dive reviews, and pro-level guides. 
              Built by gamers, for gamers.
            </p>
            <div className="flex gap-4">
              <Twitter className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-red-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Platform</h3>
            <ul className="space-y-2 text-sm">
              {footerSections.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              {footerSections.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (Bonus UX) */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Stay Updated</h3>
            <p className="mb-4 text-xs">Get the weekly gaming wrap-up.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full rounded-l-md bg-gray-900 border-none px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none" 
              />
              <button className="rounded-r-md bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-500">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center md:flex md:items-center md:justify-between md:text-left">
          <p className="text-xs">
            © {currentYear} My Game Ground. All rights reserved. Game on.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-xs md:mt-0">
            {footerSections.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}