import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doctor Dashboard',
  description: 'A comprehensive dashboard for medical professionals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex">
          <Sidebar />
          <div className="flex-1 ml-16">
            <Header />
            <main className="p-6 ml-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}