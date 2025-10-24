import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

const benefits = [
  "Experienced Full-Stack Developers & Cloud Experts",
  "Global Delivery Model",
  "Agile and Scalable Solutions",
  "Transparent Communication & Support",
  "Tailored Solutions for Every Business",
];

const image = PlaceHolderImages.find(p => p.id === 'why-choose-us')!;

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose ARKA?</h2>
            <p className="text-lg text-muted-foreground">
              We are more than just a technology provider; we are your partner in innovation and growth.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
             <Card className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
