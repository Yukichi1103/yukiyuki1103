import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Diamond Sales AI - AI営業アシスタント',
  description: '企業情報と営業相手の情報を入力すると、営業に必要な文章を自動生成できるAIアシスタント',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}
