export default function TheTenGurus() {
  const gurus = [
    { id: 1, name: "Sri Guru Nanak Dev Ji", period: "1469 - 1539", desc: "The founder of Sikhism, who spread the message of one God and the equality of all humanity." },
    { id: 2, name: "Sri Guru Angad Dev Ji", period: "1504 - 1552", desc: "Invented the Gurmukhi script and strengthened the institution of Langar." },
    { id: 3, name: "Sri Guru Amar Das Ji", period: "1479 - 1574", desc: "Established the Manji system for spreading Sikhism and championed the rights of women." },
    { id: 4, name: "Sri Guru Ram Das Ji", period: "1534 - 1581", desc: "Founded the holy city of Amritsar and composed the Lavan (marriage hymns)." },
    { id: 5, name: "Sri Guru Arjan Dev Ji", period: "1563 - 1606", desc: "Compiled the Adi Granth and built the Harmandir Sahib (Golden Temple). He was the first Sikh martyr." },
    { id: 6, name: "Sri Guru Har Gobind Ji", period: "1595 - 1644", desc: "Introduced the concept of Miri and Piri (temporal and spiritual power) and built the Akal Takht." },
    { id: 7, name: "Sri Guru Har Rai Ji", period: "1630 - 1661", desc: "A great humanitarian who maintained a large army while focusing on peaceful meditation and healing." },
    { id: 8, name: "Sri Guru Har Krishan Ji", period: "1656 - 1664", desc: "The youngest Guru, known for his healing powers during a smallpox epidemic in Delhi." },
    { id: 9, name: "Sri Guru Tegh Bahadur Ji", period: "1621 - 1675", desc: "Sacrificed his life to protect the religious freedom of others, known as Hind Di Chadar." },
    { id: 10, name: "Sri Guru Gobind Singh Ji", period: "1666 - 1708", desc: "Created the Khalsa Panth in 1699 and established Damdami Taksal to preserve Gurmat Vidya." },
  ];

  return (
    <main className="bg-[#fffaf0]">
      <header className="bg-[#fff2e5] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#ff9933]"></span>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff9933]">Lineage of Light</p>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-[#002366] sm:text-6xl">The Ten Gurus</h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-700">
            From Sri Guru Nanak Dev Ji to Sri Guru Gobind Singh Ji, the lineage of the Ten Gurus established 
            the foundation of the Sikh faith and the Taksal tradition. Each Guru contributed uniquely to the 
            spiritual, social, and martial development of the Khalsa Panth.
          </p>
        </div>
      </header>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2">
            {gurus.map((guru) => (
              <article 
                key={guru.id} 
                className="group relative flex flex-col justify-between rounded-[2px] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-[#ff9933]/30 hover:shadow-xl"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff9933]">Guru {guru.id}</span>
                  <h2 className="mt-2 text-2xl font-bold text-[#002366]">{guru.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-400 italic">{guru.period}</p>
                  <p className="mt-4 leading-relaxed text-slate-600">{guru.desc}</p>
                </div>
                <div className="mt-6 h-1 w-12 bg-slate-100 transition-all group-hover:w-full group-hover:bg-[#ff9933]"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section: Sri Guru Granth Sahib Ji */}
      <section className="bg-[#002366] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-[#ff9933] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Eternal Guru
              </div>
              <h2 className="font-playfair text-3xl font-bold sm:text-4xl">Sri Guru Granth Sahib Ji</h2>
              <p className="text-lg leading-relaxed text-blue-100">
                In 1708, at Hazur Sahib, Sri Guru Gobind Singh Ji conferred the Guruship upon the Adi Granth, 
                commanding all Sikhs to accept the Granth as their Guru. Sri Guru Granth Sahib Ji is the 
                Eternal Living Guru of the Sikhs, containing the divine word (Gurbani).
              </p>
              <p className="italic text-[#ff9933] font-medium">"Sabh Sikhan Ko Hukam Hai, Guru Manyo Granth."</p>
            </div>
            <div className="rounded-[2px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-blue-50">
                Damdami Taksal was specifically established by the tenth Guru to teach the correct 
                pronunciation (Santhiya) and meaning (Arth) of the Shabad-Guru, ensuring the 
                purity of the message for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}