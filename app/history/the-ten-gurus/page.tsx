const gurus = [
  {
    name: "Guru Nanak Dev Ji",
    years: "1469 – 1539",
    description: "The founder of the Sikh faith who laid the spiritual foundation of Gurmat. He traveled globally to spread the message of Ik Onkar and equality, establishing the tradition of Shabad-Guru that the Taksal preserves today.",
  },
  {
    name: "Guru Angad Dev Ji",
    years: "1504 – 1552",
    description: "Standardized the Gurmukhi script, providing the linguistic vessel for Gurbani. He formalised the institution of Langar and emphasized the discipline of body and mind in service to the Creator.",
  },
  {
    name: "Guru Amar Das Ji",
    years: "1479 – 1574",
    description: "Established the Manji system of spiritual administration to disseminate Gurmat Vidya. He was a champion of social equality and institutionalized the practice of 'Pangat' before 'Sangat'.",
  },
  {
    name: "Guru Ram Das Ji",
    years: "1534 – 1581",
    description: "Founded the holy city of Amritsar and composed the Laavan, the sacred hymns of the Sikh marriage ceremony. His humility and service remain the primary examples for every seeker of Gurbani interpretation.",
  },
  {
    name: "Guru Arjan Dev Ji",
    years: "1563 – 1606",
    description: "The compiler of the Adi Granth and builder of Sri Harmandir Sahib. His supreme sacrifice for the truth established the precedent of the Saint-Martyr within the Sikh tradition.",
  },
  {
    name: "Guru Hargobind Ji",
    years: "1595 – 1644",
    description: "Introduced the concept of Miri-Piri, representing spiritual and temporal sovereignty. He established the Akal Takht and militarized the Panth to defend the oppressed and the faith.",
  },
  {
    name: "Guru Har Rai Ji",
    years: "1630 – 1661",
    description: "A symbol of compassion who maintained a specialized hospital for all beings. He upheld the sanctity of Gurbani, refusing to alter a single word to please political authorities.",
  },
  {
    name: "Guru Har Krishan Ji",
    years: "1656 – 1664",
    description: "The child-Guru who embodied divine wisdom and healing power. He spent his final days serving those suffering from smallpox in Delhi, showing that age is no barrier to spiritual enlightenment.",
  },
  {
    name: "Guru Tegh Bahadur Ji",
    years: "1621 – 1675",
    description: "Known as 'Hind Di Chadar', he sacrificed his life to protect the fundamental right to freedom of religion. His martyrdom for the sake of others is unparalleled in global history.",
  },
  {
    name: "Guru Gobind Singh Ji",
    years: "1666 – 1708",
    description: "The founder of the Khalsa Panth and the Tenth Master who bestowed eternal Guruship upon Sri Guru Granth Sahib Ji. He founded Damdami Taksal to ensure the correct oral tradition and meaning of the Shabad were preserved.",
  },
];

export default function TheTenGurusPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header Section */}
        <header className="mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-950/60">Historical Heritage</p>
          <h1 className="mt-4 font-playfair text-4xl font-bold text-blue-950 sm:text-5xl">
            The Ten Gurus
          </h1>
          <div className="mt-6 h-1 w-20 bg-blue-950/20" />
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-700">
            The foundation of the Sikh faith was established through the divine light of ten Gurus. 
            Each Guru contributed to the spiritual, social, and political structure of the Panth, 
            leading eventually to the eternal Guruship of Sri Guru Granth Sahib Ji.
          </p>
        </header>

        {/* Gurus Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gurus.map((guru, index) => (
            <article 
              key={index}
              className="flex flex-col border border-stone-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#002366]/40">
                  Sikh Guru {index + 1}
                </span>
                <span className="text-[10px] font-medium text-stone-400">
                  {guru.years}
                </span>
              </div>
              
              <div className="flex-1">
                <h2 className="font-playfair text-2xl font-bold text-[#002366]">
                  {guru.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {guru.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
