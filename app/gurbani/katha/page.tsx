export default function GurbaniKathaPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Spiritual Teaching</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
          Katha — Spiritual Discourse
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Katha is the art of explaining and illuminating the Gurbani through spiritual discourse. Teachers of Damdami Taksal engage the Sangat with clarity, depth, and reverence, breaking down complex meanings and connecting ancient wisdom to our modern lives. Listen to live katha sessions and recorded discourses from our respected scholars.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Live Katha Sessions</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Join scheduled katha sessions where our teachers provide live commentary and answer questions from the Sangat.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Weekly Schedules — Regular teaching times</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Virtual Access — Join online or in person</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Q&A Sessions — Interactive learning</span>
            </li>
          </ul>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Recorded Katha Library</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Access an archive of recorded katha sessions organized by topic, teacher, and Gurbani shabad.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Audio Recordings — Hours of teaching</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Teacher Profiles — Learn from masters</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Topic Index — Find by subject</span>
            </li>
          </ul>
        </article>
      </section>

      <section className="mt-12 rounded-[2px] border border-slate-200 bg-[#fff2e5] p-8 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-[#002366]">Coming Soon</h2>
        <p className="mt-4 leading-7 text-slate-700">
          We are curating a comprehensive katha archive with transcripts and translations. More resources will be available soon.
        </p>
      </section>
    </main>
  );
}
