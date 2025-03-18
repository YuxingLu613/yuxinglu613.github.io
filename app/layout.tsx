import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yuxing Lu",
  description: "Personal website of Yuxing Lu, PhD Student at Peking University",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <base href="/" />
      </head>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'