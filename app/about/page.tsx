import { WIP } from '@/components/wip';

export default function About() {
  return (
    <section className="flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] py-12">
      <WIP
        title="about"
        logs={['writing stories...', 'curating memories...']}
      />
    </section>
  );
}
