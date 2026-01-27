import Link from 'next/link';
import { Mail, MapPin, Phone, Layers } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Layers className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Arkaa Digita</span>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80">
              Empowering Businesses with Smart Digital Solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-sm">
              <p className="font-bold font-headline">Quick Links</p>
              <nav className="mt-4 flex flex-col space-y-2">
                <a href="#about" className="hover:text-primary">About Us</a>
                <a href="#services" className="hover:text-primary">Services</a>
                <a href="#contact" className="hover:text-primary">Contact</a>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline">Services</p>
              <nav className="mt-4 flex flex-col space-y-2">
                <a href="#services" className="hover:text-primary">Software Development</a>
                <a href="#services" className="hover:text-primary">Cloud & DevOps</a>
                <a href="#services" className="hover:text-primary">AI & Automation</a>
              </nav>
            </div>
            <div className="text-sm">
              <p className="font-bold font-headline">Contact Us</p>
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@arkaadigita.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-XXXXXXXXXX</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/20 pt-4 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Arkaa Digita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
