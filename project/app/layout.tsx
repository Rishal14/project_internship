import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gulf Technical Operations LLC - Oilfield Solutions & Services',
  description: 'Leading supplier of equipment and services to the oil and gas industry worldwide. Over 40 years of experience in the Middle East, North Africa, and Southeast Asia.',
  keywords: 'oil and gas, oilfield equipment, drilling services, Gulf Technical Operations, GTO',
  openGraph: {
    title: 'Gulf Technical Operations LLC',
    description: 'One stop shopping - where oilfield solutions / services is our goal',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}