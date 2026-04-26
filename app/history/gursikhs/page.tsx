import Link from "next/link";

const gursikhs = [
  {
    name: "Bhai Mani Singh Ji",
    period: "1644 – 1737",
    role: "Scholar & Martyr",
    bio: "A companion of the Tenth Guru and the master scribe of the final recension of Sri Guru Granth Sahib Ji. He attained martyrdom in Lahore, choosing to be dismembered joint by joint rather than forsake the Gurmat code.",
  },
  {
    name: "Bhai Taru Singh Ji",
    period: "1720 – 1745",
    role: "Symbol of Rehat",
    bio: "Known for his unwavering devotion, he chose to have his scalp removed instead of having his hair cut. His life remains the ultimate example of preserving the Sikh identity (Saroop) at any cost.",
  },
  {
    name: "Baba Banda Singh Bahadur",
    period: "1670 – 1716",
    role: "General of the Khalsa",
    bio: "The first sovereign ruler of the Sikh state who uprooted tyranny in Sirhind. He lived the Miri-Piri philosophy, establishing a system of justice and equality across the Punjab.",
  },
  {
    name: "Mai Bhago Ji",
    period: "18th Century",
    role: "Warrior-Saint",
    bio: "The heroic woman who led the 40 Muktas back to the battlefield of Muktsar. She represents the spirit of 'Chardi Kala' and is a primary inspiration for Gursikh women in the Taksal tradition.",
  },
  {
    name: "Baba Bota Singh & Baba Garja Singh",
    period: "Mid-18th Century",
    role: "Defenders of Sovereignty",
    bio: "Two brave Gursikhs who challenged the Mughal authority by collecting a tax on the Grand Trunk Road, proving that the Khalsa spirit cannot be suppressed by numbers.",
  },
  {
    name: "Bhai Sukha Singh & Bhai Mehtab Singh",
    period: "18th Century",
    role: "Protectors of the Sanctuary",
    bio: "The legendary warriors who traveled from Bikaner to Amritsar to punish Massa Ranghar for desecrating Sri Harmandir Sahib, restoring the sanctity of the holy shrine.",
  },
];

export default function GursikhsHistoryPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Page Header */}
        <header className="mb-20">
          <div className="flex items-center gap-4">
            <Link href="/history" className="text-xs font-bold uppercase tracking-widest text-blue-950/60 hover:text-blue-950 transition-colors">
              ← Back to History
            </Link>
          </div>
          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-950/50">Lineage of the Brave</p>
            <h1 className="mt-4 font-playfair text-5xl font-bold text-blue-950 sm:text-6xl">
              Gursikhs in History
            </h1>
            <div className="mt-8 h-1 w-24 bg-blue-950/10" />
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-700">
              Beyond the Jathedars, the Taksal honors the countless Gursikhs whose scholarship and sacrifice built the foundation of the Panth. Their lives are the living interpretation of the Shabad.
            </p>
          </div>
        </header>

        {/* Gursikhs Grid */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {gursikhs.map((person, index) => (
            <article 
              key={index}
              className="group flex flex-col border border-stone-200 bg-white p-10 shadow-sm transition-all hover:translate-y-[-4px] hover:shadow-xl"
            >
              <div className="mb-8 flex items-start justify-between">
                <div className="rounded-full bg-blue-950/5 p-3 text-blue-950">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  {person.period}
                </span>
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-950/50">
                  {person.role}
                </p>
                <h2 className="mt-2 font-playfair text-2xl font-bold text-blue-950 group-hover:text-blue-800">
                  {person.name}
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-slate-600">
                  {person.bio}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-stone-100">
                <button className="text-xs font-bold uppercase tracking-widest text-blue-950 opacity-0 group-hover:opacity-100 transition-opacity">
                  Historical Context →
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}