import { AnimatedCounter } from "@/components/animated-counter";
import { Briefcase, Smile, Globe } from "lucide-react";

const stats = [
    {
        icon: Briefcase,
        value: 100,
        label: "Projects Completed",
        suffix: "+",
    },
    {
        icon: Smile,
        value: 50,
        label: "Happy Clients",
        suffix: "+",
    },
    {
        icon: Globe,
        value: 10,
        label: "Countries Served",
        suffix: "+",
    },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center p-6 rounded-lg">
                    <stat.icon className="h-12 w-12 text-primary mb-4" />
                    <div className="font-headline text-5xl font-bold text-secondary-foreground">
                        <AnimatedCounter target={stat.value} />
                        {stat.suffix}
                    </div>
                    <p className="text-lg text-secondary-foreground/80 mt-2">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
