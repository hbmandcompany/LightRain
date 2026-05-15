import Link from "next/link";

type ApplyOfferCopy = {
  readonly emailSection: {
    readonly title: string;
    readonly bulletEm: string;
    readonly bulletRest: string;
    readonly primaryCta?: { readonly label: string; readonly href: string };
    readonly body: string;
  };
  readonly smsSection: {
    readonly title: string;
    readonly bulletEm: string;
    readonly bulletRest: string;
    readonly submitLabel: string;
    readonly consent: string;
  };
};

export function ApplyOfferColumn({ copy }: { copy: ApplyOfferCopy }) {
  const email = copy.emailSection;
  const sms = copy.smsSection;
  const cta = email.primaryCta ?? {
    label: "Application",
    href: "/#access",
  };

  return (
    <article className="w-full max-w-[min(100%,22rem)] overflow-hidden rounded-2xl border border-trame bg-bone [border-width:0.5px] shadow-none ring-1 ring-noir/[0.06] sm:max-w-[23rem]">
      <div className="relative bg-bone px-3.5 pb-6 pt-4 sm:px-4 sm:pb-7 sm:pt-5">
        <h3 className="font-serif text-[1.15rem] font-normal leading-[1.15] tracking-tight text-noir sm:text-[1.25rem] [font-variation-settings:'opsz'_144]">
          {email.title}
        </h3>

        <p className="mt-3 flex max-w-[38ch] gap-2 text-[14px] font-normal leading-[1.6] text-noir sm:mt-3.5">
          <span
            className="mt-1.5 inline-block size-[3px] shrink-0 rounded-full bg-bordeaux"
            aria-hidden
          />
          <span>
            <span className="font-medium">{email.bulletEm}</span>
            {email.bulletRest}
          </span>
        </p>

        <Link
          href={cta.href}
          className="mt-4 inline-flex h-8 w-full items-center justify-center rounded-full border border-solid border-noir border-[0.5px] bg-noir px-5 font-sans text-[12px] font-normal text-parchment transition-shadow hover:shadow-[inset_0_0_0_1px_#0E0E0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux sm:mt-5 sm:w-auto"
        >
          {cta.label}
        </Link>

        <p className="mt-4 max-w-[38ch] text-[14px] font-normal leading-[1.6] text-noir sm:mt-5">
          {email.body}
        </p>

        <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[9px] text-sable select-none sm:bottom-4 sm:right-4">
          firstclassmail.cc
        </span>
      </div>

      <div className="relative border-t border-trame bg-parchment px-3.5 pb-6 pt-4 [border-top-width:0.5px] sm:px-4 sm:pb-7 sm:pt-5">
        <h3 className="font-serif text-[1.15rem] font-normal leading-[1.15] tracking-tight text-noir sm:text-[1.25rem] [font-variation-settings:'opsz'_144]">
          {sms.title}
        </h3>

        <p className="mt-3 flex max-w-[38ch] gap-2 text-[14px] font-normal leading-[1.6] text-noir sm:mt-3.5">
          <span
            className="mt-1.5 inline-block size-[3px] shrink-0 rounded-full bg-bordeaux"
            aria-hidden
          />
          <span className="min-w-0 whitespace-pre-line">
            <span className="font-medium">{sms.bulletEm}</span>
            {sms.bulletRest ? (
              <>
                {"\n"}
                {sms.bulletRest}
              </>
            ) : null}
          </span>
        </p>

        <form className="mt-4 sm:mt-5" action="#" method="post">
          <button
            type="submit"
            className="inline-flex h-8 w-full items-center justify-center rounded-full border border-solid border-noir border-[0.5px] bg-transparent px-5 font-sans text-[12px] font-normal text-noir transition-shadow hover:shadow-[inset_0_0_0_1px_#0E0E0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux sm:w-auto"
          >
            {sms.submitLabel}
          </button>
        </form>

        <p className="mt-4 max-w-[38ch] text-[12px] font-normal leading-[1.6] text-noir/75 sm:mt-5">
          {sms.consent}
        </p>

        <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[9px] text-sable select-none sm:bottom-4 sm:right-4">
          blackletter.cc
        </span>
      </div>
    </article>
  );
}
