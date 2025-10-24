"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    id: 'hero-bg-1',
    mainTitle: "Empowering Businesses with Smart Digital Solutions",
    mainSubtitle: "Transforming ideas into intelligent, scalable, and secure technology.",
  },
  {
    id: 'hero-bg-2',
    mainTitle: "Innovation at the Core of Everything We Do",
    mainSubtitle: "Harnessing the power of AI and cloud to drive your business forward.",
  },
  {
    id: 'hero-bg-3',
    mainTitle: "Your Vision, Engineered for Excellence",
    mainSubtitle: "From concept to launch, we are your dedicated partners in digital transformation.",
  }
];

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg-main')!;

export function HeroSection() {

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center text-white p-4">
        <Carousel
          className="w-full max-w-2xl"
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
                  <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 drop-shadow-sm">
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
