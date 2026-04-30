'use client';

import Link from 'next/link';
import { Shield, History, ArrowLeft, Info } from 'lucide-react';

export default function TimelineEventsPage() {
  const timelineEvents = [
    {
      year: '1978',
      title: 'Bloody Vaisakhi',
      image:"1978_Bloody_Vaisakhi.png",
      subtitle: 'Defending the Sanctity of Sri Guru Granth Sahib Ji',
      icon: <Shield className="text-[#ff9933]" size={24} />,
      content: `Over 1 million Sikh pilgrims had assembled at Amritsar on the Vaisakhi day of 1978. At the same time, the Nirankari-called sect held a procession and a conference at Amritsar, where speakers made venomous attacks on Sikhism, the Sikh Gurus, and Sikh scriptures. 

      A few Sikhs under the command of Bhai Fauja Singh marched from the Darbar Sahib to protest against this fake Nirankari procession in which Gurbachan Singh Nirankari had seated himself on a higher position than Sri Guru Granth Sahib. 
      
      Sri Guru Granth Sahib, the prevalent Guru of GurSikhs, is always respectfully seated at the highest platform in any congregation. Anyone seated on a platform higher than that of Sri Guru Granth Sahib is considered disrespectful and sacrilegious among the Guru Khalsa Panth.`,
    },
    {
      year: '1984',
      title: 'Operation Blue Star',
      image:"1984_Operation_Blue_Star.png",
      subtitle: 'The Assault on the Holiest Shrine',
      icon: <History className="text-[#ff9933]" size={24} />,
      content: `Operation Blue Star was a code name given by the Indian government to an attack launched on the Golden Temple, the holiest shrine of the Sikhs. The attack initiated on May 31st, 1984, was one of the most inflammatory actions ever taken by the Indian government and showed the real face of the regime. 

      This attack proved that the values highest held in society—freedom, explicitly mentioned in all constitutions including the Indian constitution as Freedom of Religion—was not of importance in India.`,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffaf0]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <p className="text-sm font-black uppercase tracking-[0.5em] text-[#ff9933] mb-4">Historical Records</p>
          <h1 className="font-playfair text-4xl font-bold text-[#002b7a] sm:text-5xl lg:text-6xl">Timeline Events</h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-[#ff9933]"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Timeline Icon / Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-[#ff9933]">
                {event.icon}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-[2px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#ff9933]/30">
                {/* Event Image */}
                {event.image && (
                  <div className="mb-6 -mx-6 -mt-6 overflow-hidden rounded-t-[2px]">
                    <img
                      src={`/${event.image}`}
                      alt={event.title}
                      className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <time className="font-playfair text-3xl font-bold text-[#ff9933]">{event.year}</time>
                  <div className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-[2px]">
                    Significant Event
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-[#002b7a] mb-1">{event.title}</h2>
                <p className="text-sm font-semibold text-[#ff9933] mb-4 uppercase tracking-wider">{event.subtitle}</p>
                
                <div className="space-y-4">
                  <div className="h-px w-full bg-slate-100" />
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {event.content}
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                  <Link 
                    href="/history/shaheeds" 
                    className="text-[10px] font-bold uppercase tracking-widest text-[#002b7a] hover:text-[#ff9933] transition-colors flex items-center gap-2"
                  >
                    Learn about the Shaheeds <ArrowLeft size={12} className="rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info Box */}
        <div className="mt-24 p-8 rounded-[2px] bg-[#002b7a] text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="h-16 w-16 bg-[#ff9933]/20 flex items-center justify-center rounded-full shrink-0">
            <Info className="text-[#ff9933]" size={32} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Continuity of Learning</h3>
            <p className="text-blue-100 text-sm leading-relaxed max-w-3xl">
              These events are taught at Damdami Taksal as reminders of the sacrifices made for our faith. We encourage students to delve deeper into the historical contexts and spiritual implications of these milestones.
            </p>
          </div>
          <Link 
            href="/history" 
            className="shrink-0 rounded-[2px] border border-[#ff9933] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#ff9933] hover:bg-[#ff9933] hover:text-white transition-all"
          >
            Back to History
          </Link>
        </div>
      </div>
    </main>
  );
}