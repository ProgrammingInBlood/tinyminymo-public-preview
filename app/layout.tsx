import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Link from "next/link";
import Providers from "./providers";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TinyMinyMo - Your Digital Pet Companion",
  description: "Meet TinyMinyMo, your adorable digital pet that brings joy and companionship to your digital life.",
  icons: {
    icon: "/favicon.ico",
  },
};

const footerLinks = {
  "Customer Service": [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "FAQs", href: "/faqs" },
  ],
  "About": [
    { name: "Our Story", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  "Legal": [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Providers>
          <Navigation />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <footer className="mt-auto bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="text-sm font-bold text-gray-900 mb-4">{category}</h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link 
                            href={link.href}
                            className="text-sm text-gray-600 hover:text-[#FF6B6B] transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} TinyMinyMo. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
