import "./globals.css";
import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";

const displayFace = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
});

const bodyFace = Rajdhani({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OG Web.site",
  description: "Hard-edged website design, build, hosting and support for businesses that want a stronger online presence.",
  applicationName: "OG Web.site and OG Labs Code Central",
  icons: {
    icon: "/assets/branding/logo.png",
    shortcut: "/assets/branding/logo.png",
    apple: "/assets/branding/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFace.variable} ${bodyFace.variable}`}>{children}</body>
    </html>
  );
}
