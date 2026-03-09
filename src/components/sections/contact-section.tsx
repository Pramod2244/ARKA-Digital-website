"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
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
import { Mail, Phone, User, Tag, Send, Loader2, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Card } from "../ui/card";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError, type SecurityRuleContext } from "@/firebase/errors";
import { submitToZoho } from "@/app/actions/contact";
import { format } from "date-fns";

const formSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z\s]+$/, "Please enter a valid name (letters only)."),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject cannot be empty.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactSection() {
    const { toast } = useToast();
    const { firestore } = useFirestore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => setShowSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);

    const toTitleCase = (str: string) => {
        return str.trim().toLowerCase().split(/\s+/).map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            // 1. Fetch Sequential Sl No from Firestore
            let nextSlNo = 1;
            if (firestore) {
                const q = query(collection(firestore, 'contacts'), orderBy('slNo', 'desc'), limit(1));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const lastDoc = querySnapshot.docs[0].data();
                    nextSlNo = (lastDoc.slNo || 0) + 1;
                }
            }

            // 2. Format Data
            const formattedData = {
                slNo: nextSlNo,
                name: toTitleCase(values.name),
                email: values.email.toLowerCase().trim(),
                subject: values.subject.trim(),
                message: values.message.trim(),
                formattedDate: format(new Date(), 'dd MMM yyyy HH:mm'),
                status: "New"
            };

            // 3. Send to Zoho Webhook via Server Action
            const zohoResult = await submitToZoho(formattedData);

            if (!zohoResult.success) {
                throw new Error(zohoResult.error);
            }

            // 4. Backup to Firestore (Non-blocking)
            if (firestore) {
                const contactsCollection = collection(firestore, 'contacts');
                addDoc(contactsCollection, {
                    ...formattedData,
                    createdAt: serverTimestamp(),
                    source: 'web_form_arkaadigital'
                }).catch(async (err) => {
                    const permissionError = new FirestorePermissionError({
                        path: 'contacts',
                        operation: 'create',
                        requestResourceData: formattedData,
                    } satisfies SecurityRuleContext);
                    errorEmitter.emit('permission-error', permissionError);
                });
            }

            setShowSuccess(true);
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
        <section id="contact" className="py-24 bg-[#EAF2F6] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="font-headline text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Connect with <span className="text-primary">Arkaa</span></h2>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto font-medium">Ready to start your next project? Fill out the form below and let's engineer your digital future.</p>
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
                                        <p className="text-lg font-black text-slate-900 lowercase">hey@arkaadigital.com</p>
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
                                        <p className="text-lg font-black text-slate-900">+91 93805 08350</p>
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

                    <Card className="lg:col-span-3 border border-white shadow-2xl p-8 md:p-12 rounded-[3rem] bg-white/80 backdrop-blur-md relative">
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

            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-[3rem] p-10 md:p-16 max-w-xl w-full shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] text-center space-y-8 border border-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
                            
                            <button 
                                onClick={() => setShowSuccess(false)}
                                className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-400"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="text-7xl md:text-8xl animate-bounce">🤝</div>
                            
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                                    Thank you for contacting us!
                                </h3>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    We have received your message and our team will respond shortly.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button 
                                    onClick={() => setShowSuccess(false)}
                                    className="h-14 px-12 rounded-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-slate-800 transition-all"
                                >
                                    Done
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
