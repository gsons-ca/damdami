import Link from "next/link";

export type HistorySectionItem = {
  title: string;
  subtitle?: string;
  description: string;
  href?: string;
};

export type HistorySectionTemplateProps = {
  header: string;
  intro: string;
  items: HistorySectionItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function HistorySectionTemplate({
  header,
  intro,
  items,
  ctaLabel,
  ctaHref,
}: HistorySectionTemplateProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#002366]">{header}</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {header}
          </h2>
          <p className="text-lg leading-8 text-slate-700">{intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-[#002366]/20 hover:bg-white"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                  {item.subtitle ? (
                    <span className="rounded-full bg-[#002366]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#002366]">
                      {item.subtitle}
                    </span>
                  ) : null}
                </div>
                <p className="leading-7 text-slate-700">{item.description}</p>
              </div>

              {item.href ? (
                <div className="mt-8">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#002366] transition hover:text-[#001f55]"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <div className="mt-12 flex justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-[2px] bg-[#002366] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#001f55]"
            >
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
