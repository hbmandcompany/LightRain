import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";

import { copy } from "@/lib/copy";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fraunces",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lightra.in"),
  title: "LightRain · execution, credit, and observability on Base",
  description: copy.meta.description,
  openGraph: {
    title: "LightRain · execution, credit, and observability on Base",
    description: copy.meta.description,
    url: "https://www.lightra.in",
    siteName: "LightRain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LightRain · execution, credit, and observability on Base",
    description: copy.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen font-sans font-normal">{children}</body>
    </html>
  );
}
