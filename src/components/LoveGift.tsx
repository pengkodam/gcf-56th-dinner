import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { DONATION } from "../data/constants";

export default function LoveGift() {
  return (
    <section className="relative py-20 sm:py-28 bg-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <div className="inline-block mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto gold-glow">
              <Heart className="text-gold" size={28} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Support Our Mission
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Give a <span className="text-gold">Love Gift</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4 max-w-xl mx-auto">
            Your generous love gift helps GCF Malaysia continue its ministry of equipping Christian
            graduates to impact the marketplace for the glory of Christ.
          </p>
          <p className="text-white/40 text-sm mb-10 max-w-lg mx-auto">
            All proceeds go directly towards GCF Malaysia Ministries — including iBridge, Impact,
            and Nation-Building programmes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="glass-card p-8 sm:p-10 gold-glow max-w-md mx-auto mb-8">
            <h3 className="font-display text-lg font-bold text-gold mb-6">
              How to Give
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold font-display font-bold text-sm">1</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Click the button below to access the GCF Love Gift form
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold font-display font-bold text-sm">2</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Fill in your details and the amount you wish to contribute
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold font-display font-bold text-sm">3</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Complete the bank transfer as instructed in the form
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href={DONATION.loveGiftUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-semibold bg-gold text-darkest hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/30"
          >
            <Heart size={18} />
            Give a Love Gift
            <ExternalLink size={16} />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
