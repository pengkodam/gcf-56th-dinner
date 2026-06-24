import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
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
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000"
    >
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative cursor-pointer h-64 sm:h-72"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 glass-card p-7 flex flex-col justify-between"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              <Quote className="text-gold/40 mb-4" size={26} />
              <p className="text-white/65 text-sm sm:text-base leading-relaxed italic line-clamp-5">
                "{quote}"
              </p>
            </div>
            <div className="border-t border-gold/10 pt-3">
              <p className="text-gold font-display font-semibold text-sm">{name}</p>
              <p className="text-white/35 text-xs">{role}</p>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 glass-card gold-glow p-7 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="editorial-num text-6xl font-bold foil-text mb-4">
              {era}
            </div>
            <p className="text-white/55 text-sm text-center font-light">
              A generation of faithfulness
            </p>
            <p className="text-gold/40 text-[10px] tracking-[0.3em] uppercase mt-5">Tap to flip back</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-darkest to-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionDivider label="Voices of GCF" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              What GCF Means to <span className="foil-text">Us</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mt-6 text-sm sm:text-base font-light">
              Tap a card to reveal the era. Real testimonials to be added.
            </p>
          </div>
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
