import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import siteCopy from "@/lib/site-copy.json";
import { Nav } from "@/components/Nav";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteCopy.meta.baseUrl),
  title: siteCopy.meta.siteName,
  description: siteCopy.meta.description,
  keywords: siteCopy.meta.keywords,
  icons: {
    icon: "/matiq-icon.png",
    shortcut: "/matiq-icon.png",
    apple: "/matiq-icon.png",
  },
  openGraph: {
    title: siteCopy.meta.siteName,
    description: siteCopy.meta.tagline,
    url: siteCopy.meta.baseUrl,
    siteName: siteCopy.meta.siteName,
    images: ["/light-mode-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteCopy.meta.siteName,
    description: siteCopy.meta.tagline,
    images: ["/light-mode-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-screen bg-white text-ink">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
