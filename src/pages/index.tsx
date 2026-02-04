import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { gamesData } from '@/data/gamesData';
import Link from "next/link";
import { Play, TrendingUp } from 'lucide-react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* Hero / Featured Section (Improves UX & SEO) */}
      <section className="bg-gray-900 py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
              <TrendingUp size={14} /> Trending Now
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              YOUR GAME GROUND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                ALWAYS ON
              </span>
            </h1>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              Explore the latest releases, pro-level walkthroughs, and community favorites.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">

        {/* Grid Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            Popular Games
          </h2>
          <div className="h-[2px] flex-grow mx-4 bg-gray-200 hidden sm:block"></div>
        </div>

        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
          {gamesData.map((game) => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className="group relative flex flex-col"
            >
              {/* Card Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* Thumbnail */}
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay on Hover (UX Touch) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="bg-blue-600 p-3 rounded-full text-white transform scale-75 group-hover:scale-100 transition-transform">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>

                {/* Category Badge (Optional: If your data has tags) */}
                <div className="absolute top-2 left-2">
                  <span className="bg-black/60 backdrop-blur-md text-[10px] text-white px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                    {game.category || 'Action'}
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="mt-3">
                <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {game.title}
                </h3>
                <p className="text-[11px] md:text-xs text-gray-500 font-medium">
                  2.4M Plays • 4.8 ⭐
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
