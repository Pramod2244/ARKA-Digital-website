"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AutoScroll from "embla-carousel-auto-scroll";
import { Quote, Star, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Arkaa Digital transformed our outdated system into a modern, cloud-based platform. Their team's technical skill was outstanding.",
    name: "Jane Doe",
    title: "CEO, Retail Client",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 5
  },
  {
    quote: "The UI/UX design they delivered was not only beautiful but also incredibly intuitive. Our engagement has skyrocketed.",
    name: "John Smith",
    title: "Product Manager, Startup",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    rating: 5
  },
  {
    quote: "Working with Arkaa Digital felt like a true partnership. They were responsive, proactive, and genuinely invested in our success.",
    name: "Emily White",
    title: "Director, eCommerce",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    rating: 5
  },
  {
    quote: "Their AI automation solutions saved us hundreds of hours of manual work. A truly future-ready team for modern business.",
    name: "Michael Chen",
    title: "CTO, Fintech",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
    rating: 5
  },
  {
    quote: "The scalability of the apps they build is unmatched. We grew 300% in six months without a single performance glitch.",
    name: "Sarah Jenkins",
    title: "Head of Growth, SaaS Corp",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704h",
    rating: 5
  },
  {
    quote: "From branding to full-stack execution, Arkaa Digital is a powerhouse. They understood our vision perfectly from day one.",
    name: "David Rodriguez",
    title: "Founder, EduTech",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704i",
    rating: 5
  },
  {
    quote: "They don't just write code; they solve business problems. Their strategic approach to digital transformation is refreshing.",
    name: "Lisa Wang",
    title: "Ops Director, Logistics Hub",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704j",
    rating: 5
  },
  {
    quote: "Fast delivery, exceptional quality, and world-class support. Arkaa Digital is hands down the best agency we've worked with.",
    name: "Robert Black",
    title: "Product Lead, CryptoVentures",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704k",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  
  const autoScroll = useRef(
    AutoScroll({ 
      speed: 1, 
      stopOnInteraction: false, 
      stopOnMouseEnter: true,
      playOnInit: true
    })
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-grid-white" style={{ backgroundSize: '50px 50px' }} />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] opacity-15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-md mb-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Trust & Success</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Our <span className="text-primary text-glow-primary">Partners</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Join the ranks of high-performance businesses that have scaled their digital potential with the Arkaa core.
          </p>
        </div>

        <div className="relative">
          <Carousel
            plugins={[autoScroll.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
              dragFree: true
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-8 cursor-grab active:cursor-grabbing">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="h-full glass-card glass-card-hover flex flex-col p-8 md:p-10 select-none rounded-[2.5rem]">
                      <div className="flex justify-between items-start mb-8">
                        <div className="p-4 rounded-2xl bg-accent/5 border border-accent/10">
                          <Quote className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex gap-1.5 pt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>

                      <div className="flex-grow mb-10">
                        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium italic">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      <div className="flex items-center gap-5 pt-8 border-t border-accent/10 mt-auto">
                        <Avatar className="h-14 w-14 border-2 border-accent/20 shadow-[0_0_15px_rgba(0,186,255,0.05)]">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-accent/10 text-accent font-bold">{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                            {testimonial.name}
                          </p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        <div className="flex justify-center items-center gap-2 mt-12 text-muted-foreground/60 text-[10px] uppercase tracking-[0.2em] font-bold">
          <MousePointer2 className="h-3 w-3 animate-pulse" />
          <span>Hover to Pause Stream</span>
        </div>
      </div>
    </section>
  );
}