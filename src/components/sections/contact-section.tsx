"use client";

import { useState } from "react";
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
import { Mail, Phone, User, Tag, Send, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Card } from "../ui/card";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError, type SecurityRuleContext } from "@/firebase/errors";
import { submitToZoho } from "@/app/actions/contact";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactSection() {
    const { toast } = useToast();
    const { firestore } = useFirestore();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            // 1. Send to Zoho via Server Action
            const zohoResult = await submitToZoho({
                name: values.name,
                email: values.email,
                subject: values.subject, 
                message: values.message
            });

            if (!zohoResult.success) {
                throw new Error(zohoResult.error);
            }

            // 2. Save to Firestore as backup
            if (firestore) {
                const contactsCollection = collection(firestore, 'contacts');
                addDoc(contactsCollection, {
                    ...values,
                    createdAt: serverTimestamp(),
                    source: 'web_form_zoho'
                }).catch(async () => {
                    const permissionError = new FirestorePermissionError({
                        path: 'contacts',
                        operation: 'create',
                        requestResourceData: values,
                    } satisfies SecurityRuleContext);
                    errorEmitter.emit('permission-error', permissionError);
                });
            }

            // 3. Success Feedback
            toast({
              title: "Success",
              description: "Message sent successfully.",
            });
            
            form.reset();
        } catch (error) {
            console.error("Submission error:", error);
            toast({
                variant: "destructive",
                title: "Submission Error",
                description: "There was a problem sending your message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-24 bg-[#EAF2F6] relative overflow-hidden pl-[70px]">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Connect with <span className="text-primary">Arkaa</span></h2>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto font-medium">Ready to start your next project? Fill out the form below and let's engineering your digital future.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto items-start">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-8">
                            <h3 className="font-headline text-3xl font-black text-slate-900 leading-tight">Expert Consultation <br /> Within 24 Hours</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary border border-slate-100">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Email Support</p>
                                        <p className="text-lg font-black text-slate-900">hey@arkaadigital.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#3B82F6] border border-slate-100">
                                        <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Call Experts</p>
                                        <p className="text-lg font-black text-slate-900">+91 8050332452</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-white/50 border border-white shadow-lg backdrop-blur-sm">
                          <p className="text-sm font-bold text-slate-600 leading-relaxed italic">
                            "We are committed to delivering measurable value. Our agile approach ensures your vision becomes a scalable reality."
                          </p>
                        </div>
                    </div>

                    <Card className="lg:col-span-3 border border-white shadow-2xl p-8 md:p-12 rounded-[3rem] bg-white/80 backdrop-blur-md">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-black uppercase tracking-widest text-[10px] text-slate-400">Your Name</FormLabel>
                                                <FormControl>
                                                    <div className="relative group">
                                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                                                        <Input 
                                                            disabled={isSubmitting}
                                                            placeholder="John Doe" 
                                                            className="pl-12 h-14 border-slate-100 bg-white/50 text-slate-900 focus:bg-white transition-all rounded-2xl font-medium placeholder:text-slate-300"
                                                            {...field} 
                                                        />
                                                    </div>
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
                                                <FormLabel className="font-black uppercase tracking-widest text-[10px] text-slate-400">Email Address</FormLabel>
                                                <FormControl>
                                                    <div className="relative group">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                                                        <Input 
                                                            disabled={isSubmitting}
                                                            placeholder="john@example.com" 
                                                            className="pl-12 h-14 border-slate-100 bg-white/50 text-slate-900 focus:bg-white transition-all rounded-2xl font-medium placeholder:text-slate-300"
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-black uppercase tracking-widest text-[10px] text-slate-400">Subject</FormLabel>
                                            <FormControl>
                                                <div className="relative group">
                                                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                                                    <Input 
                                                        disabled={isSubmitting}
                                                        placeholder="e.g. HIMS Development" 
                                                        className="pl-12 h-14 border-slate-100 bg-white/50 text-slate-900 focus:bg-white transition-all rounded-2xl font-medium placeholder:text-slate-300"
                                                        {...field} 
                                                    />
                                                </div>
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
                                            <FormLabel className="font-black uppercase tracking-widest text-[10px] text-slate-400">Message</FormLabel>
                                            <FormControl>
                                                <Textarea 
                                                    disabled={isSubmitting}
                                                    placeholder="Briefly describe your requirements..." 
                                                    className="min-h-[150px] border-slate-100 bg-white/50 text-slate-900 focus:bg-white transition-all rounded-[2rem] p-6 font-medium resize-none placeholder:text-slate-300"
                                                    {...field} 
                                                    spellCheck={false}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full h-16 text-lg font-black rounded-2xl bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98] uppercase tracking-[0.2em] group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            Sending...
                                            <Loader2 className="ml-3 h-5 w-5 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
