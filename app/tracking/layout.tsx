import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { Sidebar } from "@/components/sidebar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chocolate Tracker",
  description: "Track chocolate from bean to bar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-chocolate-100">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}

