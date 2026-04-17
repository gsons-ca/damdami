import Link from "next/link";
import { timelineEvents } from "../../lib/site-data";

export default function HistoryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">History</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
              The journey of Damdami Taksal from a travelling university to Canadian Sangat.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
              Damdami Taksal has carried the Gurmat tradition across centuries. The timeline below traces key moments in Sikh history and the way the lineage now serves the Canadian community.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
            <img
              src="https://images.unsplash.com/photo-1523293833277-9203f31b0a05?auto=format&fit=crop&w=1200&q=80"
              alt="Historic Sikh scholars studying together"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
            <h2 className="text-2xl font-semibold text-[#002366]">The Travelling University</h2>
            <p className="mt-4 leading-7 text-slate-700">
              From Banda Singh Bahadur to Baba Deep Singh Ji, the Taksal has always been a mobile university of the Sikh Panth, teaching Gurmat wherever the Sangat gathers.
            </p>
          </div>
          <div className="rounded-[2px] border border-slate-200 bg-[#fffaf0] p-8 shadow-sm shadow-slate-900/5">
            <h2 className="text-2xl font-semibold text-[#002366]">Canadian Sangat Today</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Newly settled communities in Canada find strength in the same principles of Maryada, Shastar discipline, and Gurbani that define the historic Taksal.
            </p>
          </div>
        </div>

        {timelineEvents.map((event) => (
          <article key={event.year} className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex rounded-[2px] bg-[#ff9933]/10 px-4 py-2 text-sm font-semibold text-[#002366]">
                {event.year}
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">{event.title}</h2>
            </div>
            <div className="mt-4 grid gap-6 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
              <div className="overflow-hidden rounded-[2px] border border-slate-200 bg-[#f8f4ef]">
                <img
                  src="https://images.unsplash.com/photo-1515165562835-c758a4a7b1d8?auto=format&fit=crop&w=900&q=80"
                  alt={`Historic landmark for ${event.year}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="leading-7 text-slate-700">{event.description}</p>
                <p className="mt-4 text-sm leading-7 text-slate-500">CONTENT_HOLDER: Expand this timeline item with historic detail or anecdotes tied to the Canadian Sikh experience.</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-16 rounded-[2px] border border-slate-200 bg-[#fffaf0] p-10 text-slate-700 shadow-sm">
        <p className="text-lg font-semibold text-[#002366]">Continuing the lineage</p>
        <p className="mt-3 leading-7">
          The Canadian Sangat now learns from the same Gurmat tradition. This section is designed to house dates, translations, and additional content from local scholars and reparative histories.
        </p>
        <p className="mt-4 text-sm text-slate-500">CONTENT_HOLDER: Add a Canadian milestone or local historical note here.</p>
        <Link href="/mahopurakh" className="mt-6 inline-flex rounded-[2px] bg-[#002366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#001f55]">
          Meet the Mahapurakh
        </Link>
      </div>
    </main>
  );
}
