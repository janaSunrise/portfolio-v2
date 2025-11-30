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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-0 max-w-2xl mx-auto w-full bg-background">
      <Link
        href="/"
        className="text-lg font-bold tracking-tight hover:underline underline-offset-4 decoration-zinc-400 decoration-0"
      >
        ~/.sunrit
      </Link>
      <div className="flex gap-4 text-lg font-medium text-foreground items-center decoration-2">
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
          href="/say-hi"
          className="hover:text-foreground hover:underline underline-offset-4 decoration-zinc-400"
        >
          say hi
        </Link>
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:text-foreground transition-colors ml-2 text-lg"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '○' : '●'}
          </button>
        )}
      </div>
    </nav>
  );
}
