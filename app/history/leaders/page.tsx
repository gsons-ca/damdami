import Link from "next/link";
import { ArrowLeft, BookOpen, ShieldCheck, Award } from "lucide-react";

const leaders = [
  {
    id: 1,
    name: "Baba Deep Singh Ji Shaheed",
    title: "1st Mukhia Jathedar",
    period: "1682 – 1757",
    bio: "Respected Panthic diamond treasure-trove of knowledge Brahm Giani complete in the practices of the Khalsa Sant…",
    image: "https://images.unsplash.com/photo-1620216501064-07d47225c48b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Baba Gurbaksh Singh Ji Shaheed",
    title: "2nd Mukhia Jathedar",
    period: "1688 – 1764",
    bio: "The embodiment of sacrifice who led the Taksal during the era of the Misls, ensuring the lamp of Vidya stayed lit during extreme persecution.",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d99d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 12,
    name: "Sant Giani Gurbachan Singh Ji",
    title: "12th Mukhia Jathedar",
    period: "1902 – 1969",
    bio: "Affectionately known as 'Khalsa Ji', he completed the full Katha of Sri Guru Granth Sahib Ji 27 times, reviving the oral tradition globally.",
    image: "https://images.unsplash.com/photo-1515165562835-c758a4a7b1d8?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 13,
    name: "Sant Giani Kartar Singh Ji",
    title: "13th Mukhia Jathedar",
    period: "1932 – 1977",
    bio: "A fearless protector of Gurbani Maryada who led the massive marches against the suppression of Sikh identity in the 1970s.",
    image: "https://images.unsplash.com/photo-1485545713850-a580a5bd935c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 14,
    name: "Sant Giani Jarnail Singh Ji",
    title: "14th Mukhia Jathedar",
    period: "1947 – 1984",
    bio: "The 20th century’s great General the heart of the Sikh youth charismatic personality Sant Jarnail Singh…",
    image: "https://images.unsplash.com/photo-1599422315624-28230c137024?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 15,
    name: "Baba Thakur Singh Ji",
    title: "Acting Jathedar (1984-2004)",
    period: "1915 – 2004",
    bio: "Sant Jee led the Sikh nation into the new millenium Baba Takhur Singh Jee was born…",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=600",
  },
];

export default function LeadersPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0]">
      {/* Hero / Header Section */}
      <header className="relative bg-[#002366] py-32 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="h-full w-full bg-[radial-gradient(#ff9933_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
          <Link 
            href="/history" 
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#ff9933] hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to Overview
          </Link>
          <h1 className="font-playfair text-5xl font-bold leading-tight sm:text-7xl">
            Lineage of Leaders
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-blue-100/80">
            A succession of fourteen Mukhia Jathedars, starting from Baba Deep Singh Ji Shaheed, 
            who have served as the custodians of Gurbani Vidya and the sovereign spirit of the Khalsa.
          </p>
        </div>
      </header>

      {/* Narrative Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="space-y-8 text-center">
            <div className="flex justify-center gap-6 text-[#ff9933]">
              <BookOpen size={24} />
              <ShieldCheck size={24} />
              <Award size={24} />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-[#002366]">
              The Traveling University
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Established at Sabo Ki Talwandi (Damdama Sahib), the Taksal was founded by the Tenth Guru, 
              Sri Guru Gobind Singh Ji. The Jathedars of the Taksal have traditionally been the 
              foremost scholars of the Panth, providing the authentic interpretation of Gurbani 
              (Katha) and the correct pronunciation (Santhiya).
            </p>
            <div className="mx-auto h-px w-24 bg-[#ff9933]/30" />
          </div>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <article 
                key={leader.id} 
                className="group relative flex flex-col bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-2xl"
              >
                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Accent Badge */}
                  <div className="absolute left-0 top-0 bg-[#002366] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                    {leader.title}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9933]">
                    {leader.period}
                  </span>
                  <h3 className="mt-2 font-playfair text-2xl font-bold text-[#002366]">
                    {leader.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 italic">
                    "{leader.bio}"
                  </p>
                  
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                      Taksal Jathedar
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}