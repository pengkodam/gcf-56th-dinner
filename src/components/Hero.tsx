import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GoldParticles from "./GoldParticles";
import CountdownTimer from "./CountdownTimer";
import { EVENT } from "../data/constants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink">
      <GoldParticles />

      {/* Parallax background layer */}
      <motion.div style={{ scale, y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-deep/10 rounded-full blur-[150px]" />
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none vignette" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative diamond */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="w-14 h-14 mx-auto border border-gold/40 rotate-45 flex items-center justify-center">
            <div className="w-5 h-5 bg-gradient-to-br from-gold-light to-gold-deep rotate-0" />
          </div>
        </motion.div>

        {/* Theme */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gold-light/60 text-xs sm:text-sm tracking-[0.45em] uppercase font-body mb-6"
        >
          {EVENT.theme}
        </motion.p>

        {/* Massive display title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 text-balance"
        >
          <span className="foil-text">{EVENT.subtitle}</span>
        </motion.h1>

        {/* Hairline divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="gold-rule w-32 mx-auto mb-8"
        />

        {/* Event name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-display text-lg sm:text-xl lg:text-2xl text-white/70 font-light tracking-wide mb-8 max-w-2xl mx-auto"
        >
          {EVENT.title}
        </motion.h2>

        {/* Verse */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="mb-10 max-w-xl mx-auto"
        >
          <p className="text-gold-light/50 italic font-display text-base sm:text-lg leading-relaxed">
            "{EVENT.verseText}"
          </p>
          <cite className="not-italic text-gold/70 text-xs tracking-[0.3em] uppercase mt-3 inline-block">
            — {EVENT.verseRef}
          </cite>
        </motion.blockquote>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#past"
            className="group relative px-10 py-4 text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-gold to-gold-dark text-ink overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">Explore Our Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#event"
            className="px-10 py-4 text-sm font-semibold tracking-widest uppercase border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300"
          >
            Event Details
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gold/40 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <ChevronDown className="text-gold/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
