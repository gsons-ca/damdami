'use client';

import { useState } from "react";
import Link from "next/link";
import { BookOpen, History, Users, PlayCircle, GraduationCap, Shield, ArrowRight } from "lucide-react";

const leadersData = [
  {
    name: "Baba Deep Singh Ji",
    src: "Baba_Deep_Singh_Jee_Shaheed.png",
    desc: "Respected Panthic diamond treasure-trove of knowledge Brahm Giani complete in the practices of the Khalsa Sant…",
  },
  {
    name: "Baba Gurbaksh Singh Ji",
    src: "guru2.png",
    desc: "A fearless leader who stood as the vanguard of the Sikh Panth, upholding the scholarly traditions while leading the Khalsa in defense of the faith.",
  },
  {
    name: "Baba Soorat Singh Ji",
    src: "guru3.png",
    desc: "A master of Gurbani Vidya who ensured the continuity of the Taksal's unique oral tradition and interpretation (Katha) during turbulent times.",
  },
  {
    name: "Sant Giani Sundar Singh Ji",
    src: "Sant_Giani_Sundar_Singh_Jee_Bhindranwale.png",
    desc: "Credited with modernizing the Taksal's structure, he was a giant of Gurbani Santhiya and a key figure in the Singh Sabha movement.",
  },
  {
    name: "Sant Giani Gurbachan Singh Ji",
    src: "Sant_Giani_Gurbachan_Singh_Jee_Khalsa_Bhindranwale.png",
    desc: "Affectionately known as 'Khalsa Ji', he completed the entire Katha of Sri Guru Granth Sahib Ji 27 times, traveling globally to spread Gurmat.",
  },
  {
    name: "Sant Giani Kartar Singh Ji",
    src: "Sant_Giani_Kartar_Singh_Jee_Khalsa_Bhindranwale.png",
    desc: "A fearless protector of Sikh identity and Maryada who led massive marches against the suppression of Sikh rights in the 1970s.",
  },
  {
    name: "Sant Giani Jarnail Singh Ji",
    src: "guru7.png",
    desc: "The 20th century’s great General the heart of the Sikh youth charismatic personality Sant Jarnail Singh…",
  },
  {
    name: "Baba Thakur Singh Ji",
    src: "guru8.png",
    desc: "Sant Jee led the Sikh nation into the new millenium Baba Takhur Singh Jee was born…",
  },
];

export default function HomePage() {
  const [showAll, setShowAll] = useState(false);
  const visibleLeaders = showAll ? leadersData : leadersData.slice(0, 3);

  return (
    <main className="relative overflow-x-hidden">
      {/* Section 1: Hero - The Throne of Knowledge */}
      <header className="relative overflow-hidden bg-white pb-20 pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="header_background.png" 
            alt="Header Background" 
            loading="eager"
            className="h-full w-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 text-center sm:px-8 lg:px-12">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#ff9933]"></span>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff9933]">
                Established 1706
              </p>
            </div>
            <div className="space-y-6">
              <h1 className="mx-auto max-w-4xl font-playfair text-4xl font-bold leading-tight text-[#002366] sm:text-5xl">
                Damdami Taksal Canada — honouring lineage, Sikh culture, and Gurmat education in the diaspora.
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-700">
                Founded by Sri Guru Gobind Singh Ji, Damdami Taksal is the eternal school of Sikh philosophy, dedicated to preserving the authentic oral tradition, Gurbani Santhiya, and the Khalsa Rehat.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/history" className="inline-flex items-center justify-center rounded-[2px] bg-[#002366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#001f55] shadow-lg shadow-blue-900/20">
                Our History
              </Link>
              <Link href="/gurbani/santhiya" className="inline-flex items-center justify-center rounded-[2px] border-2 border-[#002366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#002366] transition hover:bg-[#002366] hover:text-white">
                Spiritual Resources
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Section: Welcome to Damdami Taksal */}
      <section className="bg-white py-24 border-b border-slate-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-10">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#ff9933]"></span>
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff9933]">
                  Ji Aayan Nu
                </p>
              </div>
              <h2 className="font-playfair text-4xl font-bold leading-tight text-[#002366] sm:text-5xl">
                Welcome to Damdami Taksal
              </h2>

              <div className="flex flex-wrap justify-center gap-10 mt-4">
                <Link href="/gurbani/katha" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff9933] hover:text-[#002366] transition-colors">
                  Katha
                </Link>
                <Link href="/history/leaders" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff9933] hover:text-[#002366] transition-colors">
                  Leaders
                </Link>
                <Link href="/history/the-ten-gurus" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff9933] hover:text-[#002366] transition-colors">
                  The Ten Gurus
                </Link>
                <Link href="/media" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff9933] hover:text-[#002366] transition-colors">
                  Media
                </Link>
              </div>
              
              {/* Professional Guru Image Gallery */}
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                {visibleLeaders.map((leader, i) => (
                  <Link
                    key={i}
                    href="/history/leaders"
                    className="group relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-lg border-2 border-transparent transition-all duration-700 hover:border-[#ff9933] hover:shadow-2xl sm:w-[260px]"
                  >
                    <img
                      src={leader.src}
                      alt={leader.name}
                      className="h-full w-full object-cover transition-all duration-[1.5s] grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                    {/* Hover Overlay with text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#002366]/85 p-4 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <h3 className="mb-1 font-playfair text-sm font-bold text-[#ff9933] lg:text-base">
                        {leader.name}
                      </h3>
                      <div className="mb-3 h-px w-8 bg-white/20" />
                      <p className="text-[9px] leading-relaxed text-white sm:text-[11px] lg:text-xs">
                        {leader.desc}
                      </p>
                      <div className="mt-3 h-px w-8 bg-white/20" />
                    </div>
                  </Link>
                ))}
              </div>

              {!showAll && (
                <button 
                  onClick={() => setShowAll(true)}
                  className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff9933] hover:text-[#002366] transition-all hover:scale-105 active:scale-95"
                >
                  See more...
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Gurmat Education - Core Pillars */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="font-playfair text-4xl font-bold text-[#002366] sm:text-5xl">Aims & Objectives</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#ff9933]"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Updated Aims & Objectives to match reference design */}
            {[ 
              {
                title: "Gurbani Santhiya",
                desc: "Providing the correct pronunciation and punctuation of Gurbani as taught by the tenth Guru.",
                imageSrc: "/santhiya_card.jpg", // Placeholder image - ensure this image exists in your public folder
                imageAlt: "Students learning Gurbani Santhiya",
                linkHref: "/gurbani/santhiya",
              },
              {
                title: "Gurmat Katha",
                desc: "Expounding upon the deep meanings of Sri Guru Granth Sahib Ji through historical context.",
                imageSrc: "/katha_card.jpg", // Placeholder image - ensure this image exists in your public folder
                imageAlt: "Sikh scholar giving Gurmat Katha",
                linkHref: "/gurbani/katha",
              },
              {
                title: "Khalsa Rehat",
                desc: "Maintaining the pristine code of conduct and martial spirit of the Khalsa Panth.",
                imageSrc: "/rehat_card.jpg", // Placeholder image - ensure this image exists in your public folder
                imageAlt: "Khalsa practicing traditional martial arts",
                linkHref: "/code-of-conduct/rehat",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="group relative h-72 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <img
                  src={pillar.imageSrc}
                  alt={pillar.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002366] to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95"></div>
                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <h3 className="font-playfair text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-90">{pillar.desc}</p>
                  <Link href={pillar.linkHref} className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#ff9933] hover:underline">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
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
                src='school.png'
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
              <div className="flex flex-wrap gap-6">
                <Link href="/history/leaders" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#ff9933] hover:underline">
                  The Jathedars <History size={18} />
                </Link>
                <Link href="/history/shaheeds" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#ff9933] hover:underline">
                  The Shaheeds <Shield size={18} />
                </Link>
              </div>
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
