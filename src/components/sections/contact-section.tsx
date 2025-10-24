"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactSection() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        form.reset();
    }
    
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    return (
        <section id="contact" className="py-16 md:py-24 bg-card" ref={ref}>
            <div
              className={cn(
                "container mx-auto px-4 transition-opacity duration-1000 ease-out",
                isInView ? "opacity-100" : "opacity-0"
              )}
            >
                <div className="text-center space-y-4 mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Let’s Build Something Great Together</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Connect with us today and take your business to the next level.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-12">
                    <div
                      className={cn(
                        "md:col-span-2 space-y-6 transition-all duration-1000 ease-out",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      )}
                    >
                        <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
                         <div className="space-y-4 text-muted-foreground">
                            <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /> contact@arkatechnologies.com</p>
                            <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /> +91-XXXXXXXXXX</p>
                            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> Bengaluru, India</p>
                        </div>
                        <p className="text-sm text-muted-foreground">We're available to discuss your project needs. Reach out via email or phone, or fill out the contact form, and we'll respond promptly.</p>
                    </div>

                    <div
                      className={cn(
                        "md:col-span-3 transition-all duration-1000 ease-out delay-200",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      )}
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="your.email@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Project Idea" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full">Send Message</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
