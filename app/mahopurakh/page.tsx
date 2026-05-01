import Link from "next/link";

const mahapurakhs = [
  {
    id: "1",
    name: "Baba Deep Singh Ji",
    title: "1st Mukhia Jathedar",
    period: "1682 – 1757",
    desc: "Respected Panthic diamond treasure-trove of knowledge Brahm Giani complete in the practices of the Khalsa Sant…",
  },
  {
    id: "2",
    name: "Baba Gurbaksh Singh Ji",
    title: "2nd Mukhia Jathedar",
    period: "1688 – 1764",
    desc: "A fearless leader who stood as the vanguard of the Sikh Panth, upholding the scholarly traditions while leading the Khalsa in defense of the faith.",
  },
  {
    id: "3",
    name: "Baba Soorat Singh Ji",
    title: "3rd Mukhia Jathedar",
    period: "18th Century",
    desc: "A master of Gurbani Vidya who ensured the continuity of the Taksal's unique oral tradition and interpretation (Katha) during turbulent times.",
  },
  {
    id: "10",
    name: "Sant Giani Sundar Singh Ji",
    title: "10th Mukhia Jathedar",
    period: "1883 – 1930",
    desc: "Credited with modernizing the Taksal's structure, he was a giant of Gurbani Santhiya and a key figure in the Singh Sabha movement.",
  },
  {
    id: "12",
    name: "Sant Giani Gurbachan Singh Ji",
    title: "12th Mukhia Jathedar",
    period: "1902 – 1969",
    desc: "Affectionately known as 'Khalsa Ji', he completed the entire Katha of Sri Guru Granth Sahib Ji 27 times, traveling globally to spread Gurmat.",
  },
  {
    id: "13",
    name: "Sant Giani Kartar Singh Ji",
    title: "13th Mukhia Jathedar",
    period: "1932 – 1977",
    desc: "A fearless protector of Sikh identity and Maryada who led massive marches against the suppression of Sikh rights in the 1970s.",
  },
  {
    id: "14",
    name: "Sant Giani Jarnail Singh Ji",
    title: "14th Mukhia Jathedar",
    period: "1947 – 1984",
    desc: "The 20th century’s great General the heart of the Sikh youth charismatic personality Sant Jarnail Singh…",
  },
  {
    id: "15",
    name: "Baba Thakur Singh Ji",
    title: "Acting Jathedar (1984-2004)",
    period: "1915 – 2004",
    desc: "Sant Jee led the Sikh nation into the new millenium Baba Takhur Singh Jee was born…",
  },
];

export default function MahapurakhPage() {
  return (
    <main className="relative bg-[#fffaf0] font-inter">
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-[#002366] py-24 text-center text-white">
        <div className="absolute inset-0 opacity-10">
          {/* Subtle background pattern or texture could go here */}
          <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.5em] text-[#D4AF37]">The Eternal Lineage</p>
          <h1 className="mt-8 font-playfair text-5xl font-bold tracking-tight sm:text-7xl">
            The Mahapurakhs
          </h1>
          <div className="mt-8 h-1 w-24 bg-[#D4AF37] mx-auto" />
          <p className="mt-8 text-xl leading-relaxed text-white/90">
            From the holy hands of the Tenth Guru to the modern era, the Damdami Taksal has been led by a continuous succession of Brahmgiani scholars and brave martyrs.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-playfair text-3xl font-semibold text-[#002366]">A Tradition of Gurmat Vidya</h2>
          <p className="mt-6 leading-8 text-slate-700">
            The Mukhia Jathedars of Damdami Taksal are not just leaders, but the custodians of the authentic interpretation of Gurbani. They embody the dual nature of the Sikh—the Saint (Sant) and the Soldier (Sipahi).
          </p>
        </div>
      </section>

      {/* Lineage Grid - Carefully Structured */}
      <section className="pb-20 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-4">
            {mahapurakhs.map((leader, index) => (
              <article 
                key={index} 
                className="group relative flex flex-col border-t-4 border-[#D4AF37] bg-white p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative -mt-16 mb-6 h-40 w-40 self-center overflow-hidden rounded-full border-4 border-white shadow-lg transition-all duration-500">
                  <div className="flex h-full w-full items-center justify-center bg-slate-50 text-[#002366]/30">
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Portrait {leader.id}</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {leader.period}
                  </p>
                  <div className="mt-2 inline-block bg-[#002366] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                    {leader.title}
                  </div>
                  <h2 className="mt-4 font-playfair text-xl font-bold text-slate-900 group-hover:text-[#002366] transition-colors">
                    {leader.name}
                  </h2>
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-32 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-slate-600 italic">
                      {leader.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#fff2e5] py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <h2 className="text-3xl font-semibold text-[#002366]">Study the Heritage</h2>
          <p className="mt-4 text-slate-700">
            The teachings of the Mahapurakhs are available through our Santhiya and Katha programs in Canada.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/" className="rounded-[2px] bg-[#002366] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#001f55]">
              Home
            </Link>
            <Link href="/gurbani" className="rounded-[2px] border border-[#002366] px-8 py-3 text-sm font-semibold text-[#002366] transition hover:bg-[#002366]/5">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}