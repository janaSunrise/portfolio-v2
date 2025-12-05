import { Clock } from '@/components/clock';
import { Spotify } from '@/components/spotify';

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-normal mb-4">
          <span>Vellore, India</span>
          <span>•</span>
          <Clock />
          <Spotify />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight mb-6">
          hey, i{"'"}m sunrit.
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-base leading-normal">
            i build things on the internet. helping robots take over the world.
          </p>
          <p className="text-sm sm:text-base leading-normal">
            when i{"'"}m not building, you can find me reading, exploring
            low-level, or thinking about what makes great businesses.
          </p>
        </div>
      </section>

      {/* 01. what i'm doing rn */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-normal">
          01. what i{"'"}m doing rn
        </h2>
        <ul className="text-sm sm:text-base leading-normal">
          <li>- bachelors in cs + ml</li>
          <li>- learning cuda, maths, and optimisation</li>
          <li>- studying low level systems and parallel programming</li>
        </ul>
      </section>

      {/* 02. what i've done */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-normal">
          02. what i{"'"}ve done
        </h2>
        <ul className="text-sm sm:text-base leading-normal">
          <li>- built a web3 startup, raised $60,000. when i was 17</li>
          <li>- built a tiny minecraft server hosting, made a whopping $8,000. i was 15</li>
          <li>- featured on young ai devs on cnbc tv18 by meta</li>
          <li>
            - went on a hackathon streak, winner/runner up in 5/5 in a row.
          </li>
          <li>
            - (almost) a national finalist in spell bee (among 200k) when i was
            12
          </li>
          <li>- partied @ ibw{"'25"} in a diff city, the night before my finals</li>
        </ul>
      </section>

      {/* 03. stuff i've built */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-normal">
          03. stuff i{"'"}ve built
        </h2>
        <ul className="text-sm sm:text-base leading-normal">
          <li>
            -{' '}
            <a
              href="https://github.com/janaSunrise/mactop"
              className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
            >
              mactop
            </a>
            : built an apple silicon monitoring tui
          </li>
          <li>
            -{' '}
            <a
              href="#"
              className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
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
