import { Clock } from '@/components/clock';

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest mb-5 sm:mb-6">
          <span>Vellore, India</span>
          <span>•</span>
          <Clock />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-playfair mb-5 sm:mb-6">
          hey, i{"'"}m sunrit.
        </h1>
        <div className="flex flex-col gap-3 sm:gap-4">
          <p className="text-sm sm:text-base leading-relaxed">
            i build things on the internet. helping robots take over the world.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            when i{"'"}m not building, you can find me reading, exploring
            low-level, or thinking about what makes great businesses.
          </p>
        </div>
      </section>

      {/* 01. what i'm doing rn */}
      <section className="flex flex-col gap-3 sm:gap-4">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-widest">
          01. what i{"'"}m doing rn
        </h2>
        <div className="text-sm sm:text-base leading-relaxed space-y-2">
          <ul className="space-y-1.5">
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
    </>
  );
}
