import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Snipr - AI-Powered Price Matching App',
  description: 'Save money with Snipr, the AI-powered app that finds price matches at nearby stores.',
  keywords: 'price matching, AI shopping, save money, comparison app',
  openGraph: {
    title: 'Snipr - AI-Powered Price Matching App',
    description: 'Save money with our AI technology that finds price matches at nearby stores.',
    images: [{ url: '/images/snipr-logo-black.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
