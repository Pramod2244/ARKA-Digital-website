"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroSlides = [
  {
    id: 'hero-bg-1',
    mainTitle: "Empowering Businesses with Smart Digital Solutions",
    mainSubtitle: "Transforming ideas into intelligent, scalable, and secure technology.",
    image: PlaceHolderImages.find(p => p.id === 'hero-bg-main')!,
  },
  {
    id: 'hero-bg-2',
    mainTitle: "Innovation at the Core of Everything We Do",
    mainSubtitle: "Harnessing the power of AI and cloud to drive your business forward.",
    image: PlaceHolderImages.find(p => p.id === 'why-choose-us')!,
  },
  {
    id: 'hero-bg-3',
    mainTitle: "Your Vision, Engineered for Excellence",
    mainSubtitle: "From concept to launch, we are your dedicated partners in digital transformation.",
    image: PlaceHolderImages.find(p => p.id === 'hero-bg-main')!,
  }
];


export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <Image
                src={slide.image.imageUrl}
                alt={slide.image.description}
                fill
                className="object-cover"
                priority={heroSlides.indexOf(slide) === 0}
                data-ai-hint={slide.image.imageHint}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center text-white p-4">
        <Carousel
          className="w-full max-w-4xl"
          plugins={[plugin.current]}
           opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="animate-fade-in-up">
                  <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
                    {slide.mainTitle}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 drop-shadow-sm max-w-2xl mx-auto">
                    {slide.mainSubtitle}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-500">
          <Button size="lg" asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
