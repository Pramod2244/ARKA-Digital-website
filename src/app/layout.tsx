import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MotionProvider } from '@/components/motion-provider';
import { ScrollProgress } from '@/components/scroll-progress';

export const metadata: Metadata = {
  title: 'Arkaa Digital - Future-Ready Digital Experiences',
  description: 'Arkaa Digital is a premium digital agency specializing in web apps, UI/UX, branding, and automation. We build future-ready digital experiences.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </MotionProvider>
      </body>
    </html>
  );
}
