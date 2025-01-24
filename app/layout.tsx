import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teleforce360 - VA Performance Dashboard",
  description: "Monitor and manage your virtual assistants with our comprehensive performance tracking dashboard.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}

