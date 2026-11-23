const jobs = [
  {
    company: 'fiber',
    role: 'founding engineer',
    period: 'dec 2025 — may 2026',
    highlights: [
      're-architected a multi-tenant dealership platform and shipped 15+ core modules.',
      'built ai-native features and resilient auth and billing infra.',
      'improved load times by 30–50% while cutting infrastructure costs by 20%.'
    ]
  },
  {
    company: 'roofer.com',
    role: 'full-stack swe',
    period: 'aug 2023 — apr 2024',
    highlights: [
      'built cv models for roof detection, gaining 20% cost efficiency.',
      'worked on new auth and billing infra that handled 50k+ concurrent users.'
    ]
  },
  {
    company: '0xSaturn',
    role: 'founding engineer',
    period: 'feb 2022 — dec 2022',
    highlights: [
      'built ethereum smart contracts and dapps.',
      'created automation tools for blockchain deployment, plus custom infra and protocols.',
      'secured $60k from polygon.'
    ]
  },
  {
    company: 'vertex software',
    role: 'full-stack swe',
    period: 'oct 2020 — nov 2023',
    highlights: [
      'shipped 10+ enterprise projects.',
      'optimized systems for 30–50% performance gains.',
      'automated deployments, cutting deploy times by 15–20%.',
      'integrated ml models into production while cutting costs by 40%.'
    ]
  },
  {
    company: 'opens.wiki',
    role: 'cloud engineer',
    period: 'oct 2022 — dec 2022',
    highlights: [
      'orchestrated aws infra with terraform and designed scalable architecture.',
      'cut costs by 20% and increased performance by 10%.',
      'strategized blockchain modularity in cloud.'
    ]
  },
  {
    company: 'Airis4D',
    role: 'ml researcher',
    period: 'jul 2021 — oct 2021',
    highlights: [
      'replicated medical cnn papers.',
      'built an antibiotic effectiveness model with 95% accuracy.',
      'improved model v2: 30% faster training, 15% better accuracy.'
    ]
  }
];

export default function Work() {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-medium font-serif tracking-tight">
        work
      </h1>

      <ol className="mt-2 flex flex-col gap-8">
        {jobs.map(job => (
          <li key={job.company}>
            <h2 className="text-lg sm:text-xl leading-7 font-medium tracking-tight">
              {job.role}
            </h2>
            <p className="mt-0.5 text-sm">
              {job.company}
              <span className="text-foreground/50"> · {job.period}</span>
            </p>

            <ul className="mt-2.5 flex flex-col gap-1">
              {job.highlights.map(highlight => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-relaxed"
                >
                  <span aria-hidden="true" className="text-foreground/50">
                    +
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
