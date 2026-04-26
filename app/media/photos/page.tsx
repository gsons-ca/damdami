export default function MediaPhotosPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Media Hub</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
          Photos — Sangat & Events
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Browse photographs from Sangat gatherings, Gurdwara events, spiritual ceremonies, and community milestones across Canada. These images capture the spirit, unity, and devotion of our growing community as we preserve and advance Sikh knowledge and practice.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Sangat Gatherings</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Photos from regular Sangat meetings, study circles, and community events where the Canadian congregation comes together.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Photo albums will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Amrit Sanchaar Ceremonies</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Documentation of Amrit Sanchaar initiation ceremonies and spiritual milestones in the life of our Sangat members.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Photo albums will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Gurdwara Events</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Photography from Gurdwara services, special occasions, and celebrations honouring the Guru and the Sikh faith.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Photo albums will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Langar & Community Service</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Images showcasing Sangat members engaged in Langar preparation, Seva, and service to the community in the spirit of Khalsa values.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Photo albums will appear here</p>
          </div>
        </article>
      </section>

      <section className="mt-12 rounded-[2px] border border-slate-200 bg-[#fff2e5] p-8 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-[#002366]">Share Your Photos</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Do you have photos from Sangat events or community gatherings that capture our collective spirit? We&apos;d love to feature them in our photo archive. Please reach out to submit your photos.
        </p>
      </section>
    </main>
  );
}
