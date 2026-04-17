import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { BaniReader } from "../../components/BaniReader";

const maryadaItems = [
  {
    title: "Daily Santhiya Practice",
    content:
      "A daily path of Gurbani recitation, correct pronunciation, and reverence for the Guru’s Shabad is central to the Taksal tradition.",
  },
  {
    title: "Code of Conduct",
    content:
      "Respect the Sangat, uphold Maryada, and practice humility while learning within the community and during Katha sessions.",
  },
  {
    title: "Preserving the Shastar",
    content:
      "Maintain the dignity of the Shastar symbolic used in Akhand Paath and Amrit Sanchaar with disciplined care and prayer.",
  },
];

export default function GurbaniPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
      <section className="mb-12 grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#002366]">Gurbani & Santhiya</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#002366] sm:text-5xl">
            The living Shabad, the discipline of Santhiya, and the sacred Maryada.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-700">
            Damdami Taksal Canada supports devotional study with a calm reading experience, accessible learning, and a grounded path for the Sikh youth.
          </p>
          <p className="max-w-2xl text-base leading-8 text-slate-700">
            Discover the right path for recitation, the value of Maryada in everyday life, and the timeless conduct that strengthens the Canadian Sangat.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
          <img
            src="https://images.unsplash.com/photo-1515165562835-c758a4a7b1d8?auto=format&fit=crop&w=1200&q=80"
            alt="Gurmat study with Sikh students"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <BaniReader />
        <section className="space-y-6 rounded-[2px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-[#002366]">Maryada for the Sangat</h2>
          <p className="leading-7 text-slate-700">
            Respectful behaviour and correct pronunciation are both expressions of devotion in the path of the Sikh Panth.
          </p>

          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
            {maryadaItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </main>
  );
}
