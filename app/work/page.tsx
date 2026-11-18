const jobs = [
  {
    company: 'fiber',
    role: 'founding engineer',
    period: "dec '25 – may '26",
    description:
      're-architected a multi-tenant dealership platform and shipped 15+ core modules. built AI-native features, resilient auth and billing infra, and improved load times by 30-50% while cutting infrastructure costs by 20%.'
  },
  {
    company: 'roofer.com',
    role: 'full-stack swe',
    period: "aug '23 – apr '24",
    description:
      'built cv models for roof detection, gained 20% cost efficiency. worked on new auth and billing infra that handled 50k+ users concurrently.'
  },
  {
    company: '0xSaturn',
    role: 'founding engineer',
    period: "feb '22 – dec '22",
    description:
      'built ethereum smart contracts & dapps, created automation tools for blockchain deployment and creating custom infra and protocols. secured $60k from polygon.'
  },
  {
    company: 'vertex software',
    role: 'full-stack swe',
    period: "oct '20 – nov '23",
    description:
      'shipped 10+ enterprise projects. optimized systems for 30-50% performance gains. automated deployments, cut deployment times by 15-20%. integrated ml models into production while cutting down costs by 40%.'
  },
  {
    company: 'opens.wiki',
    role: 'cloud engineer',
    period: "oct '22 – dec '22",
    description:
      'orchestrated aws infra with terraform, designed scalable architecture, cut costs by 20%, increased perf by 10%. strategized blockchain modularity in cloud.'
  },
  {
    company: 'Airis4D',
    role: 'ml researcher',
    period: "jul '21 – oct '21",
    description:
      'replicated medical cnn papers. built antibiotic effectiveness model, 95% accuracy. improved model v2: 30% faster training, 15% better accuracy.'
  }
];

export default function Work() {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-medium font-serif tracking-tight">
        work
      </h1>

      <ul className="flex flex-col gap-8">
        {jobs.map(job => (
          <li key={job.company} className="flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold">{job.company}</h2>
            <p className="text-sm text-foreground/70">
              {job.role} · {job.period}
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              {job.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
