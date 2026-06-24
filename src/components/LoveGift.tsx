import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { DONATION } from "../data/constants";

export default function LoveGift() {
  return (
    <section className="relative py-24 sm:py-32 bg-darkest overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-gold/5 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center w-16 h-16 border border-gold/30 rotate-45 mb-8 gold-glow">
            <div className="-rotate-45">
              <Heart className="text-gold" size={24} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SectionDivider label="Support Our Mission" />
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Give a <span className="foil-text">Love Gift</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl mx-auto font-light">
            Your generous love gift helps GCF Malaysia continue its ministry of equipping Christian
            graduates to impact the marketplace for the glory of Christ.
          </p>
          <p className="text-white/35 text-sm mb-10 max-w-lg mx-auto">
            All proceeds go directly towards GCF Malaysia Ministries — including iBridge, Impact,
            and Nation-Building programmes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="glass-card gold-glow p-8 sm:p-10 max-w-md mx-auto mb-10 text-left">
            <h3 className="font-display text-sm font-bold text-gold mb-8 tracking-[0.3em] uppercase text-center">
              How to Give
            </h3>
            <div className="space-y-5">
              {[
                "Click the button below to access the GCF Love Gift form",
                "Fill in your details and the amount you wish to contribute",
                "Complete the bank transfer as instructed in the form",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 editorial-num w-7 h-7 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href={DONATION.loveGiftUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-gold to-gold-dark text-ink hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
          >
            <Heart size={16} />
            Give a Love Gift
            <ExternalLink size={14} />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
