import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle, Gift, Sparkles, Heart } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setError(null);

    if (isSupabaseConfigured && supabase) {
      try {
        const { error: dbError } = await supabase
          .from('newsletter_subscribers')
          .insert([{ email }]);

        if (dbError) {
          if (dbError.code === '23505') {
            throw new Error('This email is already stitched into our loop list!');
          }
          throw dbError;
        }

        setStatus('success');
        setEmail('');
      } catch (err: any) {
        console.error('[Supabase Error] newsletter_subscribers submission failed:', err);
        setError(err.message || 'Failed to subscribe. Please try again.');
        setStatus('idle');
      }
    } else {
      // Local fallback mode
      setTimeout(() => {
        setStatus('success');
        setEmail('');
      }, 1200);
    }
  };

  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#FFD3B6]/30 via-primary-50 to-[#E2D4F0]/30 dark:from-brand-peach/30 dark:to-neutral-100 rounded-3xl border-2 border-dashed border-brand-coral/30 p-8 sm:p-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 overflow-hidden shadow-xs"
        >
          {/* Abstract vector dots circles in background */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-coral/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-brand-secondary/5 blur-2xl pointer-events-none" />

          {/* Left Text */}
          <div className="max-w-lg relative z-10 flex flex-col items-center lg:items-start">
            <span className="inline-flex items-center gap-1 bg-brand-coral/10 text-brand-coral text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 select-none">
              <Gift className="h-3 w-3" />
              <span>Get 10% Discount Coupon</span>
            </span>

            <h2 className="font-fredoka font-bold text-2xl sm:text-3xl text-neutral-800 dark:text-white mb-3">
              Subscribe to the Yarn Thread
            </h2>
            
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-semibold">
              Be first in line! Receive private restock dates, early-bird coupon codes, cute sticker giveaways, and friendly messages directly from Octo the mascot.
            </p>
          </div>

          {/* Right Form field */}
          <div className="w-full lg:max-w-md relative z-10 shrink-0">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/90 dark:bg-neutral-900/90 border border-brand-coral/25 p-6 rounded-2xl flex flex-col items-center text-center shadow-xs"
              >
                <div className="h-10 w-10 rounded-full bg-brand-mint text-neutral-900 flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-teal-800" />
                </div>
                <h4 className="font-fredoka font-bold text-base text-neutral-800 dark:text-white">
                  We'll See You in the Loop!
                </h4>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  Your 10% coupon <span className="font-mono font-bold bg-[#FFEAA7] text-neutral-800 leading-none px-1.5 py-0.5 rounded">HAPPYHOOKER10</span> has been dispatched to your warm inbox. 🧶
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-2 w-full">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
                  <div className="relative flex-grow">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                      <Mail className="h-4.5 w-4.5" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Enter your cozy email address..."
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      className="w-full h-12 pl-10 pr-3.5 rounded-2xl border border-brand-coral/25 bg-white dark:bg-neutral-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-coral transition-all"
                      id="newsletter-email-field"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="h-12 px-6 bg-brand-coral hover:bg-primary-600 disabled:opacity-50 text-white font-fredoka font-bold text-sm tracking-widest rounded-2xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                    id="newsletter-submit-btn"
                  >
                    <span>{status === 'loading' ? 'Joining...' : 'Join List'}</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
                {error && (
                  <div className="text-red-500 text-xs font-semibold text-center lg:text-left bg-red-50 dark:bg-red-950/20 border border-red-200/20 p-2.5 rounded-xl mt-1">
                    {error}
                  </div>
                )}
              </div>
            )}

            <p className="text-[10px] text-neutral-450 dark:text-neutral-500 mt-3 text-center lg:text-left leading-normal font-semibold">
              🔒 We strict-stitch your email safety. No third-party spam sharing. You can unsubscribe in one single click.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
