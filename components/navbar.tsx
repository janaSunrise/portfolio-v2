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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-0 max-w-2xl mx-auto w-full bg-background">
      <Link
        href="/"
        className="text-lg font-extrabold tracking-tight"
      >
        ~/.sunrit
      </Link>
      <div className="flex items-center gap-5 text-md font-medium text-foreground decoration-2">
        <Link
          href="#"
          className="hover:text-foreground hover:underline underline-offset-4 decoration-zinc-400"
        >
          log
        </Link>
        <Link
          href="/library"
          className="hover:text-foreground hover:underline underline-offset-4 decoration-zinc-400"
        >
          library
        </Link>
        <Link
          href="/hi"
          className="hover:text-foreground hover:underline underline-offset-4 decoration-zinc-400"
        >
          say hi
        </Link>
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-1 text-lg transition-colors hover:text-foreground/60"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '○' : '●'}
          </button>
        )}
      </div>
    </nav>
  );
}
