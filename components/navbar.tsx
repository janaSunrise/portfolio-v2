'use client';

import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';

import { useTheme } from 'next-themes';
import { Link } from 'next-view-transitions';

const links = [
  { href: '/', label: 'home' },
  { href: '/work', label: 'work' },
  { href: '/library', label: 'library' },
  { href: '/hi', label: 'say hi' }
];

const noopSubscribe = () => () => {};

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  // false during SSR and hydration, true afterwards — avoids a hydration mismatch
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <nav className="flex items-center justify-between pt-4">
      <div className="flex items-center">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className={`group flex items-center gap-1.5 text-xs sm:text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-foreground'
                    : 'text-foreground/50 hover:text-foreground'
                }`}
              >
                <span
                  className={`size-1.5 shrink-0 transition-opacity duration-200 ${
                    isActive
                      ? 'bg-accent'
                      : 'bg-foreground/50 opacity-0 group-hover:opacity-100'
                  }`}
                />
                <span>{link.label}</span>
              </Link>
              {index < links.length - 1 && (
                <span className="mx-2 text-foreground/10">/</span>
              )}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="text-base sm:text-lg transition duration-200 ease-out hover:opacity-70 active:scale-95 p-1.5 rounded-md"
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        disabled={!mounted}
      >
        <span
          className={`inline-block transition-opacity duration-200 ease-out ${mounted ? '' : 'opacity-0'}`}
        >
          {isDark ? '○' : '●'}
        </span>
      </button>
    </nav>
  );
}
