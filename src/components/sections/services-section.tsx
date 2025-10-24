import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, BrainCircuit, BarChart3, ShieldCheck, Palette } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "End-to-end web and mobile app development using modern frameworks and agile methods.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Secure, scalable cloud solutions to streamline deployment and operations.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "Integrate artificial intelligence and intelligent automation to boost productivity.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Transform data into actionable insights for smarter decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Solutions",
    description: "Protect your business with enterprise-grade security and compliance frameworks.",
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    description: "Beautiful, user-centric design that strengthens your brand identity.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of technology services designed to help you achieve your business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
