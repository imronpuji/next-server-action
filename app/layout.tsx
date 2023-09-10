import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ToastProvider from '@/components/Common/ToastContainer';
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Take Home Test',
  description: 'This is Take Home Test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
