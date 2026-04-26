import Link from "next/link";
import { BookOpen, History, Users, PlayCircle, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Section 1: Hero - The Throne of Knowledge */}
      <header className="relative bg-[#fff2e5] pb-20 pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff9933]"></span>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff9933]">
                Established 1706
              </p>
            </div>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-playfair text-4xl font-bold leading-tight text-[#002366] sm:text-5xl">
                Damdami Taksal Canada — honouring lineage, Sikh culture, and Gurmat education in the diaspora.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Founded by Sri Guru Gobind Singh Ji, Damdami Taksal is the eternal school of Sikh philosophy, dedicated to preserving the authentic oral tradition, Gurbani Santhiya, and the Khalsa Rehat.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/history" className="inline-flex items-center justify-center rounded-[2px] bg-[#002366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#001f55] shadow-lg shadow-blue-900/20">
                Our History
              </Link>
              <Link href="/gurbani/santhiya" className="inline-flex items-center justify-center rounded-[2px] border-2 border-[#002366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#002366] transition hover:bg-[#002366] hover:text-white">
                Spiritual Resources
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl ring-8 ring-white">
            <img
              src="damdami_image.png"
              alt="Traditional Sikh Gurmat Vidya gathering"
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Section 2: Gurmat Education - Core Pillars */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="font-playfair text-4xl font-bold text-[#002366] sm:text-5xl">Aims & Objectives</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#ff9933]"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gurbani Santhiya",
                desc: "Providing the correct pronunciation and punctuation of Gurbani as taught by the tenth Guru.",
                icon: GraduationCap,
                color: "bg-blue-50 text-blue-700",
              },
              {
                title: "Gurmat Katha",
                desc: "Expounding upon the deep meanings of Sri Guru Granth Sahib Ji through historical context.",
                icon: BookOpen,
                color: "bg-orange-50 text-[#ff9933]",
              },
              {
                title: "Khalsa Rehat",
                desc: "Maintaining the pristine code of conduct and martial spirit of the Khalsa Panth.",
                icon: History,
                color: "bg-slate-50 text-slate-700",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="group rounded-[2px] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:border-[#ff9933]/30 hover:shadow-xl">
                <pillar.icon className={`mb-6 h-12 w-12 rounded-lg p-2.5 ${pillar.color}`} />
                <h3 className="text-xl font-bold text-[#002366]">{pillar.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Eternal Lineage */}
      <section className="bg-[#002366] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-video overflow-hidden rounded-sm shadow-2xl">
              <img
                src='prayer_image.png'
                alt="Community gathering and prayer"
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002366] via-transparent to-transparent"></div>
            </div>
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-[#ff9933] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Legacy of Martyrs
              </div>
              <h2 className="font-playfair text-4xl font-bold sm:text-5xl">The 14 Jathedars</h2>
              <p className="text-lg leading-relaxed text-blue-100">
                From the first Jathedar, Baba Deep Singh Ji Shaheed, to the present, the Taksal has been led by Brahmgianis who dedicated their lives to the Guru's service.
              </p>
              <div className="space-y-4 border-l-2 border-[#ff9933] pl-6">
                <p className="italic text-blue-200">"The history of Damdami Taksal is written with the blood of martyrs and the ink of scholars."</p>
              </div>
              <Link href="/history/leaders" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#ff9933] hover:underline">
                Read Historical Records <History size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Multimedia & Resources */}
      <section className="bg-[#fffaf0] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="font-playfair text-4xl font-bold text-[#002366]">Digital Library</h2>
            <div className="mt-4 h-1 w-24 bg-[#ff9933]"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-6 rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
              <PlayCircle size={48} className="shrink-0 text-[#002366]" />
              <div>
                <h3 className="text-xl font-bold text-[#002366]">Audio & Video Katha</h3>
                <p className="mt-2 text-slate-600">Access thousands of hours of Katha by Mahapurakhs on Sri Guru Granth Sahib Ji and Suraj Parkash.</p>
                <Link href="/media" className="mt-4 inline-block text-sm font-bold text-[#ff9933] hover:underline">Listen Online</Link>
              </div>
            </div>
            <div className="flex gap-6 rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
              <BookOpen size={48} className="shrink-0 text-[#002366]" />
              <div>
                <h3 className="text-xl font-bold text-[#002366]">Pothis & Publications</h3>
                <p className="mt-2 text-slate-600">Download authentic Taksal publications, Gutka Sahibs, and Steeks for deep Gurbani study.</p>
                <Link href="/gurbani" className="mt-4 inline-block text-sm font-bold text-[#ff9933] hover:underline">View Library</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
