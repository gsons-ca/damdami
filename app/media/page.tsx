import { mediaLibrary } from "../../lib/site-data";

export default function MediaPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Media & Katha</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
              Katha, audio discourses, and visual lessons for the Canadian Sangat.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
              A grid of curated Katha and audio content designed to support daily learning, Amrit Sanchaar preparation, and personal study.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
            <img
              src="https://images.unsplash.com/photo-1515165562835-c758a4a7b1d8?auto=format&fit=crop&w=1200&q=80"
              alt="Sikh media and storytelling"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        {mediaLibrary.map((media) => (
          <article key={media.title} className="rounded-[2px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
            <div className="relative overflow-hidden rounded-[2px] bg-slate-950/5 pb-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={media.src}
                title={media.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-semibold text-slate-900">{media.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{media.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-[2px] border border-[#002366]/10 bg-[#f5f7ff] p-8 text-slate-700 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-lg font-semibold text-[#002366]">Share your Katha</p>
            <p className="mt-3 leading-7">
              CONTENT_HOLDER: Add details here for Sangat members who want to contribute audio, video, or live Katha from Canadian Gurdwaras.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1485545713850-a580a5bd935c?auto=format&fit=crop&w=1000&q=80"
            alt="Katha archive and learning resources"
            className="h-64 w-full object-cover rounded-[2px] border border-slate-200"
          />
        </div>
      </div>
    </main>
  );
}
