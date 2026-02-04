import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gamesData } from '@/data/gamesData';
import { Play, X, Info, Share2, Star, ChevronRight } from 'lucide-react';

export default function GameDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [isPlaying, setIsPlaying] = useState(false);

  // Wait until router is ready
  if (!router.isReady) return null;

  const game = gamesData.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Game Not Found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  const suggestedGames = gamesData
    .filter((g) => g.id !== id)
    .slice(0, 4);

   return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      {/* Breadcrumbs - Essential for SEO/AdSense */}
      <nav className="container mx-auto px-4 py-4 flex items-center gap-2 text-xs font-medium text-gray-500">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <ChevronRight size={12} />
        <span className="text-gray-300 line-clamp-1">{game.title}</span>
      </nav>

      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT: Game Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Play Area Wrapper */}
            <section className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10 group">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group/btn flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all hover:scale-105"
                >
                  <Play fill="white" size={24} />
                  <span className="text-xl font-black tracking-tighter uppercase">Play Now</span>
                </button>
                <p className="mt-4 text-sm font-medium text-gray-400">Full Screen Supported</p>
              </div>
            </section>

            {/* Game Info Card */}
            <div className="bg-[#1a1d23] rounded-2xl p-6 md:p-8 border border-white/5 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h1 className="text-3xl md:text-4xl font-black text-white">{game.title}</h1>
                <div className="flex gap-2">
                  <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"><Share2 size={20} /></button>
                  <button className="flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-xl border border-yellow-500/20">
                    <Star size={18} fill="currentColor" />
                    <span className="font-bold">4.9</span>
                  </button>
                </div>
              </div>

              {/* Tags/Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Action', 'Multiplayer', 'Web Games'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full border border-blue-600/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="prose prose-invert prose-blue max-w-none text-gray-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: game.description }}
              />
            </div>

            {/* Suggested Section (Mobile/Bottom) */}
            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded-full" />
                More Games You will Love
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {suggestedGames.map((g) => (
                  <Link key={g.id} href={`/game/${g.id}`} className="group block">
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-2 bg-gray-800">
                      <img src={g.thumbnail} alt={g.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-sm font-bold line-clamp-1 group-hover:text-blue-400 transition-colors">{g.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: Sidebar (4 Cols) - AdSense Goldmine */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#1a1d23] border border-white/5 rounded-2xl p-6 sticky top-24">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Info size={16} /> Sponsored Content
              </h3>
              {/* Ad Unit Placeholder */}
              <div className="aspect-[300/600] w-full bg-gray-900 rounded-xl flex flex-col items-center justify-center border border-dashed border-gray-700 text-gray-600">
                <p className="text-[10px] uppercase font-bold italic mb-2">Advertisement</p>
                <div className="w-12 h-12 border-2 border-gray-800 rounded-full animate-pulse" />
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">How to Play</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Use your **Arrow Keys** or **WASD** to navigate. Press **Space** to jump. This game is optimized for high-performance browsers.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Fullscreen Player Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0b0c10]"
          >
            <div className="flex flex-col h-full">
              <div className="h-14 bg-gray-900 flex items-center justify-between px-6 border-b border-white/10">
                <h2 className="font-bold text-sm uppercase tracking-widest">{game.title}</h2>
                <button onClick={() => setIsPlaying(false)} className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-1.5 rounded-lg text-xs font-black uppercase hover:bg-red-500 hover:text-white transition-all">
                  <X size={16} /> Exit Theater
                </button>
              </div>
              <div className="flex-grow bg-black">
                <iframe src={game.gameUrl} className="w-full h-full border-0" allow="autoplay; fullscreen" allowFullScreen />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
