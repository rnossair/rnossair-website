import { Bricolage_Grotesque, Martian_Mono, Instrument_Sans } from "next/font/google";
import MotionProvider from "@/components/motion/MotionProvider";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = Martian_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rayane Nossair",
  description:
    "Full-stack builder moving into agentic AI systems. Projects, experience, and contact.",
  metadataBase: new URL("https://rnossair.dev"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${body.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
