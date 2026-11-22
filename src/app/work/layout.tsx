import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selion Lab",
  description:
    "Explore Silicon Emergence (72 levels, 6 chapters, and Infinite Sandbox on Desktop and Android), our simulated SERMM-16, SEVM, FLUX, and EmergenceOS-16 architectures, and Virtual Fab.",
  alternates: {
    canonical: "/work/",
  },
  openGraph: {
    title: "Selion Lab",
    description:
      "Silicon Emergence, SERMM-16, SEVM & FLUX, EmergenceOS-16, and Virtual Fab by Selion Lab.",
    url: "https://selionlab.com/work/",
    images: [
      {
        url: "/images/silicon-emergence-vlsi.jpg",
        width: 1280,
        height: 714,
        alt: "Silicon Emergence 3D FinFET transistors and Glass-Box IC",
      },
    ],
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
