import { Clock } from '@/components/clock';

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest mb-4">
          <span>Vellore, India</span>
          <span>•</span>
          <Clock />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-6">
          hey, i{"'"}m sunrit.
        </h1>
        <div className="flex flex-col gap-2">
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
      <section className="flex flex-col gap-2">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-widest">
          01. what i{"'"}m doing rn
        </h2>
        <ul className="text-sm sm:text-base leading-relaxed">
          <li>- bachelors in cs + ml</li>
          <li>- studying low level systems and parallel programming</li>
        </ul>
      </section>

      {/* 02. what i've done */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-widest">
          02. what i{"'"}ve done
        </h2>
        <ul className="text-sm sm:text-base leading-relaxed">
          <li>- built a startup, raised $60,000. all when i was 17.</li>
          <li>- featured on cnbc tv18 by meta as young ai devs.</li>
          <li>
            - went on a hackathon streak, winner/runner up in 5/5 in a row.
          </li>
          <li>
            - (almost) a national finalist in spell bee (among 800k) when i was
            12.
          </li>
        </ul>
      </section>

      {/* 03. stuff i've built */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-widest">
          03. stuff i{"'"}ve built
        </h2>
        <ul className="text-sm sm:text-base leading-relaxed">
          <li>
            -{' '}
            <a
              href="https://github.com/janaSunrise/mactop"
              className="hover:underline underline-offset-4 decoration-2 transition-all"
            >
              mactop
            </a>
            : built an apple silicon monitoring tui
          </li>
          <li>
            -{' '}
            <a
              href="#"
              className="hover:underline underline-offset-4 decoration-2 transition-all"
            >
              socal
            </a>
            : built a social calendar for friends. no one shared their schedule{' '}
            {':('}
          </li>
        </ul>
      </section>
    </>
  );
}
