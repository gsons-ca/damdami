export default function MediaGalleryPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <section className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Media Hub</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
          Gallery — Art & Culture
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Celebrate the artistic heritage and cultural expressions of the Sikh tradition. This gallery showcases visual art, calligraphy, and creative works that honour the beauty and depth of Gurbani and our spiritual legacy.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Sacred Art</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Explore visual representations of Gurbani, Sikh symbolism, and spiritual artwork created by talented artists in our community.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Gallery images will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Calligraphy & Gurmukhi Art</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Beautiful Gurmukhi calligraphy and written artforms that preserve the elegance and reverence of the Sikh script.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Gallery images will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Historical Artifacts</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Images and documentation of significant historical objects, manuscripts, and cultural items from the Taksal lineage.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Gallery images will appear here</p>
          </div>
        </article>

        <article className="rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Community Artwork</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Contributions from members of the Canadian Sangat, showcasing diverse artistic interpretations of our faith.
          </p>
          <div className="mt-6 rounded-[2px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Gallery images will appear here</p>
          </div>
        </article>
      </section>

      <section className="mt-12 rounded-[2px] border border-slate-200 bg-[#fff2e5] p-8 shadow-sm shadow-slate-900/5">
        <h2 className="text-2xl font-semibold text-[#002366]">Share Your Artwork</h2>
        <p className="mt-4 leading-7 text-slate-700">
          We invite artists in the Canadian Sangat to submit their sacred artwork for our gallery. Contact us if you&apos;d like to contribute your creations and share your artistic vision with our community.
        </p>
      </section>
    </main>
  );
}
