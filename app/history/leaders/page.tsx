import Link from "next/link";
import Image from "next/image";

const leaders = [
  {
    id: "1",
    name: "Baba Deep Singh Ji",
    title: "1st Mukhia Jathedar",
    bio: "The legendary scholar-warrior hand-picked by Guru Gobind Singh Ji to lead the Taksal. He was a master of Gurbani and a martyr who sacrificed his life for the sanctity of Harmandir Sahib.",
    slug: "baba-deep-singh-ji",
  },
  {
    id: "2",
    name: "Baba Gurbaksh Singh Ji",
    title: "2nd Mukhia Jathedar",
    bio: "A fearless leader who stood as the vanguard of the Sikh Panth, upholding the scholarly traditions while leading the Khalsa in defense of the faith.",
    slug: "baba-gurbaksh-singh-ji",
  },
  {
    id: "12",
    name: "Sant Giani Gurbachan Singh Ji",
    title: "12th Mukhia Jathedar",
    bio: "Known as 'Khalsa Ji', he completed the full Katha of Sri Guru Granth Sahib Ji 27 times and traveled the world to spread the light of Gurmat.",
    slug: "sant-gurbachan-singh-ji",
  },
  {
    id: "13",
    name: "Sant Giani Kartar Singh Ji",
    title: "13th Mukhia Jathedar",
    bio: "A fearless protector of Sikh identity and Maryada who led the Taksal through a critical era of religious and cultural preservation.",
    slug: "sant-kartar-singh-ji",
  },
  {
    id: "14",
    name: "Sant Giani Jarnail Singh Ji",
    title: "14th Mukhia Jathedar",
    bio: "A pivotal figure in modern history, revitalizing the spirit of Amrit and the concept of Miri-Piri among the global Sikh diaspora.",
    slug: "sant-jarnail-singh-ji",
  },
  {
    id: "15",
    name: "Baba Thakur Singh Ji",
    title: "Acting Jathedar (1984-2004)",
    bio: "The embodiment of humility and service, he managed the Taksal with grace for two decades, ensuring the lineage remained strong.",
    slug: "baba-thakur-singh-ji",
  },
];

export default function LeadershipHistoryPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <header className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#002366]/60">Historical Lineage</p>
          <h1 className="mt-4 font-playfair text-4xl font-bold text-[#002366] sm:text-5xl">Leadership History</h1>
          <div className="mx-auto mt-6 h-1 w-20 bg-[#002366]/20" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">
            Honouring the succession of Mahapurakhs who have preserved the authentic Gurmat Vidya and Maryada.
          </p>
        </header>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article 
              key={leader.id} 
              className="flex flex-col border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              {/* Portrait Placeholder */}
              <div className="relative mb-6 aspect-square w-full overflow-hidden bg-slate-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-[#002366]/10 text-[#002366]/20">
                   <span className="text-xs font-bold uppercase tracking-widest">Portrait {leader.id}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#002366]/50">{leader.title}</p>
                  <h2 className="font-playfair text-2xl font-bold text-[#002366]">{leader.name}</h2>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {leader.bio}
                </p>
              </div>

              <Link 
                href={`/history/leaders/${leader.slug}`}
                className="mt-8 inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#002366] hover:underline"
              >
                Read More <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}