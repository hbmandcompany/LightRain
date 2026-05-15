import Link from "next/link";

import { homepageCopy } from "@/lib/homepage-copy";

export function SectionPortalStrip() {
  const portals = homepageCopy.sectionPortals;

  return (
    <section
      aria-labelledby="section-portals-heading"
      className="border-y border-trame bg-ivory py-14 md:py-20 [border-top-width:0.5px] [border-bottom-width:0.5px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="max-w-[52ch]">
          <p
            id="section-portals-heading"
            className="font-mono text-[10px] font-normal uppercase tracking-[0.22em] text-sable"
          >
            Chapitres
          </p>
          <h2 className="mt-3 font-serif text-[1.35rem] font-normal leading-tight tracking-tight text-noir sm:text-[1.5rem] [font-variation-settings:'opsz'_144]">
            Parcours du protocole
          </h2>
          <p className="mt-3 text-[14px] font-normal leading-relaxed text-sable">
            Chaque salle ouvre une lecture longue — figures, spécifications, et
            discipline de la maison.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {portals.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-xl border border-trame bg-parchment/60 px-5 py-4 shadow-none ring-1 ring-noir/[0.04] transition-[border-color,box-shadow,background-color] duration-200 [border-width:0.5px] hover:border-bordeaux/35 hover:bg-parchment hover:shadow-[inset_0_0_0_1px_rgba(90,30,44,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
              >
                <span className="font-mono text-[10px] font-normal tabular-nums text-bordeaux">
                  {p.roman}
                </span>
                <span className="mt-2 font-serif text-[1.125rem] font-normal leading-snug tracking-tight text-noir [font-variation-settings:'opsz'_144]">
                  {p.title}
                </span>
                <span className="mt-1.5 text-[11px] font-normal uppercase tracking-eyebrow-wide text-sable">
                  {p.navShort}
                </span>
                <span className="mt-2 text-[13px] font-normal leading-[1.55] text-noir/75">
                  {p.tagline}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
