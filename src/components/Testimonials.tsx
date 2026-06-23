import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "../data/testimonials";

function TestimonialCard({ name, role, quote, era, index }: {
  name: string;
  role: string;
  quote: string;
  era: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-1000"
    >
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative cursor-pointer h-64 sm:h-72"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 glass-card p-6 flex flex-col justify-between"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              <Quote className="text-gold/40 mb-3" size={28} />
              <p className="text-white/70 text-sm sm:text-base leading-relaxed italic line-clamp-5">
                "{quote}"
              </p>
            </div>
            <div className="border-t border-gold/10 pt-3">
              <p className="text-gold font-display font-semibold text-sm">{name}</p>
              <p className="text-white/40 text-xs">{role}</p>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center gold-glow"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="text-5xl font-display font-bold text-gold/20 mb-4">
              {era}
            </div>
            <p className="text-white/60 text-sm text-center">
              A generation of faithfulness
            </p>
            <p className="text-gold/50 text-xs mt-4">Tap to flip back</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-darker to-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Voices of GCF
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What GCF Means to <span className="text-gold">Us</span>
          </h2>
          <p className="text-center text-white/50 max-w-xl mx-auto mb-14 text-sm sm:text-base">
            Tap a card to reveal the era. Real testimonials to be added.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name + t.era} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
