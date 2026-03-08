import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';
import { MotionProvider } from '@/components/motion-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { FirebaseClientProvider } from '@/firebase';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

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
      <body className="font-body antialiased bg-[#F7F8FA] selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
        <FirebaseClientProvider>
          <div className="flex min-h-screen">
            {/* Minimal Fixed Sidebar */}
            <AppSidebar />
            
            {/* Main Content Area Offset by Sidebar Width */}
            <main className="flex-1 ml-[70px] relative min-w-0">
              <MotionProvider>
                <ScrollProgress />
                <div className="flex flex-col min-h-screen">
                  <div className="flex-grow">
                    {children}
                  </div>
                  <Footer />
                </div>
                <Toaster />
              </MotionProvider>
            </main>
          </div>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
