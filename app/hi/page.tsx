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
    <div className="min-h-screen flex flex-col items-center px-6 py-10 bg-background text-foreground">
      <div className="w-full max-w-2xl space-y-8">
        <section className="flex flex-col gap-6 pt-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight font-playfair">
              say hi
            </h1>
          </div>

          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            feel free to reach out! i{"'"}ll respond the fastest on discord.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <button
              onClick={copyEmail}
              className="group flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-left cursor-pointer"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-widest text-zinc-400">
                  Email
                </span>
                <span className="text-foreground">sunritjana.06@gmail.com</span>
              </div>
              <span className="text-xs text-zinc-400 group-hover:text-foreground transition-colors">
                {copied ? 'copied!' : 'click to copy'}
              </span>
            </button>

            <a
              href="https://twitter.com/janaSunrise"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-widest text-zinc-400">
                  Twitter
                </span>
                <span className="text-foreground">@janaSunrise</span>
              </div>
              <span className="text-zinc-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                ↗
              </span>
            </a>

            <a
              href="https://discord.com/users/sunritjana"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-widest text-zinc-400">
                  Discord
                </span>
                <span className="text-foreground">@sunritjana</span>
              </div>
              <span className="text-zinc-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                ↗
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
