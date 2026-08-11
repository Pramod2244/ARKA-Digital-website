'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cinematicAudio } from '@/lib/cinematic-audio';
import { submitToZoho } from '@/app/actions/contact';
import {
  Sparkles,
  Rocket,
  CheckCircle2,
  X
} from 'lucide-react';
import { ArkaaLogo } from '../arkaa-logo';

const PRODUCT_SCOPES = [
  'Enterprise Software & ERP',
  'Hospital Management (HIMS)',
  'Autonomous AI Application',
  'College / Campus ERP',
  'CRM & Sales Pipeline',
  'High-End Web Product',
  'Mobile App (iOS/Android)',
  'Cloud Infrastructure',
];

const BUDGET_TIERS = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k - $100k+'];

interface FinalSceneProps {
  externalModalOpen?: boolean;
  onCloseExternalModal?: () => void;
}

export const FinalScene: React.FC<FinalSceneProps> = ({
  externalModalOpen = false,
  onCloseExternalModal,
}) => {
  const [internalModalOpen, setInternalModalOpen] = useState(false);

  const isModalOpen = externalModalOpen || internalModalOpen;

  const closeModal = () => {
    setInternalModalOpen(false);
    if (onCloseExternalModal) {
      onCloseExternalModal();
    }
  };

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const [selectedType, setSelectedType] = useState(PRODUCT_SCOPES[0]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_TIERS[1]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    cinematicAudio.playUpgradeChime();
    setIsSubmitting(true);

    const leadId = `ARK-${Date.now().toString().slice(-6)}`;
    const dateTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    try {
      await submitToZoho({
        lead_id: leadId,
        name: form.name,
        email: form.email,
        subject: `Project Blueprint Request: ${selectedType} (Budget: ${selectedBudget})`,
        message: `Company: ${form.company || 'N/A'}\nPhone: ${form.phone || 'N/A'}\nSelected Product: ${selectedType}\nEstimated Investment: ${selectedBudget}\n\nProject Goals:\n${form.details || 'N/A'}`,
        date_time: dateTime,
        status: 'New Lead',
      });
    } catch (err) {
      console.error('Failed to submit to Zoho Flow:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="chapter-8" className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-orange-50/50 border-t border-orange-100">
      {/* Orange Ambient Lighting */}
      <div className="absolute inset-0 bg-radial from-orange-500/20 via-amber-500/10 to-transparent blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Floating ARKAA Logo Image 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="inline-block mx-auto mb-8 bg-white p-4 rounded-3xl border-2 border-orange-400 shadow-xl cursor-pointer"
          onClick={() => cinematicAudio.playDiscoveryPulse()}
        >
          <ArkaaLogo size="lg" />
        </motion.div>

        {/* Final Text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8"
        >
          Let's Build <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 glow-text-orange">
            Your Digital Future.
          </span>
        </motion.h2>

        <p className="text-slate-600 text-lg sm:text-2xl font-normal max-w-2xl mx-auto leading-relaxed mb-12">
          Your company transformation begins with a single architectural blueprint. Launch your project session below.
        </p>

        {/* Start Your Journey Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            cinematicAudio.playDiscoveryPulse();
            setInternalModalOpen(true);
          }}
          className="px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-extrabold text-base tracking-wider shadow-[0_10px_35px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_45px_rgba(249,115,22,0.6)] transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          <Rocket className="w-6 h-6 animate-bounce" />
          <span>START YOUR JOURNEY</span>
          <Sparkles className="w-5 h-5 text-orange-100" />
        </motion.button>
      </div>

      {/* Holographic Contact Modal with z-[9999] */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/75 backdrop-blur-md overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside card
              className="bg-white w-full max-w-3xl rounded-3xl border-2 border-orange-400 p-6 sm:p-10 relative overflow-hidden shadow-2xl my-auto"
            >
              {/* Visible Close Button */}
              <button
                onClick={closeModal}
                type="button"
                aria-label="Close modal"
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-500 hover:text-white transition-all shadow-sm flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="flex items-center gap-3 mb-2 pr-10">
                    <ArkaaLogo size="sm" showText={false} />
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">Project Command Center</h3>
                      <p className="text-xs text-slate-500">Request custom architecture specs</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-orange-600 font-extrabold uppercase block mb-2">
                      SELECT PRODUCT PILLAR
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PRODUCT_SCOPES.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => {
                            cinematicAudio.playHover();
                            setSelectedType(type);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                            selectedType === type
                              ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                              : 'bg-orange-50/50 text-slate-700 border-orange-200 hover:border-orange-400'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-600 mb-1 block">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alexander Vance"
                        className="w-full bg-slate-50 border border-orange-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-600 mb-1 block">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-slate-50 border border-orange-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-600 mb-1 block">PHONE NUMBER</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 93805 08350"
                        className="w-full bg-slate-50 border border-orange-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-600 mb-1 block">COMPANY / ORGANIZATION</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Apex Health Systems"
                        className="w-full bg-slate-50 border border-orange-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-slate-600 mb-1 block">PROJECT GOALS & SPECIFICATIONS</label>
                    <textarea
                      rows={3}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      placeholder="Describe your current bottlenecks or desired custom software specs..."
                      className="w-full bg-slate-50 border border-orange-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
                  >
                    <Rocket className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                    <span>{isSubmitting ? 'TRANSMITTING PAYLOAD...' : 'TRANSMIT PROJECT BLUEPRINT'}</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-black text-slate-900">TRANSMISSION RECEIVED!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong className="text-orange-600">{form.name}</strong>. Your project details have been transmitted directly to <strong className="text-slate-900">hey@arkaadigital.com</strong> and our senior software architect will reach out within 24 hours.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-xs hover:bg-orange-600"
                  >
                    Close Command Center
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
