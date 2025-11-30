import { WIP } from '@/components/wip';

export default function Library() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] py-8 sm:py-12">
      <WIP
        title="library"
        logs={['compiling thoughts...', 'indexing books...']}
      />
    </div>
  );
}
