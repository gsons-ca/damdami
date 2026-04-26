export default function GurbaniSanthiyaPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Recitation Practice</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
          Santhiya — Disciplined Recitation
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Santhiya is the precise and respectful recitation of Gurbani, emphasizing correct pronunciation, rhythm, and emotional depth. This foundational practice is central to the Damdami Taksal tradition. Through structured learning and consistent practice, students master the art of Paath and develop a profound connection to the Shabad.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Learning Modules</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Structured lessons designed to build your Santhiya skills from fundamentals through advanced practice.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Pronunciation Basics — Gurmukhi sounds</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Rhythm & Paath — Proper pacing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Devotional Depth — Heart-centered recitation</span>
            </li>
          </ul>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Practice Resources</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Audio guides, written transcripts, and feedback tools to support your daily Santhiya practice.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Audio Models — Expert demonstrations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Transcripts — Paath with translations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>One-on-One Support — Personal guidance</span>
            </li>
          </ul>
        </article>
      </section>

      <section className="mt-12 rounded-[2px] border border-slate-200 bg-[#fff2e5] p-8 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-[#002366]">Coming Soon</h2>
        <p className="mt-4 leading-7 text-slate-700">
          We are developing interactive Santhiya lessons with audio models and practice exercises. Check back soon for these enhanced resources.
        </p>
      </section>
    </main>
  );
}
