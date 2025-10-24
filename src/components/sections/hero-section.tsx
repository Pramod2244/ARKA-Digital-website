"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroContent = {
  mainTitle: "Empowering Businesses with Smart Digital Solutions",
  mainSubtitle: "Transforming ideas into intelligent, scalable, and secure technology.",
  image: PlaceHolderImages.find(p => p.id === 'hero-bg-1')!,
};

export function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden">
        <div className="relative w-full h-full">
            <div
            className="absolute w-full h-full transition-transform duration-200 ease-out"
            style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
            >
            <Image
                src={heroContent.image.imageUrl}
                alt={heroContent.image.description}
                fill
                className="object-cover"
                data-ai-hint={heroContent.image.imageHint}
                priority
            />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center text-white p-4">
            
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
                    {heroContent.mainTitle}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80 drop-shadow-sm">
                    {heroContent.mainSubtitle}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="#contact">Get Started</Link>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="#services">Explore Our Services</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
