import Link from 'next/link';
import { Button } from './ui/button';
import { Layers, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">ARKA Digital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-foreground/60 transition-colors hover:text-foreground/80">About</a>
          <a href="#services" className="text-foreground/60 transition-colors hover:text-foreground/80">Services</a>
          <a href="#testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">Testimonials</a>
          <a href="#contact" className="text-foreground/60 transition-colors hover:text-foreground/80">Contact</a>
        </nav>
        <Button asChild>
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </header>
  );
}
