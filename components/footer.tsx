import Image from 'next/image';

import { Clock } from '@/components/clock';

const links = [
  { href: 'https://github.com/janaSunrise', label: 'github' },
  { href: 'https://x.com/janaSunrise', label: 'x' },
  { href: 'https://www.linkedin.com/in/SunritJana', label: 'linkedin' },
  { href: 'mailto:sunritjana.06@gmail.com', label: 'email' }
];

const art = {
  light: '/art/footer-day.webp',
  dark: '/art/footer-night.webp'
};

const artClassName = 'w-full h-auto select-none pointer-events-none';

export function Footer() {
  return (
    <footer className="mt-auto pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2 border-t border-foreground/10 pt-5 text-xs sm:text-sm">
        <nav className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground"
              {...(link.href.startsWith('http') && {
                target: '_blank',
                rel: 'noopener noreferrer'
              })}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <span className="text-foreground/50 tabular-nums">
          <Clock />
        </span>
      </div>

      <div aria-hidden="true" className="mt-10 -mb-8">
        <Image
          src={art.light}
          alt=""
          width={2048}
          height={768}
          sizes="(min-width: 768px) 672px, 100vw"
          className={`${artClassName} block mix-blend-multiply dark:hidden`}
        />
        <Image
          src={art.dark}
          alt=""
          width={2048}
          height={768}
          sizes="(min-width: 768px) 672px, 100vw"
          className={`${artClassName} hidden mix-blend-screen dark:block`}
        />
      </div>
    </footer>
  );
}
