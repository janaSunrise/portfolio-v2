import { Clock } from '@/components/clock';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10 bg-background text-foreground">
      <div className="w-full max-w-2xl space-y-8">
        <section className="flex flex-col gap-4 pt-12">
          <div className="flex items-center gap-2 text-sm text-foreground uppercase tracking-widest">
            <span>Vellore, India</span>
            <span>•</span>
            <Clock />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-playfair">
            hey, i&apos;m sunrit.
          </h1>
          <p className="text-base text-foreground leading-relaxed">
            i build things on the internet. helping robots take over the world.
          </p>
          <p className="text-base text-foreground leading-relaxed">
            when i{"'"}m not building, you can find me reading, exploring
            low-level, or thinking about what makes great businesses.
          </p>
        </section>

        {/* 01. what i'm doing rn */}
        <section className="flex flex-col gap-4">
          <h2 className="text-base font-bold uppercase tracking-widest">
            01. what i{"'"}m doing rn
          </h2>
          <div className="text-base leading-relaxed space-y-2">
            <ul>
              <li>- attempting to survive college and final exams</li>
              <li>
                - studying low-level systems, parallel programming and
                distributed systems
              </li>
            </ul>
          </div>
        </section>

        {/* 02. what i've done */}
        {/* 03. stuff i've built */}
        {/* footer */}
      </div>
    </div>
  );
}
