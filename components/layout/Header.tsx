import Link from "next/link";

import { Container } from "@/components/primitives/Container";
import { copy, gateway } from "@/lib/copy";

function WordMarkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden
      className="shrink-0 text-ink"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <rect x="4.5" y="4.5" width="7" height="7" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-9 z-50 h-16 border-b border-solid border-hair bg-paper [border-bottom-width:0.5px]">
      <Container className="flex h-full items-center justify-between gap-6">
        <Link
          href="/download#overview"
          className="flex min-w-0 shrink-0 items-center gap-3 text-ink transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <WordMarkIcon />
          <span className="flex min-w-0 items-baseline gap-1.5 text-[15px] font-medium tracking-tight">
            <span className="shrink-0">{copy.header.wordmark}</span>
            <span className="shrink-0 text-mist" aria-hidden>
              ·
            </span>
            <span className="min-w-0 truncate font-normal text-mist">
              {gateway.headerSuffix}
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="min-w-0 flex-1">
          <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 py-1 md:gap-x-8">
            {copy.header.nav.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="text-[13px] font-normal text-mist transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="shrink-0">
              <Link
                href="/download#access"
                className="rounded-full border border-solid border-ink px-4 py-2 text-[13px] font-normal text-ink transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink [border-width:0.5px]"
              >
                {copy.header.requestAccess}
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
