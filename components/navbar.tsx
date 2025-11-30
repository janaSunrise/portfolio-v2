'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useTheme } from 'next-themes';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="text-lg font-extrabold tracking-tight">
        ~/.sunrit
      </Link>
      <div className="flex items-center gap-3 sm:gap-4">
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
            className="ml-1 text-base sm:text-lg transition-colors hover:opacity-60 active:opacity-40"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '○' : '●'}
          </button>
        )}
      </div>
    </nav>
  );
}
