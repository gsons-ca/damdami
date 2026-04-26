export default function MediaVideoPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Media Hub</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
          Video — Visual Teaching & Events
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Watch recorded teachings, community events, and spiritual lessons captured on video. These visual resources bring the traditions of Damdami Taksal to life, helping the Canadian Sangat learn, celebrate, and connect with our heritage.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Live Teachings</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Video recordings of live Katha sessions and spiritual teachings from our scholars and Gursikhs.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Videos will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Community Events</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Highlights from Sangat gatherings, celebrations, Amrit Sanchaar ceremonies, and other meaningful moments.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Videos will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Santhiya Demonstrations</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Visual guides showing proper recitation technique, Paath forms, and the respectful handling of Gurbani.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Videos will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Documentary Content</h2>
          <p className="mt-4 leading-7 text-slate-700">
            In-depth documentaries exploring the history, lineage, and mission of Damdami Taksal in the Canadian context.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Videos will appear here</p>
          </div>
        </article>
      </section>

      <section className="mt-12 rounded-[2px] border border-slate-200 bg-[#fff2e5] p-8 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-[#002366]">Submit Video Content</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Do you have video content from Sangat events or teachings that you&apos;d like to share? Contact us to contribute your recordings to our growing video archive.
        </p>
      </section>
    </main>
  );
}
