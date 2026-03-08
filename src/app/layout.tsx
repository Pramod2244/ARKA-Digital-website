import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MotionProvider } from '@/components/motion-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'Arkaa Digital | High-Performance Web & AI Engineering',
  description: 'Arkaa Digital is a premium digital agency specializing in scalable web apps, AI automation, and future-ready UI/UX. Powering innovation with the Arkaa digital core.',
  keywords: ['Web Development', 'AI Automation', 'UI/UX Design', 'Cloud Solutions', 'Digital Agency', 'Full Stack Development', 'Arkaa Digital'],
  authors: [{ name: 'Arkaa Digital' }],
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
        <FirebaseClientProvider>
          <MotionProvider>
            <ScrollProgress />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </MotionProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
