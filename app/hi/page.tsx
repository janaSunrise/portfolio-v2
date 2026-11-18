import { TextLink } from '@/components/text-link';

export default function SayHi() {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-medium font-serif tracking-tight">
        say hi
      </h1>

      <div className="flex flex-col gap-4 text-sm sm:text-base leading-relaxed">
        <p>
          if you{"'"}ve made it this far, might as well say hi. i like meeting
          new people and hearing what they{"'"}re up to. no formal intro needed.
          &ldquo;hey&rdquo; works, or maybe a meme.
        </p>
        <p>
          the most reliable way to reach me is email at{' '}
          <TextLink href="mailto:sunritjana.06@gmail.com">
            sunritjana.06@gmail.com
          </TextLink>
          . i read everything. eventually.
        </p>
        <p>
          i{"'"}m also on{' '}
          <TextLink href="https://twitter.com/janaSunrise">twitter</TextLink>,{' '}
          <TextLink href="https://www.linkedin.com/in/SunritJana">
            linkedin
          </TextLink>
          , and{' '}
          <TextLink href="https://www.instagram.com/dare.me_bro">
            instagram
          </TextLink>
          .
        </p>
      </div>
    </section>
  );
}
