"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useMemo, useEffect, useState } from "react";

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
  const [mounted, setMounted] = useState(false);
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const plugins = useMemo(() => [autoplay.current], []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Seamless Transition Mask - Top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-10" />

      {/* Atmospheric Background System */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02] bg-grid-white" 
          style={{ backgroundSize: '50px 50px' }} 
        />
        
        {/* Radial Energy Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] opacity-20" />
        
        {/* Ambient Particle System */}
        {mounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={`testimonial-particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md mb-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Trust & Success</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            What Our <span className="text-primary text-glow-primary">Partners</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Join the ranks of high-performance businesses that have scaled their digital potential with the Arkaa core.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Carousel
            plugins={plugins}
            className="w-full max-w-7xl mx-auto"
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.reset()}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={itemVariants} className="h-full">
                    <Card className="h-full glass-card border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:border-primary/40 transition-all duration-500 overflow-hidden relative rounded-[2.5rem] flex flex-col p-8 md:p-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500">
                            <Quote className="h-6 w-6 text-primary filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                          </div>
                          <div className="flex gap-1.5 pt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>

                        <div className="flex-grow mb-10">
                          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium italic">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="flex items-center gap-5 pt-8 border-t border-white/5 mt-auto">
                          <Avatar className="h-14 w-14 border-2 border-primary/20 shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-transform duration-500 group-hover:scale-110">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <p className="font-bold text-lg text-white group-hover:text-primary transition-colors duration-300">
                              {testimonial.name}
                            </p>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center items-center gap-6 mt-16 relative z-20">
              <CarouselPrevious className="static translate-y-0 h-16 w-16 border-white/10 bg-white/5 hover:bg-white/10 hover:text-primary hover:border-primary/50 rounded-full transition-all duration-300 group shadow-lg" />
              <CarouselNext className="static translate-y-0 h-16 w-16 border-white/10 bg-white/5 hover:bg-white/10 hover:text-primary hover:border-primary/50 rounded-full transition-all duration-300 group shadow-lg" />
            </div>
          </Carousel>
        </motion.div>
      </motion.div>

      {/* Seamless Transition Mask - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
