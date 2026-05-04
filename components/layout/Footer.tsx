import Link from "next/link";

import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Rule } from "@/components/primitives/Rule";
import { copy } from "@/lib/copy";

const buildVersion =
  process.env.npm_package_version !== undefined
    ? process.env.npm_package_version
    : "0.1.0";

export function Footer() {
  return (
    <footer id="company" className="bg-paper py-24">
      <Container>
        <div className="flex flex-col gap-0">
          <Rule />
          <div className="py-16">
            <p className="font-serif text-display-xl font-normal tracking-tight text-ink">
              {copy.footer.wordmark}
            </p>
          </div>
          <Rule />
          <div className="grid grid-cols-12 gap-8 py-16">
            {copy.footer.columns.map((col) => (
              <div key={col.title} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <Eyebrow className="mb-4">{col.title}</Eyebrow>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] font-normal text-ink transition-colors duration-200 hover:text-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Rule />
          <div className="flex flex-col justify-between gap-4 pt-10 md:flex-row md:items-center">
            <p className="max-w-[62ch] text-[11px] font-normal leading-relaxed text-mist">
              {copy.footer.copyright}
            </p>
            <p className="text-[11px] font-normal text-mist">
              {copy.footer.buildLabel} {buildVersion}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
