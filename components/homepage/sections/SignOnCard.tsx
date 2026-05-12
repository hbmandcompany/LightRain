"use client";

import Link from "next/link";
import { useId, useState } from "react";

type FooterLink = { readonly label: string; readonly href: string };

type SignOnCardProps = {
  greeting: string;
  subtitle: string;
  usernameLabel: string;
  passwordLabel: string;
  saveUsername: string;
  signOn: string;
  enroll: string;
  showPassword: string;
  readonly footer: readonly FooterLink[];
};

export function SignOnCard({
  greeting,
  subtitle,
  usernameLabel,
  passwordLabel,
  saveUsername,
  signOn,
  enroll,
  showPassword,
  footer,
}: SignOnCardProps) {
  const [show, setShow] = useState(false);
  const id = useId();
  const userId = `${id}-user`;
  const passId = `${id}-pass`;
  const saveId = `${id}-save`;

  return (
    <div className="w-[280px] max-w-full overflow-hidden rounded-2xl border border-trame bg-paper [border-width:0.5px] shadow-none ring-1 ring-noir/[0.06]">
      <div className="flex flex-col gap-4 px-5 pb-5 pt-5">
        <div>
          <p className="font-serif text-[1.375rem] font-normal leading-[1.1] tracking-tight text-noir [font-variation-settings:'opsz'_144]">
            {greeting}
          </p>
          <p className="mt-2 text-[13px] font-normal leading-snug text-sable">
            {subtitle}
          </p>
        </div>

        <div>
          <label htmlFor={userId} className="sr-only">
            {usernameLabel}
          </label>
          <input
            id={userId}
            name="user"
            type="text"
            autoComplete="username"
            placeholder={usernameLabel}
            className="w-full border-0 border-b border-trame bg-transparent py-2 text-[15px] font-normal leading-normal text-noir outline-none placeholder:text-sable [border-bottom-width:0.5px] focus:border-noir"
          />
        </div>

        <div className="relative">
          <label htmlFor={passId} className="sr-only">
            {passwordLabel}
          </label>
          <input
            id={passId}
            name="pass"
            type={show ? "text" : "password"}
            autoComplete="current-password"
            placeholder={passwordLabel}
            className="w-full border-0 border-b border-trame bg-transparent py-2 pr-12 text-[15px] font-normal text-noir outline-none placeholder:text-sable [border-bottom-width:0.5px] focus:border-noir"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] font-normal text-bordeaux underline-offset-2 hover:underline"
          >
            {showPassword}
          </button>
        </div>

        <label className="flex cursor-pointer items-center gap-2.5 text-[13px] font-normal text-noir">
          <input
            id={saveId}
            name="save"
            type="checkbox"
            className="size-3.5 shrink-0 rounded-sm border-trame text-bordeaux focus:ring-bordeaux [border-width:0.5px]"
          />
          {saveUsername}
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/login"
            className="inline-flex h-9 items-center justify-center rounded-full border border-solid border-noir border-[0.5px] bg-noir px-7 font-sans text-[13px] font-normal text-parchment transition-shadow hover:shadow-[inset_0_0_0_1px_#0E0E0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
          >
            {signOn}
          </Link>
          <Link
            href="/login"
            className="font-sans text-[13px] font-normal text-bordeaux underline-offset-2 hover:underline"
          >
            {enroll}
          </Link>
        </div>
      </div>

      <div className="border-t border-trame bg-parchment px-5 py-3 [border-top-width:0.5px]">
        <ul className="flex flex-col gap-2">
          {footer.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-[12px] font-normal leading-snug text-noir underline-offset-2 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
