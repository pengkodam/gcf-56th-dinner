import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GoldParticles from "./GoldParticles";
import CountdownTimer from "./CountdownTimer";
import { EVENT } from "../data/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-darkest via-dark to-darker">
      <GoldParticles />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Cross / decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-12 h-12 mx-auto border-2 border-gold/40 rotate-45 flex items-center justify-center">
            <div className="w-6 h-6 bg-gold/20 rotate-0" />
          </div>
        </motion.div>

        {/* Theme subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gold-light/70 text-sm sm:text-base tracking-[0.3em] uppercase font-body mb-4"
        >
          {EVENT.theme}
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="shimmer-text">{EVENT.subtitle}</span>
        </motion.h1>

        {/* Event name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-display text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mb-4"
        >
          {EVENT.title}
        </motion.h2>

        {/* Bible verse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-8 max-w-2xl mx-auto"
        >
          <p className="text-gold-light/60 italic text-sm sm:text-base font-body leading-relaxed">
            "{EVENT.verseText}"
          </p>
          <p className="text-gold/80 text-xs sm:text-sm mt-1 tracking-wider">
            — {EVENT.verseRef}
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#past"
            className="px-8 py-4 rounded-full text-base font-semibold bg-gold text-darkest hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:scale-105"
          >
            Explore Our Story
          </a>
          <a
            href="#event"
            className="px-8 py-4 rounded-full text-base font-semibold border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300"
          >
            Event Details
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold/50" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
