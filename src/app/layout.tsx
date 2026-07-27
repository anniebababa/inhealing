import type { Metadata } from 'next';
import { Noto_Serif_TC, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const notoSerifTC = Noto_Serif_TC({
  variable: '--font-noto-serif-tc',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'InHealing 植覺療癒 | 香氛療癒・專業培訓・創業陪跑',
  description: '從自我療癒到專業斜槓，讓香氛與療癒成為你人生的新起點。提供希塔療癒、調香師認證、芳療師培訓課程。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${notoSerifTC.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
