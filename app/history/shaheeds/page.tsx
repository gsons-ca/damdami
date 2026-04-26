import { Shield, ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";

export default function ShaheedsPage() {
  const shaheeds = [
    {
      name: "Baba Deep Singh Ji Shaheed",
      title: "First Jathedar & Great Scholar",
      description: "A titan of Sikh history who fought for the sanctity of Sri Harmandir Sahib. Even at the age of 75, their devotion and strength in battle established the standard for the Sant-Sipahi (Saint-Soldier) ideal.",
      iconColor: "text-[#ff9933] bg-orange-50",
    },
    {
      name: "Baba Gurbaksh Singh Ji",
      title: "Second Jathedar",
      description: "An embodiment of discipline and sacrifice. They led the Khalsa during a pivotal era of defense, ensuring that the light of Gurbani Vidya remained unextinguished despite constant invasions.",
      iconColor: "text-[#002366] bg-blue-50",
    },
    {
      name: "Modern Era Martyrs",
      title: "Defenders of the Panth",
      description: "Continuing the lineage of sacrifice, numerous Gursikhs from the Taksal have laid down their lives in the 20th and 21st centuries to preserve the honor and autonomy of the Khalsa Panth.",
      iconColor: "text-red-600 bg-red-50",
    }
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:py-20">
      {/* Navigation Breadcrumb */}
      <Link 
        href="/history" 
        className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#ff9933] transition-colors"
      >
        <ArrowLeft size={14} /> Back to History
      </Link>

      {/* Page Header */}
      <header className="mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#ff9933]"></span>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff9933]">
            The Eternal Sacrifice
          </p>
        </div>
        <h1 className="font-playfair text-3xl font-bold leading-tight text-[#002366] sm:text-5xl">
          Shaheeds of the Taksal
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          The history of Damdami Taksal is inseparable from the history of Sikh martyrdom. We honor those who sacrificed their lives to protect Gurbani, the Gurdwara, and the sovereign spirit of the Khalsa.
        </p>
      </header>

      {/* Martyr Profiles Grid */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {shaheeds.map((shaheed) => (
          <article 
            key={shaheed.name} 
            className="group relative flex flex-col rounded-[2px] border border-slate-200 bg-white p-10 transition-all duration-300 hover:border-[#ff9933]/40 hover:shadow-2xl hover:shadow-orange-900/5"
          >
            <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-[2px] ${shaheed.iconColor}`}>
              <Shield size={28} />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="font-playfair text-2xl font-bold text-[#002366] group-hover:text-[#ff9933] transition-colors">
                {shaheed.name}
              </h2>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                {shaheed.title}
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                {shaheed.description}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-50">
              <span className="text-xs font-bold uppercase tracking-widest text-[#002366] opacity-0 group-hover:opacity-100 transition-opacity">
                Immortal Legacy
              </span>
            </div>
          </article>
        ))}
      </section>

      {/* Bottom Call to Action */}
      <footer className="mt-24 rounded-[2px] bg-[#002366] p-12 text-center text-white">
        <Heart className="mx-auto mb-6 text-[#ff9933]" size={32} />
        <h2 className="font-playfair text-3xl font-bold mb-4">A Tradition of Seva</h2>
        <p className="mx-auto max-w-2xl text-blue-100 leading-relaxed">
          The Taksal continues to inspire generations to live as Sant-Sipahis—combining spiritual depth with the courage to stand against injustice.
        </p>
      </footer>
    </main>
  );
}