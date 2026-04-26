export default function MediaAudioPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Media Hub</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
          Audio — Katha, Kirtan & Santhiya
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Explore our growing library of audio recordings featuring spiritual discourses, devotional music, and recitation guidance. These teachings preserve and share the wisdom of Damdami Taksal, connecting the Canadian Sangat with authentic Sikh knowledge and practice.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Katha Recordings</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Listen to spiritual discourses delivered by respected teachers explaining the depth and meaning of Gurbani.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Audio tracks will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Kirtan & Devotional Music</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Immerse yourself in sacred melodies that celebrate the Shabad and strengthen your spiritual connection.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Audio tracks will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Santhiya Practice</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Audio guides to help you practice accurate and respectful recitation of Gurbani with correct pronunciation.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Audio tracks will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Community Sessions</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Recordings from live Sangat gatherings, Amrit Sanchaar sessions, and community events across Canada.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Audio tracks will appear here</p>
          </div>
        </article>
      </section>

      <section className="mt-12 rounded-[2px] border border-slate-200 bg-[#fff2e5] p-8 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-[#002366]">Contribute Your Recording</h2>
        <p className="mt-4 leading-7 text-slate-700">
          If you have audio content—live Katha, Kirtan performances, or teachings—that you&apos;d like to share with the Canadian Sangat, we invite you to reach out and submit it for our archives.
        </p>
      </section>
    </main>
  );
}
