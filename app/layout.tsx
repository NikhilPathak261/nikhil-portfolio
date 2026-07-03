import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { siteConfig, socialLinks } from "@/data/site";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Nikhil Pathak",
  },
  description: siteConfig.description,
  applicationName: "Nikhil Pathak Portfolio",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Nikhil Pathak",
    "Software Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "VakSetu",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon/favicon.svg",
    apple: [{ url: "/favicon/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: "Nikhil Pathak Portfolio",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Nikhil Pathak Software Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Software Developer",
    url: siteConfig.baseUrl,
    email: `mailto:${siteConfig.email}`,
    sameAs: socialLinks.map((link) => link.href),
  };

  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-lg bg-cyan-300 px-4 py-3 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
