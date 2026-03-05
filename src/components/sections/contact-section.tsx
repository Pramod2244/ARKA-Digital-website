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
import { Mail, MapPin, Phone, MessageSquare, PhoneCall, User, Tag, Clock, ShieldCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError, type SecurityRuleContext } from "@/firebase/errors";
import { motion } from "framer-motion";

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
    const { firestore } = useFirestore();
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
        if (firestore) {
            const contactsCollection = collection(firestore, 'contacts');
            addDoc(contactsCollection, {
                ...values,
                createdAt: serverTimestamp(),
            }).catch(async () => {
                const permissionError = new FirestorePermissionError({
                    path: 'contacts',
                    operation: 'create',
                    requestResourceData: values,
                } satisfies SecurityRuleContext);
                errorEmitter.emit('permission-error', permissionError);
            });
        }

        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        form.reset();
    }

    return (
        <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
            {/* Seamless Transition Mask - Top */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-10" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="container mx-auto px-4"
            >
                <div className="text-center space-y-4 mb-16">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-glow-primary">Let’s Build Something Great</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
                        Have a project in mind? Connect with us today and take your business to the next level.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-6">
                            <h3 className="font-headline text-2xl font-bold text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                                        <Mail className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                                        <p className="text-lg font-medium text-white">hey@arkaadigital.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                                        <p className="text-lg font-medium text-white">+91 8050332452</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                                        <MapPin className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Our Location</p>
                                        <p className="text-lg font-medium text-white leading-relaxed">
                                            Chikkaballapura, Karnataka <br />
                                            562101, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="flex gap-4">
                               <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group" asChild>
                                    <a href="https://wa.me/918050332452" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                                        <MessageSquare className="h-5 w-5 group-hover:text-primary" />
                                    </a>
                               </Button>
                               <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/10 bg-white/5 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group" asChild>
                                    <a href="mailto:hey@arkaadigital.com" aria-label="Send an Email">
                                        <Mail className="h-5 w-5 group-hover:text-accent" />
                                    </a>
                               </Button>
                               <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group" asChild>
                                    <a href="tel:+918050332452" aria-label="Call us">
                                        <PhoneCall className="h-5 w-5 group-hover:text-primary" />
                                    </a>
                               </Button>
                            </div>
                        </div>
                    </div>

                    <Card className="lg:col-span-3 glass-card p-8 md:p-10 border-white/10 shadow-2xl relative overflow-hidden group rounded-[2.5rem]">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[70px]" />
                        
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-bold tracking-wide text-xs">Full Name</FormLabel>
                                                <FormControl>
                                                    <div className="relative group/input">
                                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                                                        <Input 
                                                            placeholder="John Doe" 
                                                            className="pl-11 h-12 bg-white/5 border-white/10 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 rounded-xl text-base"
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage className="text-[11px]" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-bold tracking-wide text-xs">Email Address</FormLabel>
                                                <FormControl>
                                                    <div className="relative group/input">
                                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                                                        <Input 
                                                            placeholder="john@example.com" 
                                                            className="pl-11 h-12 bg-white/5 border-white/10 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 rounded-xl text-base"
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage className="text-[11px]" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white font-bold tracking-wide text-xs">Subject</FormLabel>
                                            <FormControl>
                                                <div className="relative group/input">
                                                    <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                                                    <Input 
                                                        placeholder="Project Collaboration" 
                                                        className="pl-11 h-12 bg-white/5 border-white/10 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 rounded-xl text-base"
                                                        {...field} 
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage className="text-[11px]" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white font-bold tracking-wide text-xs">Message</FormLabel>
                                            <FormControl>
                                                <div className="relative group/input">
                                                    <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                                                    <Textarea 
                                                        placeholder="Tell us about your project..." 
                                                        className="pl-11 min-h-[120px] bg-white/5 border-white/10 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 rounded-xl resize-none text-base"
                                                        {...field} 
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage className="text-[11px]" />
                                        </FormItem>
                                    )}
                                />
                                <Button 
                                    type="submit" 
                                    size="lg" 
                                    className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    Send Message
                                </Button>
                                
                                <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-white/5 mt-4">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                        <Clock className="h-4 w-4 text-primary" />
                                        Response within 24h
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                        <ShieldCheck className="h-4 w-4 text-accent" />
                                        Free consultation
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </Card>
                </div>
            </motion.div>
        </section>
    );
}