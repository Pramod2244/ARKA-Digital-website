import Link from 'next/link';
import { Mail, MapPin, Phone, Sun } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Sun className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Arkaa Digital</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              We Build Future-Ready Digital Experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground">Quick Links</p>
              <nav className="mt-4 flex flex-col space-y-2">
                <a href="#home" className="text-muted-foreground hover:text-primary">Home</a>
                <a href="#services" className="text-muted-foreground hover:text-primary">Services</a>
                <a href="#why-choose-us" className="text-muted-foreground hover:text-primary">Why Us</a>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</a>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground">Services</p>
              <nav className="mt-4 flex flex-col space-y-2">
                <a href="#services" className="text-muted-foreground hover:text-primary">Software Development</a>
                <a href="#services" className="text-muted-foreground hover:text-primary">Cloud & DevOps</a>
                <a href="#services" className="text-muted-foreground hover:text-primary">AI & Automation</a>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline text-foreground">Contact Us</p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@arkaadigital.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-XXXXXXXXXX</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Arkaa Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
