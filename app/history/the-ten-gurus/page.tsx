'use client';

import Link from 'next/link';
import { Book, Shield, Star, Heart, Swords, ArrowRight, Info, Users } from 'lucide-react';

export default function TheTenGurus() {
  const gurus = [
    { 
      id: 1, 
      name: "Sri Guru Nanak Dev Sahib Ji", 
      period: "1469 - 1539 CE", 
      icon: <Star className="text-[#ff9933]" size={20} />,
      desc: "Sri Guru Nanak Dev Jee came to earth to liberate humanity. He spread the message of one God and the equality of all humanity, laying the foundation of the Sikh faith." 
    },
    { 
      id: 2, 
      name: "Sri Guru Angad Dev Sahib Ji", 
      period: "1504 - 1552 CE", 
      icon: <Book className="text-[#ff9933]" size={20} />,
      desc: "Guru Angad Dev Jee (Bhai Lehna ji) was born in Sarai Naga. He strengthened the institution of Langar and formalised the Gurmukhi script for the common people." 
    },
    { 
      id: 3, 
      name: "Sri Guru Amar Das Sahib Ji", 
      period: "1479 - 1574 CE", 
      icon: <Heart className="text-[#ff9933]" size={20} />,
      desc: "He collected an anthology of writings including hymns of Guru Nanak and Guru Angad. He famously compared the language of the people to fresh rain water, abundant and accessible to all." 
    },
    { 
      id: 4, 
      name: "Sri Guru Ram Das Sahib Ji", 
      period: "1534 - 1581 CE", 
      icon: <Users className="text-[#ff9933]" size={20} />,
      desc: "Born at Chuna Mandi Lahore, he was originally named Jetha. He founded the holy city of Amritsar and composed the Lavan hymns for the Sikh marriage ceremony." 
    },
    { 
      id: 5, 
      name: "Sri Guru Arjan Dev Sahib Ji", 
      period: "1563 - 1606 CE", 
      icon: <Shield className="text-[#ff9933]" size={20} />,
      desc: "The treasure of celestial knowledge and the first Sikh martyr. He compiled the Adi Granth and built Harmandir Sahib, standing steadfast for truth even under extreme torture." 
    },
    { 
      id: 6, 
      name: "Sri Guru Hargobind Sahib Ji", 
      period: "1595 - 1644 CE", 
      icon: <Swords className="text-[#ff9933]" size={20} />,
      desc: "A saint, sportsman, and soldier. He combined Miri and Piri, wearing two swords to represent Shakti and Bhakti, protecting the innocent while chastising the oppressor." 
    },
    { 
      id: 7, 
      name: "Sri Guru Har Rai Sahib Ji", 
      period: "1630 - 1661 CE", 
      icon: <Star className="text-[#ff9933]" size={20} />,
      desc: "A man of peace who maintained an army of Saint Soldiers. He focused on meditation and healing, once helping Dara Shikoh escape from the forces of Aurangzeb." 
    },
    { 
      id: 8, 
      name: "Sri Guru Har Krishan Sahib Ji", 
      period: "1656 - 1664 CE", 
      icon: <Heart className="text-[#ff9933]" size={20} />,
      desc: "The youngest Guru, succeeding his father at age five. He was known for his immense healing powers and spiritual maturity, chosen for his unwavering devotion." 
    },
    { 
      id: 9, 
      name: "Sri Guru Tegh Bahadur Sahib Ji", 
      period: "1621 - 1675 CE", 
      icon: <Shield className="text-[#ff9933]" size={20} />,
      desc: "The 'Shield of India'. He sacrificed his life for the welfare of others and the protection of religious freedom. He chose the sword of Piri (spiritual sovereignty) as a child." 
    },
    { 
      id: 10, 
      name: "Sri Guru Gobind Singh Sahib Ji", 
      period: "1666 - 1708 CE", 
      icon: <Swords className="text-[#ff9933]" size={20} />,
      desc: "Created the Khalsa Panth and established Damdami Taksal. He spent his childhood in Patna, admired for his mock battles and spiritual leadership as 'Bala Pritam'." 
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffaf0]">
      {/* Pro Header Section */}
      <header className="bg-white border-b border-slate-100 py-10 sm:py-15">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#ff9933]"></span>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-[#ff9933]">Lineage of Light</p>
              <span className="h-px w-8 bg-[#ff9933]"></span>
            </div>
            <h1 className="font-playfair text-4xl font-bold text-[#002b7a] sm:text-6xl mb-8">The Ten Gurus & Sri Guru Granth Sahib Jee</h1>
            
            <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700">
              <div className="p-8 rounded-[2px] bg-[#002b7a]/5 border-l-4 border-[#ff9933] italic text-slate-800">
                "The word 'Guru' can be broken down into two words: 'gu' meaning darkness and 'ru' meaning light. The meaning refers to the understanding that a Guru is a person who brings you out from the darkness of ignorance and shows you the light of wisdom."
                In Sikhi, ten Gurus graced the earth in human form, starting with Sri Guru Nanak Dev Jee and concluding with Sri Guru Gobind Singh Jee. This succession established the foundation of spiritual, social, and martial excellence.
                Sri Guru Gobind Singh Jee appointed Sri Guru Granth Sahib Jee as the eternal Guru and the embodiment of the ten Gurus. This anthology of the divine is revered as a living Guru, providing constant guidance through the Shabad.
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Ten Gurus Grid */}
      <section className="py-15">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 md:grid-cols-2">
            {gurus.map((guru) => (
              <article 
                key={guru.id} 
                className="group relative flex flex-col justify-between rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#ff9933]/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff9933]/10">
                      {guru.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ff9933]">Sovereign {guru.id}</span>
                  </div>
                  <h2 className="font-playfair text-2xl font-bold text-[#002b7a] transition-colors group-hover:text-[#ff9933]">{guru.name}</h2>
                  <p className="mt-1 text-sm font-bold text-slate-400 uppercase tracking-tighter">{guru.period}</p>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600">{guru.desc}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <Link href={`/history/timeline-events`} className="text-[10px] font-bold uppercase tracking-widest text-[#ff9933] hover:text-[#002b7a] transition-colors flex items-center gap-2">
                    Read more <ArrowRight size={14} />
                  </Link>
                  <div className="h-0.5 w-16 bg-slate-100 transition-all group-hover:w-24 group-hover:bg-[#ff9933]"></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Eternal Guru Section: Sri Guru Granth Sahib Ji */}
      <section className="bg-[#002b7a] py-24 text-white overflow-hidden relative">
        {/* Subtle Decorative Icon */}
        <Book className="absolute -right-20 -top-20 h-80 w-80 text-white/5 rotate-12" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-[2px] bg-[#ff9933] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Eternal Guru
              </div>
              <h2 className="font-playfair text-4xl font-bold sm:text-5xl">Sri Guru Granth Sahib Ji</h2>
              <div className="h-1 w-20 bg-[#ff9933]"></div>
              <p className="text-lg leading-relaxed text-blue-50/90">
                First compiled by Sri Guru Arjan Dev Sahib Ji at Amritsar between 1600-1604, with Bhai Gurdas Sahib Ji serving as the scribe. It is a divine anthology reverently installed at Harimandar Sahib in 1604, with Baba Buddha Sahib Ji as the first Granthi.
              </p>
              <div className="space-y-4">
                <p className="italic text-[#ff9933] font-playfair text-xl">"Sabh Sikhan Ko Hukam Hai, Guru Manyo Granth."</p>
                <p className="text-sm leading-relaxed text-blue-200">
                  Guidance is sought through a Hukamnaama ('order of command'). In 1708, Sri Guru Gobind Singh Jee established the tradition where five Gursikhs could represent the physical Guru in the presence of Sri Guru Granth Sahib Jee.
                </p>
              </div>
            </div>

            {/* Professional Info Block */}
            <div className="rounded-[2px] border border-white/20 bg-white/5 p-10 backdrop-blur-md shadow-2xl space-y-8">
              <div className="flex gap-4">
                <Info className="text-[#ff9933] shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Taksal Tradition</h3>
                  <p className="text-sm leading-relaxed text-blue-50/80">
                    Damdami Taksal was specifically established by the tenth Guru to teach the correct pronunciation (Santhiya) and meaning (Arth) of Gurbani, ensuring the purity of the Shabad-Guru remains uncorrupted through generations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="text-[#ff9933] shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Amrit Sanchar</h3>
                  <p className="text-sm leading-relaxed text-blue-50/80">
                    The initiation ceremony remains an opportunity where the Guru is present in full glory, with five Gursikhs officiating in the presence of Sri Guru Granth Sahib Jee.
                  </p>
                </div>
              </div>
              <Link href="/gurbani/santhiya" className="mt-4 inline-flex items-center gap-2 rounded-[2px] bg-[#ff9933] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#ff9933]/90">
                Explore Gurbani Resources <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}