import { Clock } from '@/components/clock';
import { ListItem } from '@/components/list-item';
import { Spotify } from '@/components/spotify';
import { TextLink } from '@/components/text-link';

const projects = [
  {
    name: 'metalloid',
    description: 'metal programming in python. gpu go brr, no swift required.'
  },
  {
    name: 'zelda',
    description: 'typescript type checker in rust. tsc but fast.'
  },
  {
    name: 'courier',
    description: 'http client tui. postman but make it terminal.'
  },
  {
    name: 'valspec',
    description: 'secrets management app. because .env files are scary.'
  },
  {
    name: 'radui',
    description: 'terminal redis client in rust. redis-cli but actually usable.'
  },
  { name: 'mactop', description: 'built an apple silicon monitoring tui' },
  {
    name: 'mathsidian',
    description: 'my take on math tooling for obsidian. abandoned bc no time.'
  }
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="text-5xl md:text-6xl text-balance font-medium font-serif tracking-tight mb-8">
          hey, i{"'"}m sunrit.
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm lowercase mb-6">
          <span>vellore, india</span>
          <span>•</span>
          <Clock />
          <div className="w-full sm:w-auto flex items-center gap-2">
            <Spotify />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex flex-col gap-1 text-sm sm:text-base leading-relaxed">
            the internet{"'"}s my home. i{"'"}m a backend and ml engineer who
            spends way too much time on low-level systems. right now i{"'"}m
            working on first principles.
          </p>
          <p className="flex flex-col gap-1 text-sm sm:text-base leading-relaxed">
            before that i was a founding engineer at two startups, and started
            one of them at 17.
          </p>
          <p className="flex flex-col gap-1 text-sm sm:text-base leading-relaxed">
            when i{"'"}m not building, i{"'"}m reading essays that make me
            think, listening to music, or watching shows.
          </p>
        </div>
      </section>

      {/* 01. what i'm doing */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base sm:text-lg font-bold uppercase">
          01. what i{"'"}m doing
        </h2>
        <ul className="flex flex-col gap-1 text-sm sm:text-base leading-relaxed">
          <ListItem>bachelors in cs + ml</ListItem>
          <ListItem>learning machine learning and maths</ListItem>
          <ListItem>spending more time with my guitar</ListItem>
          <ListItem>studying japanese for the fun of it</ListItem>
        </ul>
      </section>

      {/* 02. what i've done */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base sm:text-lg font-bold uppercase">
          02. what i{"'"}ve done
        </h2>
        <ul className="flex flex-col gap-1 text-sm sm:text-base leading-relaxed">
          <ListItem>
            <TextLink href="https://github.com/0xSaturn">0xsaturn</TextLink>:
            built a web3 startup, raised $60,000. when i was 17.
          </ListItem>
          <ListItem>
            built a tiny minecraft server hosting, made $8,000. i was 15.
          </ListItem>
          <ListItem>
            accepted into spc{"'"}s -1 to 0 program. couldn{"'"}t make it bc of
            college.
          </ListItem>
          <ListItem>featured on young ai devs on cnbc tv18 by meta</ListItem>
          <ListItem>
            went on a hackathon streak, winner/runner up in 5/5 in a row.
          </ListItem>
          <ListItem>
            national finalist in spell bee (among 200k) when i was 12
          </ListItem>
          <ListItem>
            partied @ ibw{"'"}25 in a diff city, the night before my finals
          </ListItem>
          <ListItem>
            self-funded lock-in trip to 🇹🇭. shipped code, ate way too much pad
            thai and sushi, met amazing people.
          </ListItem>
          <ListItem>
            learned bass in a week. played it live at freshers.
          </ListItem>
        </ul>
      </section>

      {/* 03. stuff i've built */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base sm:text-lg font-bold uppercase">
          03. stuff i{"'"}ve built
        </h2>
        <ul className="flex flex-col gap-1 text-sm sm:text-base leading-relaxed">
          {projects.map(project => (
            <ListItem key={project.name}>
              <TextLink href={`https://github.com/janaSunrise/${project.name}`}>
                [{project.name}]
              </TextLink>
              : {project.description}
            </ListItem>
          ))}
        </ul>
      </section>
    </>
  );
}
