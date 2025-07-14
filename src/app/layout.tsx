import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ui";
import fonts from "@/fonts/fonts";

export const metadata: Metadata = {
  title: {
    default: "Aquí – Bold Local Craft Beers & Signature Cocktails",
    template: "%s | Aquí Pub & Bar",
  },
  description:
    "Discover bold craft beers, signature cocktails, and local favorites at Aquí. Taste the soul of the city poured with passion.",
  keywords: ["craft beer", "cocktails", "pub", "bar", "local drinks", "signature cocktails"],
  authors: [{ name: "Aquí Pub & Bar" }],
  creator: "Aquí Pub & Bar",
  publisher: "Aquí Pub & Bar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aqui-pub.com",
    title: "Aquí – Bold Local Craft Beers & Signature Cocktails",
    description:
      "Discover bold craft beers, signature cocktails, and local favorites at Aquí. Taste the soul of the city poured with passion.",
    siteName: "Aquí Pub & Bar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquí – Bold Local Craft Beers & Signature Cocktails",
    description:
      "Discover bold craft beers, signature cocktails, and local favorites at Aquí. Taste the soul of the city poured with passion.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7d393" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${fonts.inter.className} ${fonts.dancingScript.variable} ${fonts.cinzel.variable}`}
      suppressHydrationWarning>
      <body className="antialiased selection:bg-highlight/20 selection:text-dark overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
