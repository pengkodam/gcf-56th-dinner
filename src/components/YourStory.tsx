import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { DONATION, SOCIAL } from "../data/constants";

export default function YourStory() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-gradient-to-b from-darkest via-ink to-darkest" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-gold/6 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <p className="text-gold/50 text-xs tracking-[0.4em] uppercase font-body mb-6">
            The Next Chapter
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 text-balance">
            <span className="block text-white/30">Our story is now</span>
            <span className="shimmer-text">your story.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
            Whether you're a fresh graduate, a seasoned professional, or somewhere in between —
            there's a place for you in GCF. Come write the next chapter with us.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href={DONATION.loveGiftUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-gold to-gold-dark text-ink hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
            >
              <Heart size={16} />
              Support GCF's Mission
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href={SOCIAL.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-semibold tracking-widest uppercase border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300"
            >
              Visit GCF Malaysia
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
