import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'guess the sentence — uk criminal justice quiz',
  description:
    'A quiz on UK criminal sentencing. Read the crime, guess the punishment. Every case is sourced from the public record.',
  openGraph: {
    title: 'guess the sentence',
    description: 'Read the crime, guess the punishment. UK criminal sentencing quiz.',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col font-dm">
        {children}
      </body>
    </html>
  );
}
