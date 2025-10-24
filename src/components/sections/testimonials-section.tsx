import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        quote: "ARKA Technologies transformed our outdated system into a modern, cloud-based platform. Their team’s technical skill and commitment to delivery were outstanding.",
        name: "Jane Doe",
        title: "CEO, Retail Client",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
        </div>
        <div className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-secondary border-none shadow-lg">
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
