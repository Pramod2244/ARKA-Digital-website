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
        <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-background">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
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
                            <h3 className="font-headline text-2xl font-bold text-foreground">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-2xl bg-accent/5 border border-accent/10">
                                        <Mail className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                                        <p className="text-lg font-medium text-foreground">hey@arkaadigital.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-2xl bg-primary/5 border border-primary/10">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                                        <p className="text-lg font-medium text-foreground">+91 8050332452</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="lg:col-span-3 glass-card glass-card-hover p-8 md:p-10 rounded-[2.5rem]">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-foreground font-bold tracking-wide text-xs">Full Name</FormLabel>
                                                <FormControl>
                                                    <div className="relative group/input">
                                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within/input:text-accent transition-colors" />
                                                        <Input 
                                                            placeholder="John Doe" 
                                                            className="pl-11 h-12 bg-white/40 border-accent/10 focus:ring-accent/50 focus:border-accent/50 rounded-xl"
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
                                                <FormLabel className="text-foreground font-bold tracking-wide text-xs">Email Address</FormLabel>
                                                <FormControl>
                                                    <div className="relative group/input">
                                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within/input:text-accent transition-colors" />
                                                        <Input 
                                                            placeholder="john@example.com" 
                                                            className="pl-11 h-12 bg-white/40 border-accent/10 focus:ring-accent/50 focus:border-accent/50 rounded-xl"
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
                                            <FormLabel className="text-foreground font-bold tracking-wide text-xs">Subject</FormLabel>
                                            <FormControl>
                                                <div className="relative group/input">
                                                    <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within/input:text-accent transition-colors" />
                                                    <Input 
                                                        placeholder="Project Collaboration" 
                                                        className="pl-11 h-12 bg-white/40 border-accent/10 focus:ring-accent/50 focus:border-accent/50 rounded-xl"
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
                                            <FormLabel className="text-foreground font-bold tracking-wide text-xs">Message</FormLabel>
                                            <FormControl>
                                                <div className="relative group/input">
                                                    <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-muted-foreground group-focus-within/input:text-accent transition-colors" />
                                                    <Textarea 
                                                        placeholder="Tell us about your project..." 
                                                        className="pl-11 min-h-[120px] bg-white/40 border-accent/10 focus:ring-accent/50 focus:border-accent/50 rounded-xl resize-none"
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
                                    className="w-full h-14 text-lg font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_5px_15px_rgba(249,115,22,0.15)] transition-all duration-300 uppercase tracking-widest"
                                >
                                    Send Message
                                </Button>
                                
                                <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-accent/10 mt-4">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                        <Clock className="h-4 w-4 text-accent" />
                                        Response within 24h
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                        <ShieldCheck className="h-4 w-4 text-primary" />
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