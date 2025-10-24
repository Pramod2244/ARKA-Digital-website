"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    mainTitle: "Empowering Businesses with Smart Digital Solutions",
    mainSubtitle: "Transforming ideas into intelligent, scalable, and secure technology.",
    title: "Innovation. Technology. Growth.",
    subtitle: "At ARKA Technologies, we combine creativity and technology to deliver digital excellence that drives your business forward.",
    image: PlaceHolderImages.find(p => p.id === 'hero-bg-1')!,
    main: true,
  },
  {
    title: "Our Vision",
    subtitle: "To be a trusted global technology partner delivering excellence through innovation, intelligence, and integrity.",
    image: PlaceHolderImages.find(p => p.id === 'hero-bg-2')!,
  },
  {
    title: "Our Expertise",
    subtitle: "From software development to cloud, AI, and automation — ARKA Technologies builds solutions that scale with your ambitions.",
    image: PlaceHolderImages.find(p => p.id === 'hero-bg-3')!,
  },
];

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
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
               <div
                className="absolute w-full h-full transition-transform duration-200 ease-out"
                style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
              >
                <Image
                    src={slide.image.imageUrl}
                    alt={slide.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={slide.image.imageHint}
                    priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
              <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center text-white p-4">
                
                {slide.main && (
                   <>
                    <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
                        {slide.mainTitle}
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80 drop-shadow-sm">
                        {slide.mainSubtitle}
                    </p>
                   </>
                )}
                
                <div className={`mt-8 ${slide.main ? 'bg-black/20 backdrop-blur-sm' : ''} p-8 rounded-lg`}>
                    <h2 className="font-headline text-3xl md:text-5xl font-bold">{slide.title}</h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-primary-foreground/90">{slide.subtitle}</p>
                </div>

                {slide.main && (
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="#contact">Get Started</Link>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="#services">Explore Our Services</Link>
                        </Button>
                    </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 border-none hidden md:inline-flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 border-none hidden md:inline-flex" />
      </Carousel>
    </section>
  );
}
