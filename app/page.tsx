import { Clock } from '@/components/clock';
import { Spotify } from '@/components/spotify';

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="underline underline-offset-4 hover:decoration-2 transition-all"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-medium font-serif tracking-tight mb-8">
          hey, i{"'"}m sunrit.
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm uppercase tracking-normal mb-6">
          <span>Vellore, India</span>
          <span>•</span>
          <Clock />
          <div className="w-full sm:w-auto flex items-center gap-2">
            <Spotify />
          </div>
        </div>
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
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-normal">
          01. what im doing rn
        </h2>
        <ul className="text-sm sm:text-base leading-relaxed">
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
        <ul className="text-sm sm:text-base leading-relaxed">
          <li>
            - <Link href="https://github.com/0xSaturn">[0xsaturn]</Link>: built
            a web3 startup, raised $60,000. when i was 17.
          </li>
          <li>
            - built a tiny minecraft server hosting, made $8,000. i was 15.
          </li>
          <li>- featured on young ai devs on cnbc tv18 by meta</li>
          <li>
            - went on a hackathon streak, winner/runner up in 5/5 in a row.
          </li>
          <li>
            - (almost) a national finalist in spell bee (among 200k) when i was
            12
          </li>
          <li>
            - partied @ ibw{"'25"} in a diff city, the night before my finals
          </li>
        </ul>
      </section>

      {/* 03. stuff i've built */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-normal">
          03. stuff i{"'"}ve built
        </h2>
        <ul className="text-sm sm:text-base leading-relaxed">
          <li>
            - <Link href="https://github.com/janaSunrise/mactop">[mactop]</Link>
            : built an apple silicon monitoring tui
          </li>
          <li>
            - <Link href="#">[socal]</Link>: built a social calendar for
            friends. no one shared their schedule {':('}
          </li>
          <li>
            -{' '}
            <Link href="https://github.com/janaSunrise/mathsidian">
              [mathsidian]
            </Link>
            : my take on math tooling for obsidian. abandoned bc no time.
          </li>
          <li>
            -{' '}
            <Link href="https://github.com/janaSunrise/spotify-playing-readme">
              [spotify-playing-readme]
            </Link>
            : display your spotify listening with a beautiful widget.
          </li>
        </ul>
      </section>
    </>
  );
}
