"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Arkaa Digital transformed our outdated system into a modern, cloud-based platform. Their team’s technical skill was outstanding.",
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
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function TestimonialsSection() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      {/* Seamless Transition Mask - Top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-10" />

      {/* Background Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-30" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-white">
            What Our <span className="text-primary text-glow-primary">Clients</span> Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Don't just take our word for it. Hear from the businesses we've helped transform into digital leaders.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "center",
              loop: false,
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={itemVariants} className="h-full">
                    <Card className="h-full glass-card border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:border-primary/30 transition-all duration-500 overflow-hidden relative rounded-[2rem]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardContent className="p-8 flex flex-col h-full relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-3 rounded-2xl bg-primary/10">
                            <Quote className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>

                        <div className="flex-grow mb-8">
                          <p className="text-lg text-white/90 leading-relaxed font-medium italic">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                          <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-0.5">
                            <p className="font-bold text-base text-white group-hover:text-primary transition-colors">
                              {testimonial.name}
                            </p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center items-center gap-4 mt-12 relative z-20">
              <CarouselPrevious className="relative translate-y-0 left-0 h-14 w-14 border-white/10 bg-white/5 hover:bg-white/10 hover:text-primary hover:border-primary/50 rounded-full transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none" />
              <CarouselNext className="relative translate-y-0 right-0 h-14 w-14 border-white/10 bg-white/5 hover:bg-white/10 hover:text-primary hover:border-primary/50 rounded-full transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none" />
            </div>
          </Carousel>
        </motion.div>
      </motion.div>

      {/* Seamless Transition Mask - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
