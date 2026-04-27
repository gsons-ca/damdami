import Link from "next/link";
import { Book, History, Shield, GraduationCap, ArrowRight, Anchor } from "lucide-react";

export default function HistoryLandingPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#fffaf0]">
      {/* Hero Section */}
      <header className="relative bg-[#002366] py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
          <div className="mb-6 flex justify-center">
            <span className="inline-block rounded-full bg-[#ff9933] px-4 py-1 text-xs font-bold uppercase tracking-[0.3em]">
              The Traveling University
            </span>
          </div>
          <h1 className="font-playfair text-5xl font-bold leading-tight sm:text-7xl">
            Lineage of Truth
          </h1>
          <div className="mx-auto mt-8 h-1 w-24 bg-[#ff9933]" />
          <p className="mt-8 text-xl leading-relaxed text-blue-100/90">
            The history of Damdami Taksal is the history of the Sikh Panth itself—a continuous stream of Gurmat Vidya and fearless sacrifice spanning over three centuries.
          </p>
        </div>
      </header>

      {/* Section: The Foundation */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#ff9933]"></span>
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff9933]">
                  Founded 1706
                </p>
              </div>
              <h2 className="font-playfair text-4xl font-bold leading-tight text-[#002366]">
                The Birth at <br /> Damdama Sahib
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                <p>
                  Following the battle of Muktsar, Sri Guru Gobind Singh Ji stayed at Sabo Ki Talwandi (now known as Damdama Sahib) for nine months and nine days. 
                </p>
                <p>
                  It was here that the Guru dictated the entire Sri Guru Granth Sahib Ji from memory to Bhai Mani Singh Ji. During this period, the Tenth Guru established the Taksal (a mint) not for coins, but for the "Minting of the Mind."
                </p>
                <p className="font-semibold text-[#002366]">
                  He taught the correct pronunciation (Santhiya) and meaning (Katha) of Gurbani to 48 dedicated Singhs, with Baba Deep Singh Ji being the first Mukhia Jathedar.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590076215667-875d4ef2d99d?auto=format&fit=crop&q=80&w=800" 
                  alt="Historical Gurmat Vidya"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden bg-[#ff9933] p-8 text-white md:block">
                <p className="font-playfair text-3xl font-bold italic">300+</p>
                <p className="text-xs font-bold uppercase tracking-widest">Years of Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Core Pillars of the Jatha */}
      <section className="bg-[#002366] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="font-playfair text-4xl font-bold">The Pillars of Taksal</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-[#ff9933]" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Book className="text-[#ff9933]" size={32} />,
                title: "Gurbani Vidya",
                desc: "The preservation of authentic Santhiya and the oral tradition of Katha passed down from the Tenth Guru."
              },
              {
                icon: <Shield className="text-[#ff9933]" size={32} />,
                title: "Khalsa Rehat",
                desc: "Maintaining the strict code of conduct, spiritual discipline, and the martial spirit of the Khalsa."
              },
              {
                icon: <GraduationCap className="text-[#ff9933]" size={32} />,
                title: "Dharam Parchar",
                desc: "The relentless duty of traveling and spreading the message of Guru Nanak Dev Ji across the globe."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10">
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="font-playfair text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-blue-100/70 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Navigate to Sub-History */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <h2 className="font-playfair text-4xl font-bold text-[#002366] mb-12">Explore the Legacy</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "The 14 Jathedars", href: "/mahopurakh", icon: <History size={20} /> },
              { label: "The Shaheeds", href: "/history/shaheeds", icon: <Shield size={20} /> },
              { label: "Historical Gurdwaras", href: "/history/gurdwaras", icon: <Anchor size={20} /> },
              { label: "Lineage of Gurus", href: "/history/the-ten-gurus", icon: <Book size={20} /> },
            ].map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="group flex flex-col items-center justify-center rounded-sm border border-slate-200 bg-white p-8 transition-all hover:border-[#ff9933] hover:shadow-xl"
              >
                <div className="mb-4 text-slate-400 group-hover:text-[#ff9933] transition-colors">
                  {item.icon}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#002366]">
                  {item.label}
                </span>
                <ArrowRight size={16} className="mt-4 opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100 text-[#ff9933]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="bg-[#fff2e5] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center italic">
          <p className="font-playfair text-2xl leading-relaxed text-[#002366]">
            "Damdami Taksal is not a mere institution; it is a movement that has stood as a guardian of Sikh values, producing scholars who could explain Gurbani and soldiers who could defend it."
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff9933]" />
          </div>
        </div>
      </section>
    </main>
  );
}