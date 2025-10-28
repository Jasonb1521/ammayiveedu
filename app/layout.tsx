import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  display: "swap",
  variable: "--font-tamil",
});

export const metadata: Metadata = {
  title: "Ammayi Veedu Pot Cook - Traditional South Indian Restaurant",
  description: "Experience authentic South Indian cuisine cooked in traditional clay pots. Taste the love of Ammayi's kitchen with our signature biryanis and kolambus.",
  keywords: ["South Indian restaurant", "clay pot cooking", "biryani", "traditional food", "Coimbatore restaurant"],
  authors: [{ name: "Ammayi Veedu" }],
  openGraph: {
    title: "Ammayi Veedu Pot Cook",
    description: "Traditional South Indian Restaurant",
    type: "website",
    locale: "en_IN",
    siteName: "Ammayi Veedu",
    images: ['/icon.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammayi Veedu Pot Cook",
    description: "Traditional South Indian Restaurant",
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${dancing.variable} ${notoSansTamil.variable} font-sans antialiased bg-white text-dark`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}