"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AutoScroll from "embla-carousel-auto-scroll";
import { Quote, Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Arkaa Digital completely transformed our HIMS system. Their technical expertise is truly unmatched.",
    name: "Dr. Arvind Kumar",
    title: "Director, City Hospital",
    avatar: "https://i.pravatar.cc/150?u=1",
    rating: 5
  },
  {
    quote: "The business platform they developed for us has tripled our operational efficiency. Highly recommended.",
    name: "Sarah Jenkins",
    title: "CEO, TechFlow Inc.",
    avatar: "https://i.pravatar.cc/150?u=2",
    rating: 5
  },
  {
    quote: "Their UI/UX design approach made our application incredibly intuitive for our users.",
    name: "Michael Chen",
    title: "Product Head, FinSpark",
    avatar: "https://i.pravatar.cc/150?u=3",
    rating: 5
  },
  {
    quote: "Fast, reliable, and visionary. Arkaa Digital is our long-term technology partner.",
    name: "Emily Watson",
    title: "Founder, EduSpark",
    avatar: "https://i.pravatar.cc/150?u=4",
    rating: 5
  },
  {
    quote: "From cloud architecture to mobile app development, they handle everything with perfection.",
    name: "Robert Black",
    title: "CTO, LogisticHub",
    avatar: "https://i.pravatar.cc/150?u=5",
    rating: 5
  },
  {
    quote: "A truly professional agency that understands the business goals as well as the technology.",
    name: "Lisa Ray",
    title: "VP, Global Retail",
    avatar: "https://i.pravatar.cc/150?u=6",
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
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">Client Reviews</div>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900">
            Trusted by <span className="text-secondary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Discover how Arkaa Digital is driving success for organizations worldwide.
          </p>
        </div>

        <div className="relative">
          <Carousel
            plugins={[autoScroll.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-none shadow-xl shadow-slate-200/50 bg-white p-10 rounded-[2.5rem] flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="p-3 rounded-2xl bg-secondary/5 text-secondary">
                          <Quote className="h-6 w-6" />
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-lg text-slate-600 font-medium italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-10 pt-8 border-t border-slate-50">
                      <Avatar className="h-14 w-14 border-4 border-slate-50">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-black text-slate-900 text-lg">{testimonial.name}</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}