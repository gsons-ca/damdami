export default function GurbaniKirtanPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Devotional Music</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
          Kirtan — Sacred Song
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Kirtan is the devotional singing of Gurbani, a spiritual practice that unites the Sangat in remembrance of the Divine. Through sacred melodies and raag forms, Kirtan elevates the soul and deepens our connection to the Shabad. Damdami Taksal Canada curates performances and recordings from accomplished musicians who honour the integrity of this sacred tradition.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Featured Raags</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Each raag carries its own spiritual emotion and is suited to particular times and occasions within the Sikh calendar.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Raag Asa — For morning devotion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Raag Dhanasri — For evening reflection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Raag Tilang — For celebration</span>
            </li>
          </ul>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Kirtan Archives</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Access recordings of Kirtan performances, learn about accomplished musicians, and deepen your appreciation of sacred music.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Audio Recordings — Professional performances</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Artist Profiles — Dedicated musicians</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Learning Guides — Understanding Raag</span>
            </li>
          </ul>
        </article>
      </section>

      <section className="mt-12 rounded-[2px] border border-slate-200 bg-[#fff2e5] p-8 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-[#002366]">Coming Soon</h2>
        <p className="mt-4 leading-7 text-slate-700">
          We are building a comprehensive Kirtan library with audio streams and artist spotlights. More content coming soon.
        </p>
      </section>
    </main>
  );
}
