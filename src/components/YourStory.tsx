import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { DONATION, SOCIAL } from "../data/constants";

export default function YourStory() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker via-dark to-darkest" />

      {/* Gold radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-gold/6 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <p className="text-gold/60 text-sm tracking-[0.3em] uppercase font-body mb-4">
            The Next Chapter
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white/30">Our story is now</span>
            <br />
            <span className="shimmer-text">your story.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you're a fresh graduate, a seasoned professional, or somewhere in between —
            there's a place for you in GCF. Come write the next chapter with us.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={DONATION.loveGiftUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gold text-darkest hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/30"
            >
              <Heart size={18} />
              Support GCF's Mission
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={SOCIAL.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300"
            >
              Visit GCF Malaysia
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
