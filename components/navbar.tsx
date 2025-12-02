'use client';

import Link from 'next/link';

import { useTheme } from 'next-themes';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const mounted = typeof window !== 'undefined';

  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="text-lg font-bold tracking-tight">
        ~/.sunrit
      </Link>
      <div className="flex items-center gap-2 sm:gap-4 decoration-2">
        <Link
          href="/about"
          className="text-xs sm:text-sm hover:underline underline-offset-4 transition-all"
        >
          about
        </Link>
        <Link
          href="/library"
          className="text-xs sm:text-sm hover:underline underline-offset-4 transition-all"
        >
          library
        </Link>
        <Link
          href="/hi"
          className="text-xs sm:text-sm hover:underline underline-offset-4 transition-all"
        >
          say hi
        </Link>
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-base sm:text-lg transition-colors active:opacity-40"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '○' : '●'}
          </button>
        )}
      </div>
    </nav>
  );
}
