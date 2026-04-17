export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
      <section className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Contact</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
            Reach the Canadian headquarters for Gurmat study and community support.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-700">
            Use the form below to request guidance, event information, or to connect with the Sangat for Santhiya classes.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
          <img
            src="https://images.unsplash.com/photo-1513377883139-aad25209d1d1?auto=format&fit=crop&w=1200&q=80"
            alt="Sikh community meeting"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <form className="space-y-6">
            <label className="block text-sm font-semibold text-slate-800">
              Name
              <input
                type="text"
                placeholder="First Last"
                className="mt-2 w-full rounded-[2px] border border-slate-300 bg-[#f8f4ef] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-800">
              Email
              <input
                type="email"
                placeholder="name@example.com"
                className="mt-2 w-full rounded-[2px] border border-slate-300 bg-[#f8f4ef] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-800">
              Message
              <textarea
                rows={5}
                placeholder="How can we serve the Sangat?"
                className="mt-2 w-full rounded-[2px] border border-slate-300 bg-[#f8f4ef] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#002366] focus:ring-2 focus:ring-[#002366]/10"
              />
            </label>
            <button type="submit" className="inline-flex rounded-[2px] bg-[#002366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#001f55]">
              Send Message
            </button>
          </form>
        </section>

        <section className="space-y-6 rounded-[2px] border border-slate-200 bg-[#fffaf0] p-8 shadow-sm shadow-slate-900/5">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Headquarters</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Toronto / Greater Canada</h2>
          </div>
          <p className="leading-7 text-slate-700">
            CONTENT_HOLDER: Add the Canadian headquarters address, phone number, and local Sangat details here.
          </p>
          <div className="rounded-[2px] border border-slate-200 overflow-hidden">
            <iframe
              title="Damdami Taksal Canada Headquarters"
              src="https://www.google.com/maps?q=Brampton+Ontario+Canada&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
