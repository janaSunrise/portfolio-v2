import { WIP } from '@/components/wip';

export default function Library() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-background text-foreground">
      <WIP
        title="library"
        logs={['compiling thoughts...', 'indexing books...']}
      />
    </main>
  );
}
