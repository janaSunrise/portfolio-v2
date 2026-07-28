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
        <h1 className="text-5xl md:text-6xl text-balance font-medium font-serif tracking-tight mb-8">
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
            i{"'"}m a backend and machine learning engineer, tinkering around with low-level
            systems way too much. mostly focused on writing clean code, and designing better
            systems.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            when i{"'"}m not building, you can find me reading, exploring
            low-level, or thinking about what makes great businesses.
          </p>
        </div>
      </section>

      {/* 01. what i'm doing */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base sm:text-lg font-bold uppercase tracking-normal">
          01. what im doing
        </h2>
        <ul className="text-sm sm:text-base leading-relaxed">
          <li>- bachelors in cs + ml</li>
          <li>- learning cuda and maths</li>
          <li>- spending more time with my guitar</li>
        </ul>
      </section>

      {/* 02. what i've done */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base sm:text-lg font-bold uppercase tracking-normal">
          02. what i{"'"}ve done
        </h2>
        <ul className="text-sm sm:text-base leading-relaxed">
          <li>
            - <Link href="https://github.com/0xSaturn">0xsaturn</Link>: built
            a web3 startup, raised $60,000. when i was 17.
          </li>
          <li>
            - built a tiny minecraft server hosting, made $8,000. i was 15.
          </li>
          <li>- accepted into SPC{"'"}s -1 to 0 program. couldn{"'"}t make it bc of college.</li>
          <li>- featured on young ai devs on cnbc tv18 by meta</li>
          <li>
            - went on a hackathon streak, winner/runner up in 5/5 in a row.
          </li>
          <li>
            - national finalist in spell bee (among 200k) when i was 12
          </li>
          <li>
            - partied @ ibw{"'"}25 in a diff city, the night before my finals
          </li>
        </ul>
      </section>

      {/* 03. where i've worked */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base sm:text-lg font-bold uppercase tracking-normal">
          03. where i{"'"}ve worked
        </h2>
        <ul className="flex flex-col gap-6">
          <li>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-base sm:text-lg">founding engineer</h3>
              <span className="text-sm sm:text-base text-foreground/50 shrink-0">
                dec {"'"}25 - may {"'"}26
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground/50">
              fiber
            </p>
            <p className="text-xs sm:text-sm leading-relaxed mt-2">
              re-architected a multi-tenant dealership platform and shipped 15+ core modules.
              built AI-native features, resilient auth and billing infra, and improved load times
              by 30-50% while cutting infrastructure costs by 20%.
            </p>
          </li>

          <li>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-base sm:text-lg">full-stack swe</h3>
              <span className="text-sm sm:text-base text-foreground/50 shrink-0">
                aug {"'"}23 - apr {"'"}24
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground/50">roofer.com</p>
            <p className="text-xs sm:text-sm leading-relaxed mt-2">
              built cv models for roof detection, gained 20% cost efficiency. worked on
              new auth and billing infra that handled 50k+ users concurrently.
            </p>
          </li>

          <li>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-base sm:text-lg">founding engineer</h3>
              <span className="text-sm sm:text-base text-foreground/50 shrink-0">
                feb {"'"}22 - dec {"'"}22
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground/50">0xSaturn</p>
            <p className="text-xs sm:text-sm leading-relaxed mt-2">
              built ethereum smart contracts & dapps, created automation tools
              for blockchain deployment and creating custom infra and protocols.
              secured $60k from polygon.
            </p>
          </li>

          <li>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-base sm:text-lg">full-stack swe</h3>
              <span className="text-sm sm:text-base text-foreground/50 shrink-0">
                oct {"'"}20 - nov {"'"}23
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground/50">vertex software</p>
            <p className="text-xs sm:text-sm leading-relaxed mt-2">
              shipped 10+ enterprise projects. optimized systems for 30-50%
              performance gains. automated deployments, cut deployment times by
              15-20%. integrated ml models into production while cutting down costs by 40%.
            </p>
          </li>

          <li>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-base sm:text-lg">cloud engineer</h3>
              <span className="text-sm sm:text-base text-foreground/50 shrink-0">
                oct {"'"}22 - dec {"'"}22
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground/50">opens.wiki</p>
            <p className="text-xs sm:text-sm leading-relaxed mt-2">
              orchestrated aws infra with terraform, designed scalable
              architecture, cut costs by 20%, increased perf by 10%. strategized
              blockchain modularity in cloud.
            </p>
          </li>

          <li>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-base sm:text-lg">ml researcher</h3>
              <span className="text-sm sm:text-base text-foreground/50 shrink-0">
                jul {"'"}21 - oct {"'"}21
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground/50">Airis4D</p>
            <p className="text-xs sm:text-sm leading-relaxed mt-2">
              replicated medical cnn papers. built antibiotic effectiveness
              model, 95% accuracy. improved model v2: 30% faster training, 15%
              better accuracy.
            </p>
          </li>
        </ul>
      </section>

      {/* 04. stuff i've built */}
      <section className="flex flex-col gap-2">
        <h2 className="text-base sm:text-lg font-bold uppercase tracking-normal">
          04. stuff i{"'"}ve built
        </h2>
        <ul className="text-sm sm:text-base leading-relaxed">
          <li>
            -{' '}
            <Link href="https://github.com/janaSunrise/courier">[courier]</Link>
            : http client tui. postman but make it terminal.
          </li>
          <li>
            -{' '}
            <Link href="https://github.com/janaSunrise/valspec">[valspec]</Link>
            : secrets management app. because .env files are scary.
          </li>
          <li>
            -{' '}
            <Link href="https://github.com/janaSunrise/radui">[radui]</Link>:
            terminal redis client in rust. redis-cli but actually usable.
          </li>
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
