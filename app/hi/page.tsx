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
    <section className="flex flex-col gap-4 sm:gap-6">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight">
          say hi
        </h1>
      </div>

      <p className="text-sm sm:text-base text-foreground leading-relaxed">
        feel free to reach out! i{"'"}ll respond the fastest on discord.
      </p>

      <div className="flex flex-col gap-2 sm:gap-4 pt-4">
        <button
          onClick={copyEmail}
          className="group flex items-center justify-between py-4 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-left cursor-pointer"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest">Email</span>
            <span className="text-sm sm:text-base text-foreground break-all sm:break-normal">
              sunritjana.06@gmail.com
            </span>
          </div>
          <span className="text-xs group-hover:text-foreground transition-colors ml-2 shrink-0">
            {copied ? 'copied!' : 'click to copy'}
          </span>
        </button>

        <a
          href="https://twitter.com/janaSunrise"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-4 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest">Twitter</span>
            <span className="text-sm sm:text-base text-foreground">
              @janaSunrise
            </span>
          </div>
          <span className="group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm sm:text-base">
            ↗
          </span>
        </a>

        <a
          href="https://discord.com/users/sunritjana"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-4 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest">Discord</span>
            <span className="text-sm sm:text-base text-foreground">
              @sunritjana
            </span>
          </div>
          <span className="group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm sm:text-base">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
