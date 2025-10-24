import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of IT services including custom software development, cloud & DevOps, AI & automation, data analytics, cybersecurity, and UI/UX design.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology, which allows for flexibility, transparency, and collaboration. We work in sprints, delivering incremental updates and incorporating your feedback throughout the process.",
  },
  {
    question: "How do you ensure the quality of your software?",
    answer: "We have a dedicated QA team that performs rigorous testing at every stage of the development lifecycle. This includes unit testing, integration testing, performance testing, and user acceptance testing to ensure a high-quality, bug-free product.",
  },
    {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer various support and maintenance packages to ensure your application remains up-to-date, secure, and performs optimally. We can tailor a support plan to meet your specific needs.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
