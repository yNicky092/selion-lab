import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selion Lab",
  description:
    "Get in touch with Selion Lab at contact@selionlab.com for Silicon Emergence, Virtual Fab, simulated architectures, or press inquiries.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Selion Lab",
    description:
      "Contact Selion Lab directly at contact@selionlab.com.",
    url: "https://selionlab.com/contact/",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
