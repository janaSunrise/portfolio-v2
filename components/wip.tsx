interface WIPProps {
  title?: string;
  logs?: string[];
}

export function WIP({
  title = 'page',
  logs = ['compiling thoughts...', 'loading content...']
}: WIPProps) {
  return (
    <div className="w-full max-w-lg">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">
          Under Construction
        </p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight font-playfair">
          /{title}
        </h1>
      </div>

      <div className="border border-zinc-200 dark:border-zinc-800 p-5 font-mono text-sm space-y-3">
        <p className="text-foreground">
          <span className="text-green-500">➜</span>{' '}
          <span className="text-zinc-400">~</span> bun run build:{title}
        </p>

        <div className="space-y-1.5 pl-4 border-l border-zinc-200 dark:border-zinc-800 ml-1">
          {logs.map((log, index) => (
            <p key={index} className="text-zinc-500">
              <span className="text-blue-500 mr-2">›</span>
              {log}
            </p>
          ))}
          <p className="text-amber-500">
            <span className="mr-2">⚠</span>
            Module not found: Can&apos;t resolve &apos;{title}&apos;
          </p>
        </div>

        <p className="text-foreground">
          <span className="text-red-500">➜</span>{' '}
          <span className="text-zinc-400">~</span>{' '}
          <span className="inline-block w-2 h-4 bg-foreground/70 animate-pulse" />
        </p>
      </div>
    </div>
  );
}
