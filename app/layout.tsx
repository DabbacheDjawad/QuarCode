import type { Metadata } from "next";
import { hankenGrotesk, inter, geist } from "../fonts";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Quarcode | Engineering Digital Excellence",
  description:
    "High-performance engineering for modern enterprises — from pixel-perfect frontends to resilient cloud architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${hankenGrotesk.variable} ${inter.variable} ${geist.variable}`}
    >
      <head>
        {/* Material Symbols — icon font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-background font-body-md overflow-x-hidden antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}