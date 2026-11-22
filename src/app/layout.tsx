import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://selionlab.com"),
  title: {
    default: "Selion Lab | Independent Game Studio & Silicon Physics Craft",
    template: "%s | Selion Lab",
  },
  description:
    "Welcome to Selion Lab. We build interactive worlds where real silicon physics, transistors, and simulated computer architectures are the medium you play with.",
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
    description: "We turn real silicon physics into places you can play.",
    images: ["/images/selion-lab-monolith.jpg"],
  },
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
