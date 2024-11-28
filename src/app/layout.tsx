import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  metadataBase: new URL("https://test-pwa-cyan.vercel.app/"),

  title: {
    template: "%s | Daily Quest",
    default: "Daily Quest",
  },
  authors: {
    name: "chensokheng",
  },

  description: "a game to improve your habit",
  openGraph: {
    title: "Daily Quest",
    description: "a game to improve your habit",
    url: "https://test-pwa-cyan.vercel.app/",
    siteName: "Daily Quest",
    images: "/icon512_maskable.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon512_rounded.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
