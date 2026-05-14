import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal · LightRain",
  description:
    "Legal framework, jurisdiction, regulatory standing, and compliance architecture for LightRain and Hated By Many LLC.",
};

const SECTIONS = [
  {
    ordinal: "I.",
    id: "entity",
    title: "Entité juridique",
    subtitle: "Legal Entity & Corporate Structure",
  },
  {
    ordinal: "II.",
    id: "jurisdiction",
    title: "Compétence juridictionnelle",
    subtitle: "Jurisdiction & Applicable Law",
  },
  {
    ordinal: "III.",
    id: "eligibility",
    title: "Conditions d'accès",
    subtitle: "Eligibility & Who Qualifies",
  },
  {
    ordinal: "IV.",
    id: "regulation",
    title: "Cadre réglementaire",
    subtitle: "Regulatory Framework",
  },
  {
    ordinal: "V.",
    id: "risk",
    title: "Divulgation des risques",
    subtitle: "Risk Disclosures",
  },
  {
    ordinal: "VI.",
    id: "privacy",
    title: "Protection des données",
    subtitle: "Privacy & Data Protection",
  },
  {
    ordinal: "VII.",
    id: "ip",
    title: "Propriété intellectuelle",
    subtitle: "Intellectual Property",
  },
  {
    ordinal: "VIII.",
    id: "investor-relations",
    title: "Relations investisseurs",
    subtitle: "Investor Relations",
  },
  {
    ordinal: "IX.",
    id: "contact",
    title: "Correspondance juridique",
    subtitle: "Legal Correspondence",
  },
] as const;

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#f9f6ef] font-sans text-[#1a1710] antialiased">
      {/* Nav bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1a1710]/10 bg-[#f9f6ef]/95 backdrop-blur-sm [border-bottom-width:0.5px]">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-6 px-6 md:px-10">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-widest text-[#1a1710]/50 transition-colors hover:text-[#1a1710]"
          >
            ← LightRain
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#1a1710]/40">
            Dossier juridique · 2026
          </span>
        </div>
      </header>

      {/* Hero / title plate */}
      <div className="border-b border-[#1a1710]/10 pb-20 pt-32 [border-bottom-width:0.5px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          {/* Decorative rule above eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#1a1710]/10" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#1a1710]/35">
              Hated By Many LLC · Texas · United States
            </span>
            <div className="h-px flex-1 bg-[#1a1710]/10" />
          </div>

          <h1 className="font-serif text-[clamp(52px,8vw,120px)] font-normal leading-none tracking-tight text-[#1a1710] [font-variation-settings:'opsz'_144]">
            Dossier
            <br />
            <span className="text-[#5a1e2c]">juridique.</span>
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
            <p className="text-[15px] font-normal leading-[1.75] text-[#1a1710]/70">
              LightRain is operated by Hated By Many LLC, a Texas limited
              liability company. This document establishes the legal framework
              governing access to and use of the LightRain protocol, application,
              and associated infrastructure.
            </p>
            <p className="text-[15px] font-normal leading-[1.75] text-[#1a1710]/70">
              The protocol is not offered to the public. It is made available
              exclusively to verified institutional counterparties, accredited
              investors, and qualified purchasers who have completed onboarding
              under the terms set forth herein.
            </p>
          </div>

          {/* Section index */}
          <nav className="mt-16 border-t border-[#1a1710]/10 pt-10 [border-top-width:0.5px]" aria-label="Legal sections">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-[#1a1710]/35">
              Table des matières
            </p>
            <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-3 py-1 text-[13px] font-normal text-[#1a1710]/60 transition-colors hover:text-[#1a1710]"
                  >
                    <span className="font-mono text-[10px] text-[#5a1e2c] opacity-70 group-hover:opacity-100">
                      {s.ordinal}
                    </span>
                    <span>{s.subtitle}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Body — two-column layout like a law journal */}
      <main className="mx-auto max-w-[1280px] px-6 pb-32 md:px-10">

        {/* I. Entity */}
        <LegalSection id="entity" ordinal="I." frTitle="Entité juridique" enTitle="Legal Entity & Corporate Structure">
          <Clause number="1.1" title="Operating company">
            LightRain is a protocol and application suite operated exclusively by
            Hated By Many LLC ("the Company"), a limited liability company
            organized under the laws of the State of Texas, United States of
            America. The Company's principal place of business is in Texas. All
            contractual relationships arising from use of LightRain are with Hated
            By Many LLC.
          </Clause>
          <Clause number="1.2" title="Protocol vs. application distinction">
            The LightRain protocol refers to a set of immutable smart contracts
            deployed on the Base blockchain. The LightRain application refers to
            the iOS read-only observability interface distributed via the Apple App
            Store and TestFlight. The Company operates both but makes no
            representations that it controls the underlying blockchain
            infrastructure.
          </Clause>
          <Clause number="1.3" title="Tokenless architecture">
            As of the date of this document, LightRain has not issued any token,
            digital asset, or on-chain governance instrument to the public. No such
            instrument should be expected, and no document from the Company should
            be construed as a prospectus, offering memorandum, or solicitation.
          </Clause>
          <Clause number="1.4" title="Offshore components">
            Certain technical and administrative components of the LightRain stack
            are structured and operated through entities or arrangements domiciled
            outside the United States. The Company will disclose the relevant
            structure to institutional counterparties upon request and subject to a
            signed non-disclosure agreement.
          </Clause>
        </LegalSection>

        {/* II. Jurisdiction */}
        <LegalSection id="jurisdiction" ordinal="II." frTitle="Compétence juridictionnelle" enTitle="Jurisdiction & Applicable Law">
          <Clause number="2.1" title="Governing law">
            These terms and the relationship between you and the Company are
            governed by the laws of the State of Texas, without regard to conflict
            of law principles. Federal law of the United States applies where
            applicable and controlling.
          </Clause>
          <Clause number="2.2" title="Jurisdiction check — how we determine eligibility">
            Access to the LightRain protocol and application is geographically and
            legally restricted. At the time of onboarding, the Company performs an
            automated and manual jurisdiction determination that includes:
            <ol className="mt-4 list-none space-y-3 pl-0">
              {[
                "IP geolocation cross-referenced against a maintained blocklist of sanctioned and restricted territories;",
                "Counterparty self-certification of legal domicile, entity type, and regulatory classification;",
                "OFAC SDN list screening via an accredited third-party compliance vendor;",
                "KYC/KYB review by licensed compliance personnel, including document verification and beneficial ownership mapping;",
                "Ongoing transaction monitoring for patterns inconsistent with stated counterparty profile.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-[1.7] text-[#1a1710]/75">
                  <span className="mt-1 font-mono text-[10px] text-[#5a1e2c] shrink-0">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </Clause>
          <Clause number="2.3" title="Restricted territories">
            Access is not available to persons or entities located in, incorporated
            in, or otherwise subject to the jurisdiction of: Cuba, Iran, North
            Korea, Syria, the Crimea region, the so-called Donetsk People's
            Republic, the so-called Luhansk People's Republic, any other
            jurisdiction subject to comprehensive OFAC sanctions, and any
            jurisdiction where the provision of digital asset services is
            prohibited by applicable law. This list is non-exhaustive and is
            updated in accordance with published OFAC guidance.
          </Clause>
          <Clause number="2.4" title="Dispute resolution">
            Any dispute, controversy, or claim arising out of or relating to these
            terms shall be resolved by binding arbitration administered by the
            American Arbitration Association in Austin, Texas, under its Commercial
            Arbitration Rules. The arbitration shall be conducted by a single
            arbitrator. Judgment may be entered in any court of competent
            jurisdiction.
          </Clause>
        </LegalSection>

        {/* III. Eligibility */}
        <LegalSection id="eligibility" ordinal="III." frTitle="Conditions d'accès" enTitle="Eligibility & Who Qualifies">
          <Clause number="3.1" title="Qualified users">
            LightRain is available only to the following categories of persons and
            entities, each of which must be independently verified by the Company
            prior to access:
            <ul className="mt-4 list-none space-y-3 pl-0">
              {[
                { label: "Accredited investors", text: "as defined under Rule 501(a) of Regulation D promulgated under the U.S. Securities Act of 1933, as amended;" },
                { label: "Qualified purchasers", text: "as defined under Section 2(a)(51) of the U.S. Investment Company Act of 1940;" },
                { label: "Institutional counterparties", text: "including registered investment advisors, hedge funds, family offices, and corporate treasuries with verified AUM exceeding $10 million;" },
                { label: "Non-U.S. persons", text: "accessing the protocol pursuant to Regulation S under the Securities Act, subject to additional jurisdiction screening;" },
                { label: "DAO treasuries", text: "with verified multi-signature governance and formal resolution authorizing access, subject to enhanced due diligence." },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-[1.7] text-[#1a1710]/75">
                  <span className="mt-1 font-mono text-[10px] text-[#5a1e2c] shrink-0">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span>
                    <span className="font-medium text-[#1a1710]">{item.label} </span>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </Clause>
          <Clause number="3.2" title="Verification process">
            Eligibility verification is conducted through a multi-step onboarding
            process administered by the Company. Verification includes identity
            document review, entity document review, proof of investor status, and
            a compliance interview for counterparties seeking credit facilities
            exceeding $5 million. The Company reserves the right to deny or revoke
            access at its sole and absolute discretion.
          </Clause>
          <Clause number="3.3" title="Representations by users">
            By accessing LightRain, you represent and warrant that: (a) you meet
            the eligibility requirements set forth in §3.1; (b) you are not
            accessing from a restricted territory; (c) you are not on any
            government sanctions list; (d) your use of the protocol is lawful in
            your jurisdiction; and (e) you have the legal authority to bind the
            entity on whose behalf you are acting.
          </Clause>
        </LegalSection>

        {/* IV. Regulation */}
        <LegalSection id="regulation" ordinal="IV." frTitle="Cadre réglementaire" enTitle="Regulatory Framework">
          <Clause number="4.1" title="U.S. regulatory posture">
            Hated By Many LLC operates under U.S. law. Flash liquidity and credit
            abstraction services are structured to fall outside the definition of a
            securities offering or an exchange under applicable U.S. federal
            securities law. No representation is made that the protocol or its
            instruments constitute securities, and this document should not be
            construed as legal advice. Users are advised to consult independent
            legal counsel.
          </Clause>
          <Clause number="4.2" title="FinCEN / BSA compliance">
            To the extent required by the Bank Secrecy Act and FinCEN's regulations
            for money services businesses and virtual asset service providers, the
            Company maintains an AML/CFT program, conducts customer identification
            procedures, and files Suspicious Activity Reports as required.
          </Clause>
          <Clause number="4.3" title="EU / MiCA considerations">
            As of the date of this document, the Company does not hold a MiCA
            authorization and does not actively market its services in the European
            Economic Area. EEA-resident counterparties may access the protocol
            pursuant to a reverse solicitation exemption, provided they initiate
            contact independently and meet all eligibility requirements.
          </Clause>
          <Clause number="4.4" title="OFAC compliance">
            The Company maintains a sanctions compliance program consistent with
            OFAC guidance for digital asset businesses. Counterparties are screened
            against the SDN list at onboarding and on an ongoing basis. Matches
            result in immediate suspension of access and, where required by law,
            reporting to the relevant authority.
          </Clause>
          <Clause number="4.5" title="Travel Rule">
            For transactions that meet applicable thresholds, the Company complies
            with FinCEN's Travel Rule requirements for transmittal of funds and
            cooperates with Financial Action Task Force (FATF) Recommendation 16
            obligations where applicable.
          </Clause>
        </LegalSection>

        {/* V. Risk */}
        <LegalSection id="risk" ordinal="V." frTitle="Divulgation des risques" enTitle="Risk Disclosures">
          <p className="mb-6 text-[14px] leading-[1.7] text-[#1a1710]/70">
            The following risk disclosures are provided pursuant to applicable law
            and best practices for digital asset service providers. This list is not
            exhaustive. Users should consult independent professional advisors.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { label: "Smart contract risk", text: "Smart contracts may contain undiscovered vulnerabilities. Two independent security audits have been completed and results are publicly available, but no audit guarantees the absence of exploitable defects." },
              { label: "Liquidity risk", text: "Flash liquidity is sourced from third-party liquidity pools, principally Aave v3. Pool depth, utilization, and availability may fluctuate. Transactions that cannot be fulfilled atomically will revert." },
              { label: "Oracle risk", text: "Price and reputation data is sourced from Chainlink and Uniswap v3 TWAP feeds. Oracle manipulation, latency, or failure could result in incorrect liquidation or pricing outcomes." },
              { label: "Regulatory risk", text: "The regulatory environment for digital asset protocols is rapidly evolving. Changes in law or regulatory interpretation may materially restrict or prohibit access to the protocol in certain jurisdictions." },
              { label: "Counterparty risk", text: "Credit lines and collateralized positions carry counterparty risk. LightRain's credit vault does not guarantee repayment. Liquidation proceeds may be insufficient to cover outstanding positions in extreme market conditions." },
              { label: "Operational risk", text: "Protocol upgrades, sequencer downtime on Base, or infrastructure failures may temporarily render the protocol inaccessible. The Company maintains operational incident procedures but cannot guarantee uninterrupted service." },
            ].map((risk, i) => (
              <div key={i} className="border border-[#1a1710]/8 p-5 [border-width:0.5px]">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#5a1e2c]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[13px] font-medium text-[#1a1710]">{risk.label}</p>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#1a1710]/65">{risk.text}</p>
              </div>
            ))}
          </div>
        </LegalSection>

        {/* VI. Privacy */}
        <LegalSection id="privacy" ordinal="VI." frTitle="Protection des données" enTitle="Privacy & Data Protection">
          <Clause number="6.1" title="Data collected">
            The Company collects personal and entity data necessary to fulfill its
            compliance obligations and provide the services, including: legal name,
            country of domicile, entity formation documents, tax identification
            numbers, wallet addresses, transaction data, and communication records.
          </Clause>
          <Clause number="6.2" title="Data use">
            Data is used solely for compliance, onboarding, service delivery, and
            legal obligations. The Company does not sell, rent, or commercially
            exploit personal data. Data may be shared with: licensed KYC/AML
            vendors, legal counsel, regulatory authorities upon lawful request, and
            auditors under confidentiality agreements.
          </Clause>
          <Clause number="6.3" title="Retention">
            Compliance records are retained for a minimum of five years from the
            date of the relationship's termination, or longer where required by
            applicable law. Users may request a copy of their data by contacting
            legal@lightra.in.
          </Clause>
          <Clause number="6.4" title="CCPA / California rights">
            California residents have the right to know what personal information
            is collected, request deletion, and opt out of sale (which the Company
            does not engage in). Requests may be submitted to legal@lightra.in.
          </Clause>
        </LegalSection>

        {/* VII. IP */}
        <LegalSection id="ip" ordinal="VII." frTitle="Propriété intellectuelle" enTitle="Intellectual Property">
          <Clause number="7.1" title="Ownership">
            All intellectual property in the LightRain application, documentation,
            brand assets, strategy specifications, and proprietary algorithms is
            owned exclusively by Hated By Many LLC. Use of any such IP without
            express written permission is prohibited.
          </Clause>
          <Clause number="7.2" title="Open protocol">
            The smart contracts constituting the LightRain protocol are deployed
            on-chain and are therefore publicly inspectable. No license to use,
            fork, or deploy modified versions of the contracts is granted except
            under a separately executed agreement.
          </Clause>
          <Clause number="7.3" title="Trademarks">
            "LightRain" and associated marks are registered trademarks of Hated By
            Many LLC. "PostCarrier" is a registered trademark of Hated By Many LLC.
            Unauthorized use of these marks is prohibited.
          </Clause>
        </LegalSection>

        {/* VIII. Investor Relations */}
        <LegalSection id="investor-relations" ordinal="VIII." frTitle="Relations investisseurs" enTitle="Investor Relations">
          <Clause number="8.1" title="No public offering">
            LightRain has not conducted and does not currently intend to conduct a
            public offering of any securities or digital asset. Nothing on this
            website or in any Company document constitutes an offer to sell or
            solicitation to buy any security.
          </Clause>
          <Clause number="8.2" title="Reporting cadence">
            The Company publishes quarterly reconciliation reports and an annual
            operational review to verified institutional counterparties. These
            documents are provided under NDA and are not publicly distributed.
            Requests should be directed to investors@lightra.in.
          </Clause>
          <Clause number="8.3" title="Correspondence">
            Investor inquiries, analyst requests, and media inquiries relating to
            financial matters should be directed to investors@lightra.in. The
            Company responds to institutional correspondence within five business
            days.
          </Clause>
        </LegalSection>

        {/* IX. Contact */}
        <LegalSection id="contact" ordinal="IX." frTitle="Correspondance juridique" enTitle="Legal Correspondence">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { role: "General legal", email: "legal@lightra.in" },
              { role: "Compliance & regulatory", email: "compliance@lightra.in" },
              { role: "Privacy & data", email: "legal@lightra.in" },
              { role: "Security disclosures", email: "security@lightra.in" },
              { role: "Investor relations", email: "investors@lightra.in" },
              { role: "Press & media", email: "press@lightra.in" },
            ].map((c) => (
              <div key={c.role} className="border-l-2 border-[#5a1e2c]/30 py-1 pl-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#1a1710]/40">
                  {c.role}
                </p>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-1 block text-[13px] font-normal text-[#5a1e2c] underline-offset-2 hover:underline"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-[#1a1710]/8 pt-8 [border-top-width:0.5px]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#1a1710]/35">
              Registered address
            </p>
            <p className="mt-2 text-[14px] leading-[1.7] text-[#1a1710]/60">
              Hated By Many LLC
              <br />
              Texas, United States of America
            </p>
          </div>
        </LegalSection>

        {/* Closing stamp */}
        <div className="mt-20 border-t border-[#1a1710]/10 pt-12 [border-top-width:0.5px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <blockquote className="max-w-[52ch] font-serif text-[1.25rem] font-normal leading-[1.4] tracking-tight text-[#1a1710]/50 [font-variation-settings:'opsz'_144]">
              « Tout est public. Tout est daté. Tout est signé. »
            </blockquote>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#1a1710]/30">
              Version 2026.05 · Hated By Many LLC · Texas
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ─── Sub-components ──────────────────────────────────────────── */

function LegalSection({
  id,
  ordinal,
  frTitle,
  enTitle,
  children,
}: {
  id: string;
  ordinal: string;
  frTitle: string;
  enTitle: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-[#1a1710]/8 py-16 [border-bottom-width:0.5px] md:py-20"
    >
      {/* Section heading */}
      <div className="mb-10 grid grid-cols-1 gap-2 md:grid-cols-[12rem_1fr] md:gap-8">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] text-[#5a1e2c]">{ordinal}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#1a1710]/35">
            {frTitle}
          </span>
        </div>
        <h2 className="font-serif text-[clamp(22px,3vw,36px)] font-normal leading-[1.1] tracking-tight text-[#1a1710] [font-variation-settings:'opsz'_144]">
          {enTitle}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-[12rem_1fr] md:gap-8">
        <div />
        <div className="space-y-0">{children}</div>
      </div>
    </section>
  );
}

function Clause({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[#1a1710]/8 py-6 [border-top-width:0.5px] first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3">
        <span className="shrink-0 font-mono text-[10px] text-[#5a1e2c]/60">§{number}</span>
        <p className="text-[11px] font-medium uppercase tracking-widest text-[#1a1710]/40">
          {title}
        </p>
      </div>
      <div className="mt-3 text-[14px] leading-[1.75] text-[#1a1710]/72">{children}</div>
    </div>
  );
}
