import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#ffffff",
        bone: "#f7f6f2",
        mist: "rgba(10,10,10,0.55)",
        hair: "rgba(10,10,10,0.12)",
        wire: "rgba(10,10,10,0.08)",
        noir: "#0E0E0C",
        parchment: "#F4EFE6",
        ivory: "#FBF8F2",
        bordeaux: "#5A1E2C",
        sable: "rgba(14,14,12,0.55)",
        trame: "rgba(14,14,12,0.12)",
        "sable-parchment": "rgba(244,239,230,0.55)",
        "parchment-hair": "rgba(244,239,230,0.18)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.14em",
        "eyebrow-wide": "0.18em",
        tight: "-0.025em",
        micro: "0.08em",
        wordmark: "-0.01em",
      },
      fontSize: {
        "display-xl": [
          "clamp(48px,7vw,92px)",
          { lineHeight: "0.95", letterSpacing: "-0.025em" },
        ],
        "display-lg": [
          "clamp(36px,5vw,64px)",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(28px,3.5vw,44px)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        ouverture: [
          "clamp(56px, 8vw, 124px)",
          { lineHeight: "0.96", letterSpacing: "-0.025em" },
        ],
        section: [
          "72px",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        thesis: [
          "84px",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        dossier: [
          "60px",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
      },
      ringColor: {
        DEFAULT: "#0a0a0a",
        bordeaux: "#5A1E2C",
      },
    },
  },
  plugins: [
    function addPlexMonoFeature({
      addUtilities,
    }: {
      addUtilities: (u: Record<string, Record<string, string>>) => void;
    }) {
      addUtilities({
        ".font-plex-ss01": {
          fontFeatureSettings: '"ss01" 1',
        },
      });
    },
  ],
};

export default config;
