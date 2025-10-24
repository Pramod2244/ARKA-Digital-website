"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
        style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        poster="https://images.unsplash.com/photo-1528823336495-235848225239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxvcmFuZ2UlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2MTM1NDYxOXww&ixlib=rb-4.1.0&q=80&w=1080"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-woman-in-a-vr-headset-44012-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center text-white p-4">
        <Carousel
          className="w-full max-w-2xl"
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
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
