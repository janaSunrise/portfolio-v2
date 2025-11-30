'use client';

import { useState } from 'react';

export default function SayHi() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('sunritjana.06@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col gap-5 sm:gap-6">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-playfair">
          say hi
        </h1>
      </div>

      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
        feel free to reach out! i{"'"}ll respond the fastest on discord.
      </p>

      <div className="flex flex-col gap-3 sm:gap-4 pt-2">
        <button
          onClick={copyEmail}
          className="group flex items-center justify-between py-3 sm:py-4 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-left cursor-pointer"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400">
              Email
            </span>
            <span className="text-sm sm:text-base text-foreground break-all sm:break-normal">
              sunritjana.06@gmail.com
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-zinc-400 group-hover:text-foreground transition-colors ml-2 shrink-0">
            {copied ? 'copied!' : 'click to copy'}
          </span>
        </button>

        <a
          href="https://twitter.com/janaSunrise"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-3 sm:py-4 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400">
              Twitter
            </span>
            <span className="text-sm sm:text-base text-foreground">@janaSunrise</span>
          </div>
          <span className="text-zinc-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm sm:text-base">
            ↗
          </span>
        </a>

        <a
          href="https://discord.com/users/sunritjana"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-3 sm:py-4 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400">
              Discord
            </span>
            <span className="text-sm sm:text-base text-foreground">@sunritjana</span>
          </div>
          <span className="text-zinc-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm sm:text-base">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
