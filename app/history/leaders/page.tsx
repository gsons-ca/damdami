'use client';

import { useState } from "react";
import { BookOpen, ShieldCheck, Award, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const leaders = [
  {
    id: 0,
    name: "Sri Guru Gobind Singh Sahib Jee",
    title: "The Tenth Guru & Founder",
    period: "1666 – 1708",
    bio: "The Damdami Taksal is a traveling Sikh university founded by the tenth Guru of the Sikhs Guru Gobind Singh Ji. Guru Ji corrected a Gursikh's recitation, teaching that Gurbani is like a limb of the Guru.",
    fullBio: "The Damdami Taksal is a traveling Sikh university founded by the tenth Guru of the Sikhs Guru Gobind Singh Ji. The tenth Guru Guru Gobind Singh was at Anandpur Sahib delivering his Sikhs to Sachkhand. A Gursikh was reciting his daily prayer from Guru Granth Sahib with love and respect when he made a mistake. The Guru corrected his mistake informing him that prayer from the Guru Granth Sahib is just like a limb of Guru and making a mistake while reciting Gurbani is like hurting Guru. Following this Daya Singh along with other respected Gursikhs asked Guru if they could follow him learning proper pronunciation and prayer from the Guru Granth Sahib. \"Oh keeper of the poor! Bless us with the understanding of Gurbani. Without an understanding we don't know whether what we do is correct or incorrect.",
    stats: [
      { label: "Name", value: "Satguru Gobind Singh Jee (Sodh lineage)" },
      { label: "Place of Avtar", value: "Sri Patna Sahib Bihar" },
      { label: "Date of Avtar", value: "1723 Bikrami Poh Sunday 1st January 1666" },
      { label: "Parents", value: "Mata Gujri Jee Sri Guru Tegh Bahadur Sahib Jee" },
      { label: "Wife/consort", value: "Mata Ajit Kaur Jee, Mata Sunder Kaur Jee, Mata Sahib Kaur Jee" },
      { label: "Ascension to Guruship", value: "1732 Bikrami Maghar 17th December 1675 AD - Sri Anandpur Sahib" },
      { label: "Ascension to Sach Kand", value: "1765 Bikrami Katak 19th November 1708 AD - Sri Hajoor Sahib Nander" },
      { label: "Kin", value: "Sons - Baba Ajit Singh Jee (Born to Mata Sunder Kaur Jee), Baba Jujhar Singh Jee, Baba Zoravar Singh Jee, Baba Fateh Singh Jee (Born to Mata Ajit Kaur Jee)" },
      { label: "Lifespan", value: "41 years 9 months 28 days" },
      { label: "Guruship", value: "32 years 11 months 2 days" },
    ],
    image: "/Sri_Guru_Gobind_Singh_sahib_Jee.png",
  },
  {
    id: 1,
    name: "Baba Deep Singh Ji Shaheed",
    title: "1st Mukhia Jathedar",
    period: "1682 – 1757",
    bio: "The legendary scholar and warrior who scribed the Guru Granth Sahib and famously fought to liberate Harmandir Sahib, fulfilling his vow even after being decapitated in battle.",
    fullBio: "Baba ji was born in the village of Pahuvind in 1682. He carried out the seva of providing paper, pens, and ink for the compilation of Sri Guru Granth Sahib ji at Damdama Sahib. Just before leaving the world, Sri Guru Gobind Singh ji ordered Baba Deep Singh ji to continue the Taksal that taught Gursikhs the correct meanings and pronunciations of Gurbani. Baba ji was not only a great scholar in Gurmukhi but also in Arabic and Persian. In his final battle against Jahan Khan, despite being decapitated, Baba ji picked up his head in his left hand and continued fighting until he reached the parkarma of Sri Harmandir Sahib, where he placed his head at the feet of Guru Sahib ji.",
    stats: [
      { label: "Birth Place", value: "Village Pahuvind, District Amritsar" },
      { label: "Birth Year", value: "1682" },
      { label: "Parents", value: "Father: Bhagto ji, Mother: Jioonee" },
      { label: "Key Seva", value: "Scribing Sri Guru Granth Sahib Ji & Managing Damdama Sahib" },
      { label: "Languages", value: "Gurmukhi, Arabic, Persian" },
      { label: "Martyrdom", value: "1757 - Sri Amritsar Sahib" }
    ],
    image: "/Baba_Deep_Singh_Jee_Shaheed.png",
  },
  {
    id: 2,
    name: "Baba Gurbaksh Singh Ji Shaheed",
    title: "2nd Mukhia Jathedar",
    period: "1688 – 1764",
    bio: "A saint-soldier trained by Baba Deep Singh Ji who led the Taksal and Akal Takhat, ultimately leading a heroic stand of 30 Sikhs against the 10th invasion of Ahmed Shah Abdali.",
    fullBio: "Baba Gurbaksh Singh ji was born to Bhai Dasaunda Singh and Mata Lachmi ji. He entered the path of Sikhi in 1699 by taking Amrit at the age of 11. He was trained in Gurmat Vidya and Shastar Vidya by Bhai Mani Singh ji and Baba Deep Singh ji. In 1765, when Ahmed Shah Abdali attacked India, Baba ji was the Jathedar of both Damdami Taksal and Sri Akal Takhat Sahib. Along with 30 other Sikhs, he 'wedded death' to protect the holiest shrines, fighting relentlessly even after decapitation until the enemy General begged for forgiveness.",
    stats: [
      { label: "Birth Place", value: "Village Leel (near Khemkaran)" },
      { label: "Birth Year", value: "1688 AD" },
      { label: "Parents", value: "Bhai Dasaunda Singh and Mata Lachmi ji" },
      { label: "Mentors", value: "Bhai Mani Singh ji and Baba Deep Singh ji" },
      { label: "Command", value: "Jathedar of Damdami Taksal & Sri Akal Takhat Sahib" },
      { label: "Martyrdom", value: "1765 - Behind Sri Akal Takhat Sahib" }
    ],
    image: "/Baba_Gurbaksh_Singh_Jee_Shaheed.png",
  },
  {
    id: 3,
    name: "Giani Bhai Soorat Singh Jee",
    title: "3rd Mukhia Jathedar",
    period: "18th Century",
    bio: "A master scholar and ocean of knowledge who accepted Amrit from the Tenth Guru. He dedicated his life to writing sateeks and teaching Gurbani Santhia and Katha in Amritsar.",
    fullBio: "Bhai Soorat Singh ji was born in Chanyot. He was taught by Shaheed Bhai Mani Singh ji and Shaheed Baba Gurbaksh Singh ji, and was highly regarded for his scholarship in Farsi, Urdu, and Hindi. Giani ji spent significant time in Amritsar teaching Gurbani Santhia and performing daily Katha for the sangat. He was a prolific writer, documenting the Katha he heard from Bhai Mani Singh and writing a sateek (translation) of the Vars of Bhai Gurdas ji.",
    stats: [
      { label: "Birth Place", value: "Village Chanyot, District Jhang (Pakistan)" },
      { label: "Father", value: "Bhai Ram Singh ji" },
      { label: "Languages", value: "Gurmukhi, Farsi, Urdu, Hindi" },
      { label: "Literary Works", value: "Vars of Bhai Gurdas Ji Sateek & Pothis of Katha" },
      { label: "Location", value: "Amritsar" }
    ],
    image: "/Baba_Soorat_Singh_ji.png",
  },
  {
    id: 4,
    name: "Bhai Gurdas Singh Jee",
    title: "4th Mukhia Jathedar",
    period: "1773 – 1800s",
    bio: "The eldest son of Giani Soorat Singh ji and a renowned scholar who continued the Taksal's tradition of Gurbani discourse at Sri Harmandir Sahib.",
    fullBio: "Bhai Gurdas Singh ji was the eldest son of Giani Soorat Singh ji. Like his father, Bhai Sahib ji was a great scholar and took up the mantle of Jathedar of Damdami Taksal. He continued the sacred tradition of teaching Gurbani Santhia and performing Katha at Sri Harmandir Sahib. His steadfastness in the faith was exemplified when his son, Bhai Sher Singh, became a martyr for the Khalsa Panth; Bhai Sahib ji remained in a state of high spiritual poise, quoting Gurbani to describe the nature of attachment and divine justice.",
    stats: [
      { label: "Birth Year", value: "1773" },
      { label: "Father", value: "Giani Soorat Singh ji" },
      { label: "Role", value: "Jathedar of Damdami Taksal" },
      { label: "Seva", value: "Katha at Sri Harmandir Sahib" },
      { label: "Family Legacy", value: "Son: Shaheed Bhai Sher Singh" }
    ],
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
  {
    id: 16,
    name: "Giani Bhai Sant Singh Jee",
    title: "Jathedar",
    period: "Unknown",
    bio: "Biography coming soon.",
    image: "/placeholder_leader.png",
  },
  {
    id: 17,
    name: "Sant Daya Singh Jee",
    title: "Jathedar",
    period: "Unknown",
    bio: "Biography coming soon.",
    image: "/placeholder_leader.png",
  },
  {
    id: 18,
    name: "Sant Giani Bhagvan Singh Jee",
    title: "Jathedar",
    period: "Unknown",
    bio: "Biography coming soon.",
    image: "/placeholder_leader.png",
  },
  {
    id: 19,
    name: "Sant Baba Harnam Singh Jee Bedi",
    title: "Jathedar",
    period: "Unknown",
    bio: "Biography coming soon.",
    image: "/placeholder_leader.png",
  },
  {
    id: 20,
    name: "Sant Baba Bishan Singh Ji Muralewale",
    title: "Jathedar",
    period: "Unknown",
    bio: "Biography coming soon.",
    image: "/placeholder_leader.png",
  },
  {
    id: 21,
    name: "Sant Giani Sundar Singh Jee Bhindranwale",
    title: "Jathedar",
    period: "Unknown",
    bio: "Biography coming soon.",
    image: "/placeholder_leader.png",
  },
];

export default function LeadersPage() {
  const [selectedLeader, setSelectedLeader] = useState<null | typeof leaders[0]>(null);

  type LeaderDetail = (typeof leaders)[number] & {
    fullBio?: string;
    stats?: { label: string; value: string }[];
  };

  return (
    <main className="min-h-screen bg-[#fffaf0]">
      {/* Hero / Header Section */}
      <header className="relative bg-[#002366] py-25 text-white">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
          <h1 className="font-playfair text-5xl font-bold leading-tight sm:text-7xl">
            Leaders of Damdami Taksaal
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-blue-100/80">
            The jathedhars of Damdami Taksaal have led the Sikh nation since the times of the Tenth Master (Sri Guru Gobind Singh Jee). They have been some of the most high-spirited, humble and greatest beings to have graced the Earth and have set good examples on how to live life in accordance with the teachings of the Ten Gurus and Sri Guru Granth Sahib Jee. 
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
          </div>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader: LeaderDetail) => (
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
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 italic line-clamp-4">
                    "{leader.bio}"
                  </p>

                  <button 
                    onClick={() => setSelectedLeader(leader)}
                    className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff9933] hover:text-[#002366] transition-colors self-start cursor-pointer"
                  >
                    See more...
                  </button>
                  
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

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="absolute inset-0 bg-[#002366]/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-[#fffaf0] p-6 sm:p-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedLeader(null)}
                className="absolute right-4 top-4 text-slate-400 hover:text-[#002366] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[#ff9933] shadow-xl">
                    <img 
                      src={selectedLeader.image} 
                      alt={selectedLeader.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-playfair text-3xl font-bold text-[#002366]">{selectedLeader.name}</h2>
                    <p className="mt-2 text-[#ff9933] font-bold uppercase tracking-[0.2em] text-xs">{selectedLeader.title}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative border-l-4 border-[#ff9933] bg-white p-6 shadow-sm">
                    <p className="text-sm leading-relaxed text-slate-700 italic">
                      {(selectedLeader as LeaderDetail).fullBio || selectedLeader.bio}
                    </p>
                  </div>

                  {(selectedLeader as LeaderDetail).stats && (
                    <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
                      <table className="w-full text-left text-sm">
                        <tbody className="divide-y divide-slate-100">
                          {(selectedLeader as LeaderDetail).stats?.map((stat, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                              <td className="bg-slate-50 p-3 font-bold text-[#002366] w-1/3 border-r border-slate-100">
                                {stat.label}
                              </td>
                              <td className="p-3 text-slate-600">
                                {stat.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}