"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";


const benefits = [
  "Experienced Full-Stack Developers & Cloud Experts",
  "Global Delivery Model",
  "Agile and Scalable Solutions",
  "Transparent Communication & Support",
  "Tailored Solutions for Every Business",
];

const image = PlaceHolderImages.find(p => p.id === 'why-choose-us')!;

export function WhyChooseUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="why-us" className="py-16 md:py-24 bg-card relative" ref={ref}>
       {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className={cn("container mx-auto px-4 transition-opacity duration-1000 ease-out relative", isInView ? "opacity-100" : "opacity-0")}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "space-y-6 transition-all duration-1000 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Arkaa?</h2>
            <p className="text-lg text-muted-foreground">
              We are more than just a technology provider; we are your partner in innovation and growth.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className={cn(
                    "flex items-start gap-3 transition-all duration-1000 ease-out",
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={cn(
              "flex justify-center transition-all duration-1000 ease-out delay-300",
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
             <Card className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-background/50">
                <div className="p-8">
                  <h3 className="font-headline text-2xl font-bold mb-4">Our Commitment</h3>
                  <p className="text-muted-foreground">We are dedicated to turning your vision into reality with solutions that are not just effective but also elegant and future-proof. Our agile approach ensures we adapt to your needs, delivering value at every stage of the development lifecycle.
                  </p>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
