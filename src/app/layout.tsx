import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef3f9" },
    { media: "(prefers-color-scheme: dark)", color: "#080c14" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://selionlab.com"),
  title: "Selion Lab",
  applicationName: "Selion Lab",
  description:
    "Selion Lab is an independent game studio building interactive worlds on real silicon physics, including Silicon Emergence, SERMM-16, SEVM, EmergenceOS-16, and Virtual Fab.",
  keywords: [
    "Selion Lab",
    "Silicon Emergence",
    "3D VLSI game",
    "transistor simulator",
    "silicon physics game",
    "hardware engineering game",
    "SERMM-16",
    "SEVM",
    "FLUX",
    "EmergenceOS-16",
    "EOS-16.serm",
    "Virtual Fab",
    "independent game studio",
  ],
  authors: [{ name: "Selion Lab", url: "https://selionlab.com" }],
  creator: "Selion Lab",
  publisher: "Selion Lab",
  category: "Games & Computer Architecture Simulation",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/brand/favicon-light.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/brand/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: "Selion Lab",
    description:
      "We turn real silicon physics into places you can play. Creators of Silicon Emergence, SERMM-16, SEVM, EmergenceOS-16, and Virtual Fab.",
    url: "https://selionlab.com",
    siteName: "Selion Lab",
    locale: "en_US",
    images: [
      {
        url: "/images/selion-lab-monolith.jpg",
        width: 1280,
        height: 714,
        alt: "Selion Lab anodized graphite monolith and monocrystalline silicon wafer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selion Lab",
    description:
      "We turn real silicon physics into places you can play. Creators of Silicon Emergence and Virtual Fab.",
    images: ["/images/selion-lab-monolith.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://selionlab.com/#organization",
      name: "Selion Lab",
      url: "https://selionlab.com",
      logo: "https://selionlab.com/brand/logo-dark.png",
      email: "contact@selionlab.com",
      description:
        "Independent game studio building interactive worlds on real silicon physics and simulated computer architectures.",
    },
    {
      "@type": "WebSite",
      "@id": "https://selionlab.com/#website",
      url: "https://selionlab.com",
      name: "Selion Lab",
      publisher: { "@id": "https://selionlab.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "VideoGame",
      "@id": "https://selionlab.com/work/#silicon-emergence",
      name: "Silicon Emergence",
      url: "https://selionlab.com/work/",
      image: "https://selionlab.com/images/silicon-emergence-vlsi.jpg",
      author: { "@id": "https://selionlab.com/#organization" },
      publisher: { "@id": "https://selionlab.com/#organization" },
      gamePlatform: ["Desktop", "Android"],
      genre: ["Simulation", "Puzzle", "Hardware Engineering"],
      description:
        "From a single transistor to a working computer, built with real silicon physics. A 3D VLSI hardware-engineering sandbox and 72-level campaign game.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-lighting="daylight"
      className={`${plusJakartaSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="ambient-canvas" aria-hidden="true">
          <div className="light-orb orb-1" />
          <div className="light-orb orb-2" />
          <div className="light-orb orb-3" />
        </div>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
