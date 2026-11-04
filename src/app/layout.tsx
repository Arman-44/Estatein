import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from 'next/font/google'
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['500', '600', '700', '900']
})

export const metadata: Metadata = {
  title: 'Estatein',
  description: 'description',
  keywords: 'keywords'
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html 
      lang="en"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body className="flex flex-col w-full min-h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
