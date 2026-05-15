import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Numeral } from "@/components/primitives/Numeral";
import { Reveal } from "@/components/primitives/Reveal";
import { Rule } from "@/components/primitives/Rule";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { copy } from "@/lib/copy";

function RiskBar({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  return (
    <div className="flex h-8 w-10 items-center justify-end">
      <div
        className="h-6 w-[3px] bg-ink"
        style={{ opacity: 0.25 + value * 0.65 }}
        aria-hidden
      />
      <span className="sr-only">{pct} risk index</span>
    </div>
  );
}

function PhoneDevice() {
  const insetX = 14;
  const insetY = 18;
  const innerW = 320 - insetX * 2;
  const innerH = 660 - insetY * 2;

  return (
    <svg
      width="320"
      height="660"
      viewBox="0 0 320 660"
      className="mx-auto shrink-0 text-ink"
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="318"
        height="658"
        rx="44"
        ry="44"
        fill="#ffffff"
        stroke="#0a0a0a"
        strokeWidth={1.5}
      />
      <rect
        x={insetX}
        y={insetY}
        width={innerW}
        height={innerH}
        rx="36"
        ry="36"
        fill="#ffffff"
        stroke="rgba(10,10,10,0.12)"
        strokeWidth={0.5}
      />
      <rect
        x="132"
        y="26"
        width="56"
        height="6"
        rx="3"
        fill="#0a0a0a"
        opacity={0.35}
      />
      <foreignObject x={insetX} y={insetY} width={innerW} height={innerH}>
        <div className="flex h-full flex-col bg-paper px-5 pb-4 pt-10 font-sans text-ink">
          <div className="mb-6 flex items-center justify-between text-[11px] font-medium tracking-micro text-ink">
            <span>9:41</span>
            <svg width="22" height="10" viewBox="0 0 22 10" aria-hidden>
              <rect
                x="0.5"
                y="2.5"
                width="18"
                height="5"
                fill="none"
                stroke="#0a0a0a"
                strokeWidth={0.5}
              />
              <rect x="2" y="4" width="12" height="2" fill="#0a0a0a" />
              <path
                d="M20 3.5 v3"
                stroke="#0a0a0a"
                strokeWidth={0.5}
                fill="none"
              />
            </svg>
          </div>
          <h4 className="mb-8 font-serif text-[22px] font-normal tracking-tight text-ink">
            {copy.phoneMock.screenTitle}
          </h4>
          <div className="mb-8 grid grid-cols-3 gap-4">
            {copy.phoneMock.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="text-[10px] font-normal uppercase tracking-eyebrow text-mist">
                  {s.label}
                </span>
                <Numeral className="text-[14px] text-ink">{s.value}</Numeral>
              </div>
            ))}
          </div>
          <Rule className="mb-6" />
          <div className="flex flex-1 flex-col gap-5">
            {copy.phoneMock.positions.map((row) => (
              <div
                key={row.pair}
                className="flex items-center justify-between gap-3 border-b border-solid border-hair pb-4 [border-bottom-width:0.5px] last:border-b-0 last:pb-0"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-normal text-ink">
                    {row.pair}
                  </p>
                  <Numeral className="text-[12px] text-ink">{row.notion}</Numeral>
                </div>
                <RiskBar value={row.risk} />
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6">
            <Rule className="mb-4" />
            <div className="grid grid-cols-4 gap-2 text-center">
              {copy.phoneMock.tabs.map((tab) => (
                <div key={tab} className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-normal text-ink">{tab}</span>
                  {tab === copy.phoneMock.tabs[0] ? (
                    <span className="block h-2 w-2 bg-ink" aria-hidden />
                  ) : (
                    <span className="block h-2 w-2 bg-wire" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}

function AnnotationColumn({
  items,
  align,
}: {
  items: typeof copy.phoneMock.annotations;
  align: "left" | "right";
}) {
  const ordered =
    align === "left" ? items.slice(0, 2) : items.slice(2, 4);

  return (
    <div
      className={`flex flex-col gap-10 ${align === "right" ? "items-end text-right" : ""}`}
    >
      {ordered.map((a) => (
        <div
          key={a.eyebrow}
          className={`max-w-[220px] ${align === "right" ? "ml-auto" : ""}`}
        >
          <div
            className={`mb-3 flex items-center gap-3 ${align === "right" ? "flex-row-reverse" : ""}`}
          >
            <div className="h-px flex-1 bg-trame" />
          </div>
          <Eyebrow className="mb-2 !text-sable">{a.eyebrow}</Eyebrow>
          <p className="text-[13px] font-normal leading-[1.6] text-noir">
            {a.label}
          </p>
          <p className="mt-2 font-mono text-[11px] font-normal text-sable">
            {a.mono}
          </p>
        </div>
      ))}
    </div>
  );
}

export function PhoneMockSection() {
  return (
    <section
      id="application"
      aria-labelledby="phone-heading"
      className="min-h-screen bg-ivory py-24 text-noir md:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow className="mb-8 !text-sable">{copy.phoneMock.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading
            id="phone-heading"
            variant="lg"
            className="mb-10 !text-noir"
          >
            {copy.phoneMock.headline}
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-16 max-w-[62ch] text-[17px] font-normal leading-[1.6] tracking-normal text-noir">
            {copy.phoneMock.body}
          </p>
        </Reveal>

        <div className="grid grid-cols-12 items-start gap-8 lg:gap-6">
          <div className="col-span-12 hidden lg:col-span-3 lg:block">
            <AnnotationColumn items={copy.phoneMock.annotations} align="left" />
          </div>
          <div className="col-span-12 flex justify-center lg:col-span-6">
            <Reveal delay={0.06}>
              <PhoneDevice />
            </Reveal>
          </div>
          <div className="col-span-12 hidden lg:col-span-3 lg:block">
            <AnnotationColumn items={copy.phoneMock.annotations} align="right" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:hidden">
          <AnnotationColumn items={copy.phoneMock.annotations} align="left" />
        </div>
      </Container>
    </section>
  );
}
