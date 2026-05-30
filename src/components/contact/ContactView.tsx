import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, HelpCircle, Send, CheckCircle, Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Mascot from '../mascot/Mascot';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Do you use wool? I have sensitive skin hypoallergenic requirements.',
    a: 'No! We use 100% premium milk cotton yarn and high-grade polyester chenille. These fibers are entirely vegan, anti-pilling, and chemical-allergen-free. They do not scratch or shed fibers, making our plushies optimal companions for toddlers and sensory-sensitive cuddlers.',
  },
  {
    q: 'How safe are the safety plastic eyes on your toys?',
    a: 'We use industrial safety eyes secured firmly with dual washer locks clamped on the interior side. However, for newborns and chewing infants under 3 years, we highly recommend custom options featuring hand-embroidered yarn eyes. Just set a custom order note and we will embroider the faces!',
  },
  {
    q: 'Can I customize thread colors or clothing styles?',
    a: 'Absolutely! Our "Custom Orders" section has multiple patchwork templates. Feel free to request custom color schemes, custom pet ports replicas, or custom lengths. Describe your requested specifications inside our contact form below or select Custom Orders in the catalog.',
  },
  {
    q: 'What is your shipping speed and packaged wrapping style?',
    a: 'Each piece takes 2-4 hours to crochet, but we keep popular items pre-knit! Order packages dispatch in 1-2 business days with fully tracked shipping. They are wrapped inside soft tissue paper tied with hemp string, packaged with custom brand stickers and a personalized thank-you note.',
  }
];

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaqIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 transition-colors duration-300">
      
      {/* Intro header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-coral uppercase tracking-widest mb-1.5 select-none">
          <Mail className="h-3.5 w-3.5" />
          <span>Need custom patterns? Pin us</span>
        </span>
        <h1 className="font-fredoka font-bold text-3xl sm:text-4.5xl text-neutral-800 dark:text-white leading-tight">
          Stitch a Conversation
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-xl mx-auto">
          Have an idea for a custom plushie? Want to send pictures of your kitten for an amigurumi replica? Send us a message and we'll reply inside 24 spins!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: FAQ and physical details */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          
          {/* FAQ Accordion block */}
          <div>
            <h2 className="font-fredoka font-bold text-xl text-neutral-800 dark:text-white mb-6 flex items-center gap-2">
              <HelpCircle className="h-5.5 w-5.5 text-brand-coral" />
              <span>Stitcher’s FAQ Directory</span>
            </h2>

            <div className="flex flex-col gap-3Select font-semibold">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = activeFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-neutral-900 border border-brand-coral/10 dark:border-white/5 rounded-2xl overflow-hidden transition-all shadow-xs mb-3"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 font-fredoka font-bold text-xs sm:text-sm text-neutral-800 dark:text-neutral-100 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="h-4 w-4 text-brand-coral shrink-0" /> : <ChevronDown className="h-4 w-4 text-brand-coral shrink-0" />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-dashed border-neutral-100 dark:border-neutral-800 bg-neutral-50/10 dark:bg-neutral-950/20"
                        >
                          <p className="p-4 text-xs sm:text-sm text-neutral-550 dark:text-neutral-400 leading-relaxed font-semibold">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick operations list card */}
          <div className="bg-[#FFEAA7]/10 dark:bg-neutral-900 border-2 border-dashed border-[#FFEAA7]/30 dark:border-white/5 rounded-3xl p-6 flex flex-col gap-4">
            <span className="font-fredoka font-bold text-base text-neutral-800 dark:text-white border-b border-neutral-105 pb-2.5">
              Hooker HQ Indices
            </span>
            <div className="flex items-center gap-3.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-semibold select-none">
              <Clock className="h-5 w-5 text-brand-coral" />
              <span>We hook yarn Monday - Friday, 9:00 AM - 5:00 PM EST</span>
            </div>
            <div className="flex items-center gap-3.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-semibold select-none">
              <MapPin className="h-5 w-5 text-brand-coral" />
              <span>Handcrafted in the sunny coastal workshops of Maine, USA</span>
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Contact enquiry form */}
        <div className="lg:col-span-6 relative">
          
          {/* Speck background glow indicator */}
          <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-brand-coral/10 blur-3xl -z-10" />

          <div className="bg-white dark:bg-neutral-900 border border-brand-coral/15 dark:border-white/5 p-6 sm:p-8 rounded-3xl shadow-xs">
            <h2 className="font-fredoka font-bold text-lg sm:text-xl text-neutral-800 dark:text-white mb-6">
              Inquire / Request Custom Models
            </h2>

            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center"
              >
                <div className="h-12 w-12 rounded-full bg-brand-secondary/20 flex items-center justify-center mb-4 text-neutral-900">
                  <CheckCircle className="h-7 w-7 text-teal-800" />
                </div>
                <h3 className="font-fredoka font-bold text-lg text-neutral-850 dark:text-white mb-2 leading-none">
                  Stitched successfully!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed font-semibold">
                  We received your message! Octo is already sliding it over to our head designers. We'll reply within 24 hours. Check your inbox for updates! 🧶
                </p>

                <button
                  onClick={() => setFormStatus('idle')}
                  className="font-fredoka font-bold text-xs tracking-widest px-6 py-2.5 bg-brand-coral hover:bg-primary-600 text-white rounded-xl transition-all cursor-pointer shadow-xs mt-6"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 font-semibold text-xs sm:text-sm">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase tracking-wide">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name..."
                    className="h-10 px-3 bg-neutral-10s/30 dark:bg-neutral-950 border border-brand-coral/15 rounded-xl text-xs focus:ring-1 focus:ring-brand-coral focus:border-brand-coral focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase tracking-wide">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@domain.com"
                    className="h-10 px-3 bg-neutral-10s/30 dark:bg-neutral-950 border border-brand-coral/15 rounded-xl text-xs focus:ring-1 focus:ring-brand-coral focus:border-brand-coral focus:outline-none"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase tracking-wide">Subject (Optional)</label>
                  <input
                    type="text"
                    name="subject"
                    id="contact-subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Custom Bee color / restock date..."
                    className="h-10 px-3 bg-neutral-10s/30 dark:bg-neutral-950 border border-brand-coral/15 rounded-xl text-xs focus:ring-1 focus:ring-brand-coral focus:border-brand-coral focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase tracking-wide">Stitch your Message</label>
                  <textarea
                    name="message"
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What would you like us to stitch? Describe measurements, characters, animal types, or cozy greetings..."
                    className="p-3 bg-neutral-10s/30 dark:bg-neutral-950 border border-brand-coral/15 rounded-xl text-xs focus:ring-1 focus:ring-brand-coral focus:border-brand-coral focus:outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="h-11 bg-brand-coral hover:bg-primary-600 disabled:opacity-50 text-white font-fredoka font-bold text-xs tracking-widest rounded-2xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors mt-2"
                  id="contact-submit"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="h-3.5 w-3.5" />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
