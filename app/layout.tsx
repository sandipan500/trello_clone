import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trello',
  description: 'Make your work organized from anywhere',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#F5F6F8]`}>
        {children}
      </body>
    </html>
  )
};