'use client';

import { usePathname } from 'next/navigation';

import { useTheme } from 'next-themes';
import { Link } from 'next-view-transitions';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const mounted = typeof window !== 'undefined';

  const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/library', label: 'library' },
    { href: '/hi', label: 'say hi' }
  ];

  return (
    <nav className="flex items-center justify-between pt-4 border-foreground/10">
      <div className="flex items-center">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className={`text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 group ${
                  isActive
                    ? 'text-foreground'
                    : 'text-foreground/50 hover:text-foreground'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-foreground shrink-0 transition-all duration-200" />
                )}
                {!isActive && (
                  <span className="w-1.5 h-1.5 shrink-0 opacity-0 group-hover:opacity-100 group-hover:bg-foreground/30 transition-all duration-200" />
                )}
                <span>{link.label}</span>
              </Link>
              {index < links.length - 1 && (
                <span className="mx-2 text-foreground/10">/</span>
              )}
            </div>
          );
        })}
      </div>
      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-base sm:text-lg transition-all duration-200 ease-out hover:opacity-70 active:scale-95 p-1.5 rounded-md"
          aria-label="Toggle theme"
        >
          <span className="inline-block transition-opacity duration-200 ease-out">
            {theme === 'dark' ? '○' : '●'}
          </span>
        </button>
      )}
    </nav>
  );
}
