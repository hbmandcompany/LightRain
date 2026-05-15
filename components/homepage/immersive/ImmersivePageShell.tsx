import type { ReactNode } from "react";

import { HomepageFooter } from "@/components/homepage/Footer";
import { HomepageHeader } from "@/components/homepage/Header";

type ImmersivePageShellProps = {
  skipHref: string;
  children: ReactNode;
};

export function ImmersivePageShell({
  skipHref,
  children,
}: ImmersivePageShellProps) {
  return (
    <div className="homepage-root min-h-screen bg-ivory text-noir antialiased">
      <a
        href={skipHref}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-[100] focus:bg-ivory focus:px-4 focus:py-3 focus:text-[13px] focus:text-noir focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-bordeaux"
      >
        Skip to chapter
      </a>
      <HomepageHeader />
      <main className="pt-[72px]">{children}</main>
      <HomepageFooter />
    </div>
  );
}
