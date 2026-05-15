type ImmersiveChapterHeroProps = {
  kicker: string;
  title: string;
  lede: string;
};

export function ImmersiveChapterHero({
  kicker,
  title,
  lede,
}: ImmersiveChapterHeroProps) {
  return (
    <header className="border-b border-trame bg-bone [border-bottom-width:0.5px]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <p className="font-mono text-[10px] font-normal uppercase tracking-[0.28em] text-bordeaux">
          {kicker}
        </p>
        <h1 className="mt-5 max-w-[22ch] font-serif text-[clamp(1.75rem,4.2vw,3.25rem)] font-normal leading-[1.05] tracking-tight text-noir [font-variation-settings:'opsz'_144]">
          {title}
        </h1>
        <p className="mt-6 max-w-[52ch] text-[15px] font-normal leading-[1.65] text-sable md:text-[16px]">
          {lede}
        </p>
        <div
          className="mt-10 h-px w-14 bg-bordeaux/80"
          aria-hidden
        />
      </div>
    </header>
  );
}
