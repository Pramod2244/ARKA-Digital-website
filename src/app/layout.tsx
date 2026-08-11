import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'ARKAA DIGITAL LLP | Enterprise Software, AI Applications & Cloud Systems',
  description: 'ARKAA DIGITAL LLP architects mission-critical Enterprise Software, Autonomous AI Applications, Hospital Management Systems (HIMS), College ERP, CRM Systems, Native Mobile Apps, and High-Availability Cloud Infrastructure.',
  keywords: [
    'Enterprise Software',
    'AI Applications',
    'Hospital Management System',
    'HIMS',
    'College ERP',
    'CRM Systems',
    'Mobile Apps',
    'High-end Websites',
    'Cloud Infrastructure',
    'Digital Transformation',
    'Automation',
    'Business Intelligence',
    'Data Analytics',
    'Custom Software',
    'ARKAA Digital LLP'
  ],
  authors: [{ name: 'ARKAA DIGITAL LLP Core Architecture' }],
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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-white text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
        <FirebaseClientProvider>
          <div className="flex flex-col min-h-screen relative">
            <main className="flex-1 relative min-w-0">
              <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                  {children}
                </div>
                <Footer />
              </div>
              <Toaster />
            </main>
          </div>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
