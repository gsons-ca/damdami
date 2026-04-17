import Link from "next/link";
import { mahoPurakhDirectory } from "../../lib/site-data";

export default function MahapurakhPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Mahapurakh</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
              Revered Jathedars of Damdami Taksal with dedication to Gurmat Vidya.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
              Meet the guiding lights who shaped the Panth’s Santhiya discipline and carried the spirit of the Guru into every generation.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
            <img
              src="https://images.unsplash.com/photo-1486911278847-9b49b4cfb162?auto=format&fit=crop&w=1200&q=80"
              alt="Historic Sikh education imagery"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {mahoPurakhDirectory.map((leader) => (
          <article key={leader.name} className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
            <div className="mb-6 h-56 overflow-hidden rounded-[2px] border border-slate-200 bg-[#ff9933]/10 text-[#002366]">
              <img
                src="https://images.unsplash.com/photo-1515165562835-c758a4a7b1d8?auto=format&fit=crop&w=900&q=80"
                alt={`Portrait of ${leader.name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#002366]">{leader.name}</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">{leader.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">{leader.summary}</p>
            <p className="mt-5 text-sm leading-7 text-slate-500">{leader.details}</p>
            <div className="mt-7">
              <Link href="/gurbani" className="inline-flex rounded-[2px] bg-[#002366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#001f55]">
                Learn about Gurbani
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
