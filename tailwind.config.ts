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
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.14em",
        tight: "-0.025em",
        micro: "0.08em",
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
      },
      ringColor: {
        DEFAULT: "#0a0a0a",
      },
    },
  },
  plugins: [],
};

export default config;
