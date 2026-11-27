import Image from 'next/image';

import { ListItem } from '@/components/list-item';

import berserk from './covers/berserk.jpg';
import blackClover from './covers/black-clover.jpg';
import demonSlayer from './covers/demon-slayer.jpg';
import jujutsuKaisen from './covers/jujutsu-kaisen.jpg';
import narutoShippuden from './covers/naruto-shippuden.jpg';

const anime = [
  {
    title: 'naruto shippuden',
    studio: 'pierrot',
    year: 2007,
    cover: narutoShippuden,
    url: 'https://myanimelist.net/anime/1735'
  },
  {
    title: 'black clover',
    studio: 'pierrot',
    year: 2017,
    cover: blackClover,
    url: 'https://myanimelist.net/anime/34572'
  },
  {
    title: 'jujutsu kaisen',
    studio: 'mappa',
    year: 2020,
    cover: jujutsuKaisen,
    url: 'https://myanimelist.net/anime/40748'
  },
  {
    title: 'berserk',
    studio: 'olm',
    year: 1997,
    cover: berserk,
    url: 'https://myanimelist.net/anime/33'
  },
  {
    title: 'demon slayer',
    studio: 'ufotable',
    year: 2019,
    cover: demonSlayer,
    url: 'https://myanimelist.net/anime/38000'
  }
];

const essays = [
  {
    title: 'how to do great work',
    author: 'paul graham',
    url: 'https://paulgraham.com/greatwork.html'
  },
  {
    title: 'how you know',
    author: 'paul graham',
    url: 'https://paulgraham.com/know.html'
  },
  {
    title: 'what i wish someone had told me',
    author: 'sam altman',
    url: 'https://blog.samaltman.com/what-i-wish-someone-had-told-me'
  },
  {
    title: 'how to be successful',
    author: 'sam altman',
    url: 'https://blog.samaltman.com/how-to-be-successful'
  },
  {
    title: 'what is first principles thinking?',
    author: 'farnam street',
    url: 'https://fs.blog/first-principles/'
  }
];

export default function Library() {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-medium font-serif tracking-tight">
        library
      </h1>

      <div className="flex flex-col gap-4">
        <h2 className="text-base sm:text-lg font-bold uppercase">01. anime</h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-3 gap-y-6 sm:gap-x-4">
          {anime.map(show => (
            <li key={show.url}>
              <a
                href={show.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2"
              >
                <div className="aspect-2/3 overflow-hidden rounded-md bg-foreground/5 ring-1 ring-foreground/10 transition duration-300 ease-out group-hover:ring-foreground/25 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:-translate-y-0.5">
                  <Image
                    src={show.cover}
                    alt=""
                    sizes="(min-width: 768px) 128px, (min-width: 640px) 200px, 50vw"
                    placeholder="blur"
                    className="size-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-103 motion-safe:group-focus-visible:scale-103"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-medium leading-snug underline-offset-4 group-hover:underline group-focus-visible:underline">
                    {show.title}
                  </h3>
                  <p className="text-xs text-foreground/60">
                    {show.studio} · {show.year}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-base sm:text-lg font-bold uppercase">02. essays</h2>

        <ul className="flex flex-col gap-1 text-sm sm:text-base leading-relaxed">
          {essays.map(essay => (
            <ListItem key={essay.url}>
              <a
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
              >
                <h3 className="font-medium underline-offset-4 group-hover:underline group-focus-visible:underline">
                  {essay.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/60">
                  {essay.author}
                </p>
              </a>
            </ListItem>
          ))}
        </ul>
      </div>
    </section>
  );
}
