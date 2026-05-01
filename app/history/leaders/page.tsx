import Link from "next/link";
import { ArrowLeft, BookOpen, ShieldCheck, Award } from "lucide-react";

const leaders = [
  {
    id: 0,
    name: "Sri Guru Gobind Singh Sahib Jee",
    title: "The Tenth Guru & Founder",
    period: "1666 – 1708",
    bio: "The Damdami Taksal is a traveling Sikh university founded by the tenth Guru of the Sikhs Guru Gobind Singh Ji. The tenth Guru Guru Gobind Singh was at Anandpur Sahib delivering his Sikhs to Sachkhand. A Gursikh was reciting his daily prayer from Guru Granth Sahib with love and respect when he made a mistake. The Guru corrected his mistake informing him that prayer from the Guru Granth Sahib is just like a limb of Guru and making a mistake while reciting Gurbani is like hurting Guru. Following this Daya Singh along with other respected Gursikhs asked Guru if they could follow him learning proper pronunciation and prayer from the Guru Granth Sahib. 'Oh keeper of the poor! Bless us with the understanding of Gurbani. Without an understanding we don't know whether what we do is correct or incorrect.",
    image: "/Sri_Guru_Gobind_Singh_Ji.png",
  },
  {
    id: 1,
    name: "Baba Deep Singh Ji Shaheed",
    title: "1st Mukhia Jathedar",
    period: "1682 – 1757",
    bio: "Baba ji was born in the village of Pahuvind district Amritsar in the year 1682. Baba ji's fathers name was Bhagto ji and mothers name was Jioonee. From a young age Baba ji had practiced reciting Gurbani singing Kirtan and doing sangat of fellow Gursikhs morning and night. He regularly went horse riding and training in Shastar Vidya (weapons training). He was a lovable and popular character who conducted himself very well. The people in his locality treated him with great respect because of his religious nature.",
    image: "/Baba_Deep_Singh_Jee_Shaheed.png",
  },
  {
    id: 2,
    name: "Baba Gurbaksh Singh Ji Shaheed",
    title: "2nd Mukhia Jathedar",
    period: "1688 – 1764",
    bio: "Bhai Dasaunda Singh and Mata Lachmi ji from the village Leel (near Khemkaran) District Amritsar came to the live in the company of Sri Guru Gobind Singh Sahib ji and the Sikh Sangats (Congregation). Guru ji commanded them both to take part in the Seva (selfless service) of the house of the Lord with love. Impressed with their selfless service Guru ji granted their wish and blessed them with a son who would be a saint-soldier Baba Gurbaksh Singh ji was born in 1688 AD.",
    image: "/Baba_Gurbaksh_Singh_Jee_Shaheed.png",
  },
  {
    id: 3,
    name: "Giani Bhai Soorat Singh Jee",
    title: "3rd Mukhia Jathedar",
    period: "18th Century",
    bio: "Bhai Soorat Singh ji was born in thee village of Chanyot District Jhang (now in Pakistan). Giani ji's fathers name was Ram Chand who was renamed Bhai Ram Singh ji when initiated into the Sikh nation upon taking Amrit. Bhai Ram Singh ji studied Gurbani from Shaheed Bhai Mani Singh ji and propagated the teachings of Sikhi throughout Jhang. The Rulers minister in the area disliked what Bhai Soorat Singh ji was doing so along with his family he relocated to Amritsar.",
    image: "/Baba_Soorat_Singh_ji.png",
  },
  {
    id: 4,
    name: "Bhai Gurdas Singh Jee",
    title: "4th Mukhia Jathedar",
    period: "1773 – 1800s",
    bio: "Bhai Gurdas Singh ji was the eldest son of Giani Soorat Singh ji and were born in 1773. Like his father Bhai Sahib ji was a great scholar. Bhai Sahib ji became the Jathedar of Damdami Taksal after his father and continued the teaching of Gurbani Santhia and performing Katha at Sri Harmandir Sahib.",
    image: "/Bhai_Gurdas_Singh_Jee.png",
  },
  {
    id: 12,
    name: "Sant Giani Gurbachan Singh Ji",
    title: "12th Mukhia Jathedar",
    period: "1902 – 1969",
    bio: "Affectionately known as 'Khalsa Ji', he completed the full Katha of Sri Guru Granth Sahib Ji 27 times, reviving the oral tradition globally.",
    image: "/Sant_Giani_Gurbachan_Singh_Jee_Khalsa_Bhindranwale.png",
  },
  {
    id: 13,
    name: "Sant Giani Kartar Singh Ji",
    title: "13th Mukhia Jathedar",
    period: "1932 – 1977",
    bio: "A fearless protector of Gurbani Maryada who led the massive marches against the suppression of Sikh identity in the 1970s.",
    image: "/Sant_Giani_Kartar_Singh_Jee_Khalsa_Bhindranwale.png",
  },
  {
    id: 14,
    name: "Sant Giani Jarnail Singh Ji",
    title: "14th Mukhia Jathedar",
    period: "1947 – 1984",
    bio: "The 20th century’s great General the heart of the Sikh youth charismatic personality Sant Jarnail Singh…",
    image: "/Sant_Giani_Jarnail_Singh_Ji.png",
  },
  {
    id: 15,
    name: "Baba Thakur Singh Ji",
    title: "Acting Jathedar (1984-2004)",
    period: "1915 – 2004",
    bio: "Sant Jee led the Sikh nation into the new millenium Baba Takhur Singh Jee was born…",
    image: "/Baba_Thakur_Singh_Ji.png",
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