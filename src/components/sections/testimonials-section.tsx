"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react";


const testimonials = [
    {
        quote: "Arkaa Digital transformed our outdated system into a modern, cloud-based platform. Their team’s technical skill and commitment to delivery were outstanding.",
        name: "Jane Doe",
        title: "CEO, Retail Client",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        quote: "The UI/UX design they delivered was not only beautiful but also incredibly intuitive. Our user engagement has skyrocketed since the redesign.",
        name: "John Smith",
        title: "Product Manager, Tech Startup",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e"
    },
    {
        quote: "Working with Arkaa Digital felt like a true partnership. They were responsive, proactive, and genuinely invested in our success.",
        name: "Emily White",
        title: "Marketing Director, eCommerce Brand",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f"
    },
];

export function TestimonialsSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full glass-card">
                      <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                          <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                          <div className="flex items-center justify-center mt-6">
                              <Avatar>
                                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="ml-4 text-left">
                                  <p className="font-bold text-foreground">{testimonial.name}</p>
                                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
