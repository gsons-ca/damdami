import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ScrollToTop } from "../components/ScrollToTop";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Damdami Taksal Canada | Sikh Santhiya & Gurmat Vidya",
  description: "Damdami Taksal Canada preserves the Sikh tradition of Santhiya, Maryada, and Gurmat teaching in Canada.",
  metadataBase: new URL("https://damdamitaksal.ca"),
  keywords: ["Damdami Taksal Canada", "Sikh Santhiya Canada", "Gurmat Vidya", "Mahapurakh", "Gurbani"],
  icons: {
    icon: "/favi_icon.png",
  },
  openGraph: {
    title: "Damdami Taksal Canada",
    description: "A cultural and religious preservation website for Sikh Santhiya, Gurmat Vidya, and Mahapurakh guidance.",
    url: "https://damdamitaksal.ca",
    siteName: "Damdami Taksal Canada",
    images: ["/og-image.png"],
    type: "website",
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
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#fffaf0] text-[#202125] overflow-x-hidden" suppressHydrationWarning>
        <Navbar />
        <Breadcrumbs />
        <main className="flex-1">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
