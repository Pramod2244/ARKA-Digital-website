"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "Arkaa Digita transformed our outdated system into a modern, cloud-based platform. Their team’s technical skill and commitment to delivery were outstanding.",
        name: "Jane Doe",
        title: "CEO, Retail Client",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    }
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="testimonials" className="py-16 md:py-24" ref={ref}>
      <div className={cn("container mx-auto px-4 transition-opacity duration-1000 ease-out", isInView ? "opacity-100" : "opacity-0")}>
        <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
        </div>
        <div className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={cn(
                    "bg-secondary border-none shadow-lg transition-all duration-1000 ease-out",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                >
                    <CardContent className="p-8 text-center">
                        <p className="text-xl italic text-secondary-foreground/90">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-center mt-6">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 text-left">
                                <p className="font-bold text-secondary-foreground">{testimonial.name}</p>
                                <p className="text-sm text-secondary-foreground/70">{testimonial.title}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
