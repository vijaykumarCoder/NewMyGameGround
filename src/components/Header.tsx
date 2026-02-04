import Link from 'next/link';
import { Search, Menu, Gamepad2 } from 'lucide-react'; // Optional: Install lucide-react


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">

        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 transition-all hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <Gamepad2 className="text-white" size={24} />
            </div>
            <span className="hidden bg-gradient-to-r from-white to-gray-400 bg-clip-text text-xl font-black tracking-tight text-transparent sm:block">
              MY GAME GROUND
            </span>
          </Link>

          {/* Center-Left: Navigation (Crucial for AdSense "Ease of Use") */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-400 md:flex">
            <Link href="/news" className="hover:text-blue-400 transition-colors">News</Link>
            <Link href="/guides" className="hover:text-blue-400 transition-colors">Guides</Link>
            <Link href="/reviews" className="hover:text-blue-400 transition-colors">Reviews</Link>
          </nav>
        </div>

        {/* Right: Search & Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search games..."
              className="h-9 w-64 rounded-full bg-gray-900 border border-gray-800 pl-9 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button className="rounded-full bg-blue-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500 transition-all">
            Join Now
          </button>

          {/* Mobile Menu Toggle */}
          <button className="block md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
