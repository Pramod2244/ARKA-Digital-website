import Link from 'next/link';
import { Button } from './ui/button';
import { Layers } from 'lucide-react';
import { MobileNav } from './mobile-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">ARKA Digital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground/80">About</Link>
          <Link href="/services" className="text-foreground/60 transition-colors hover:text-foreground/80">Services</Link>
          <Link href="/testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">Testimonials</Link>
          <Link href="/contact" className="text-foreground/60 transition-colors hover:text-foreground/80">Contact</Link>
        </nav>
        <div className='flex items-center gap-4'>
            <Button asChild className="hidden md:flex">
              <Link href="/contact">Get Started</Link>
            </Button>
            <MobileNav />
        </div>
      </div>
    </header>
  );
}
