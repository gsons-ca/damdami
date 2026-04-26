export default function GurbaniBaniPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Gurbani & Scripture</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
          Bani — Sacred Scripture
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Bani is the divine word of the Gurus, the living Shabad that guides the Sikh Panth. Through daily recitation and reverent study, we connect with the profound teachings of our lineage. Damdami Taksal Canada offers carefully curated resources to help you explore the scriptures with both accuracy and devotion.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Daily Paath</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Begin your day with core shabads such as Japji Sahib, Jaap Sahib, and Anand Sahib. These foundational texts strengthen both mind and spirit.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Japji Sahib — Morning prayer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Jaap Sahib — Guru Gobind Singh&apos;s praise</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Anand Sahib — Bliss in devotion</span>
            </li>
          </ul>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Gurbani Resources</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Access audio recitations, written texts with English translations, and detailed explanations to deepen your understanding.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Audio Paath — Professional recitations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Text & Translation — Gurmukhi and English</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#002366]"></span>
              <span>Study Guides — Deeper meaning</span>
            </li>
          </ul>
        </article>
      </section>

      <section className="mt-12 rounded-[2px] border border-slate-200 bg-[#fff2e5] p-8 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-[#002366]">Coming Soon</h2>
        <p className="mt-4 leading-7 text-slate-700">
          We are preparing a complete audio library and detailed study materials for the Bani section. Check back soon for expanded resources.
        </p>
      </section>
    </main>
  );
}
