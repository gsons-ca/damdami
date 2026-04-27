import { Shield, ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";

export default function ShaheedsPage() {
  const shaheeds = [
    {
      name: "Baba Deep Singh Ji Shaheed",
      title: "First Jathedar & Great Scholar",
      description: "A titan of Sikh history who fought for the sanctity of Sri Harmandir Sahib. Even at the age of 75, their devotion and strength in battle established the standard for the Sant-Sipahi (Saint-Soldier) ideal.",
      iconColor: "text-[#ff9933] bg-orange-50",
      image: "https://images.unsplash.com/photo-1620216501064-07d47225c48b?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Baba Gurbaksh Singh Ji",
      title: "Second Jathedar",
      description: "An embodiment of discipline and sacrifice. They led the Khalsa during a pivotal era of defense, ensuring that the light of Gurbani Vidya remained unextinguished despite constant invasions.",
      iconColor: "text-[#002366] bg-blue-50",
      image: "https://images.unsplash.com/photo-1621274147744-933390886a11?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Modern Era Martyrs",
      title: "Defenders of the Panth",
      description: "Continuing the lineage of sacrifice, numerous Gursikhs from the Taksal have laid down their lives in the 20th and 21st centuries to preserve the honor and autonomy of the Khalsa Panth.",
      iconColor: "text-red-600 bg-red-50",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d99d?auto=format&fit=crop&q=80&w=800"
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
            className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-[2px] bg-slate-900 shadow-xl"
          >
            {/* Background Image with Zoom Effect */}
            <img 
              src={shaheed.image} 
              alt={shaheed.name}
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#ff9933]">
                  {shaheed.title}
                </p>
                <h2 className="font-playfair text-2xl font-bold text-white mb-4">
                {shaheed.name}
              </h2>
                
                {/* Description that appears on hover */}
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-slate-200">
                    {shaheed.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#ff9933]">
                    <Shield size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Immortal Legacy
                    </span>
                  </div>
                </div>
              </div>
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