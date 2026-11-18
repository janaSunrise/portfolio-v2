export default function Work() {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-medium font-serif tracking-tight">
        work
      </h1>

      <ul className="flex flex-col gap-6">
        <li>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-bold text-base sm:text-lg">
              founding engineer
            </h2>
            <span className="text-sm sm:text-base text-foreground/50 shrink-0">
              dec {"'"}25 - may {"'"}26
            </span>
          </div>
          <p className="text-sm sm:text-base text-foreground/50">fiber</p>
          <p className="text-xs sm:text-sm leading-relaxed mt-2">
            re-architected a multi-tenant dealership platform and shipped 15+
            core modules. built AI-native features, resilient auth and billing
            infra, and improved load times by 30-50% while cutting
            infrastructure costs by 20%.
          </p>
        </li>

        <li>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-bold text-base sm:text-lg">full-stack swe</h2>
            <span className="text-sm sm:text-base text-foreground/50 shrink-0">
              aug {"'"}23 - apr {"'"}24
            </span>
          </div>
          <p className="text-sm sm:text-base text-foreground/50">roofer.com</p>
          <p className="text-xs sm:text-sm leading-relaxed mt-2">
            built cv models for roof detection, gained 20% cost efficiency.
            worked on new auth and billing infra that handled 50k+ users
            concurrently.
          </p>
        </li>

        <li>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-bold text-base sm:text-lg">
              founding engineer
            </h2>
            <span className="text-sm sm:text-base text-foreground/50 shrink-0">
              feb {"'"}22 - dec {"'"}22
            </span>
          </div>
          <p className="text-sm sm:text-base text-foreground/50">0xSaturn</p>
          <p className="text-xs sm:text-sm leading-relaxed mt-2">
            built ethereum smart contracts & dapps, created automation tools for
            blockchain deployment and creating custom infra and protocols.
            secured $60k from polygon.
          </p>
        </li>

        <li>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-bold text-base sm:text-lg">full-stack swe</h2>
            <span className="text-sm sm:text-base text-foreground/50 shrink-0">
              oct {"'"}20 - nov {"'"}23
            </span>
          </div>
          <p className="text-sm sm:text-base text-foreground/50">
            vertex software
          </p>
          <p className="text-xs sm:text-sm leading-relaxed mt-2">
            shipped 10+ enterprise projects. optimized systems for 30-50%
            performance gains. automated deployments, cut deployment times by
            15-20%. integrated ml models into production while cutting down
            costs by 40%.
          </p>
        </li>

        <li>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-bold text-base sm:text-lg">cloud engineer</h2>
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
            <h2 className="font-bold text-base sm:text-lg">ml researcher</h2>
            <span className="text-sm sm:text-base text-foreground/50 shrink-0">
              jul {"'"}21 - oct {"'"}21
            </span>
          </div>
          <p className="text-sm sm:text-base text-foreground/50">Airis4D</p>
          <p className="text-xs sm:text-sm leading-relaxed mt-2">
            replicated medical cnn papers. built antibiotic effectiveness model,
            95% accuracy. improved model v2: 30% faster training, 15% better
            accuracy.
          </p>
        </li>
      </ul>
    </section>
  );
}
