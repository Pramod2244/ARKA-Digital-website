"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AutoScroll from "embla-carousel-auto-scroll";
import { Quote, Star, MousePointer2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Arkaa Digital completely transformed our HIMS system. Their technical expertise is truly unmatched and scaled perfectly with our hospital expansion.",
    name: "Dr. Arvind Kumar",
    title: "Director, City Hospital",
    avatar: "https://i.pravatar.cc/150?u=1",
    rating: 5
  },
  {
    quote: "The business platform they developed for us has tripled our operational efficiency. We can't imagine working without it.",
    name: "Sarah Jenkins",
    title: "CEO, TechFlow Inc.",
    avatar: "https://i.pravatar.cc/150?u=2",
    rating: 5
  },
  {
    quote: "Their UI/UX design approach made our application incredibly intuitive. Our user retention has increased by over 40% since launch.",
    name: "Michael Chen",
    title: "Product Head, FinSpark",
    avatar: "https://i.pravatar.cc/150?u=3",
    rating: 5
  },
  {
    quote: "Fast, reliability, and visionary. Arkaa Digital is more than a vendor; they are our long-term strategic technology partner.",
    name: "Emily Watson",
    title: "Founder, EduSpark",
    avatar: "https://i.pravatar.cc/150?u=4",
    rating: 5
  },
  {
    quote: "The team's ability to translate complex clinical requirements into a simple HIMS interface was remarkable.",
    name: "Dr. Rajesh Gupta",
    title: "MD, LifeCare Clinics",
    avatar: "https://i.pravatar.cc/150?u=5",
    rating: 5
  },
  {
    quote: "Arkaa's cloud migration services saved us thousands in monthly server costs while significantly improving our global uptime.",
    name: "David Miller",
    title: "CTO, Global Logistics",
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
    <section id="testimonials" className="py-24 bg-[#FFF4EC] relative overflow-hidden">
      {/* Soft Peach Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Client Success</div>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by <span className="text-secondary text-glow-orange">Leaders</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mt-4">
            <MousePointer2 className="h-3 w-3 animate-bounce" />
            Hover to Pause Stream
          </div>
        </div>

        <div className="relative px-6">
          {/* Gradient Masks for Seamless Edge Effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFF4EC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFF4EC] to-transparent z-10 pointer-events-none" />

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
                  <Card className="h-full border-none shadow-xl shadow-slate-200/40 bg-white/90 backdrop-blur-md p-10 rounded-[3rem] flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="p-4 rounded-2xl bg-secondary/5 text-secondary border border-secondary/10">
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

                    <div className="flex items-center gap-5 mt-10 pt-8 border-t border-slate-50">
                      <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="font-black bg-slate-100">{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-black text-slate-900 leading-tight">{testimonial.name}</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black mt-1">{testimonial.title}</p>
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