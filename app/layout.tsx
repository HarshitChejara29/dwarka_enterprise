import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dwarka Enterprise",
  description: "Smart. Sustainable. Reliable.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919376639399"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <FaWhatsapp className="text-4xl" />
        </a>
      </body>
    </html>
  );
}
