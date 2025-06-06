import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { VercelToolbar } from '@vercel/toolbar/next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
      {process.env.NODE_ENV === 'development' && <VercelToolbar />}
    </html>
  );
}
