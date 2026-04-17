import Link from "next/link";
import { mahoPurakhDirectory } from "../lib/site-data";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section className="bg-[#fff2e5] pb-16 pt-10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12">
          <div className="space-y-8">
            <p className="inline-flex rounded-[2px] border border-[#002366]/10 bg-[#002366]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#002366]">
              Guardians of the Gurmat
            </p>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-[#002366] sm:text-6xl">
                Damdami Taksal Canada — honouring lineage, Sikh culture, and Gurmat education in the diaspora.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                We bring the historic strength of the Taksal to Canada with clear Santhiya training, disciplined Maryada, and a warm Sangat for every seeker.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/mahopurakh" className="inline-flex items-center justify-center rounded-[2px] bg-[#002366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#001f55]">
                Explore Mahapurakh
              </Link>
              <Link href="/gurbani" className="inline-flex items-center justify-center rounded-[2px] border border-[#002366] px-6 py-3 text-sm font-semibold text-[#002366] transition hover:bg-[#002366]/10">
                Learn Gurbani
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
            <img
              src="https://images.unsplash.com/photo-1598399514088-f0fe40f9a0b2?auto=format&fit=crop&w=1200&q=80"
              alt="Sikh heritage banner showing cultural ceremony"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2px] border border-slate-200 bg-[#fff8ee] p-8 shadow-sm shadow-slate-900/5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Mission</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">Preserve authentic Gurmat Vidya.</h2>
              <p className="mt-4 leading-7 text-slate-700">
                We nurture the Sikh Panth in Canada through disciplined study, accurate Santhiya, and a living connection to Guru Nanak’s message.
              </p>
            </article>
            <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Heritage</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">Carry the Taksal legacy forward.</h2>
              <p className="mt-4 leading-7 text-slate-700">
                From Baba Deep Singh Ji to the modern Canadian Sangat, the lineage is kept alive by service, faith, and deep reverence for the Shabad.
              </p>
            </article>
            <article className="rounded-[2px] border border-slate-200 bg-[#f5f7ff] p-8 shadow-sm shadow-slate-900/5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Offerings</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">Gurbani, Katha & community care.</h2>
              <p className="mt-4 leading-7 text-slate-700">
                Access audio, video, and Santhiya guidance for daily Paath, Akhand Paath, and Maryada in the Canadian context.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#fff2e5] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Culture & Community</p>
            <h2 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
              A modern Canadian Sangat rooted in historic Sikh tradition.
            </h2>
            <p className="max-w-2xl leading-8 text-slate-700">
              We honour the sacred connection between Gurbani, Maryada, and the Sangat. Every image, story, and class reflects the values of discipline, devotion, and shared care.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
                <p className="text-sm uppercase tracking-[0.28em] text-[#002366]">Shastar</p>
                <p className="mt-3 text-slate-700">The Shastar stands as a symbol of courage, service, and the protection of Gurmat.</p>
              </div>
              <div className="rounded-[2px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
                <p className="text-sm uppercase tracking-[0.28em] text-[#002366]">Palki Sahib</p>
                <p className="mt-3 text-slate-700">Devotion and dignity meet in every journey of the Guru’s Prakash and seva.</p>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5">
            <img
              src="https://images.unsplash.com/photo-1545987790-211d8a179915?auto=format&fit=crop&w=1200&q=80"
              alt="Sikh shrine and cultural celebration"
              className="h-full w-full object-cover rounded-[2px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2px] border border-slate-200 bg-[#fff8ee] p-8 shadow-sm shadow-slate-900/5">
              <h2 className="text-3xl font-semibold text-[#002366]">The Sangat Experience</h2>
              <p className="mt-5 leading-8 text-slate-700">
                Learn with the Sangat for deeper understanding, guided Paath, and community preservation of Maryada with humility and grace.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1513377883139-aad25209d1d1?auto=format&fit=crop&w=800&q=80"
                alt="Community gathering in prayer"
                className="h-64 w-full object-cover rounded-[2px] border border-slate-200 shadow-sm shadow-slate-900/5"
              />
              <img
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80"
                alt="Sikh students studying together"
                className="h-64 w-full object-cover rounded-[2px] border border-slate-200 shadow-sm shadow-slate-900/5"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
