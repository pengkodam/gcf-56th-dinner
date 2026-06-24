import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { timeline } from "../data/timeline";

function TimelineNode({ year, title, description, index }: {
  year: number;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex-shrink-0 w-72 sm:w-80 group"
    >
      <div className="glass-card p-7 h-full transition-all duration-500 group-hover:gold-glow">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="editorial-num foil-text text-4xl font-bold">{year}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
        </div>
        <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="past" className="relative py-24 sm:py-32 bg-darkest overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-14">
        <ScrollReveal>
          <div className="text-center">
            <SectionDivider label="Our Journey" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Honoring the <span className="foil-text">Past</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mt-6 text-sm sm:text-base font-light">
              56 years of God's faithfulness — a journey of fellowship, ministry, and transformation.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal scrollable timeline */}
      <div className="relative">
        <div className="absolute top-[calc(2rem+0.5rem)] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

        <div
          className="flex gap-6 px-4 sm:px-8 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex-shrink-0 w-4 sm:w-8" />
          {timeline.map((item, i) => (
            <TimelineNode key={item.year} {...item} index={i} />
          ))}
          <div className="flex-shrink-0 w-4 sm:w-8" />
        </div>

        <div className="flex justify-center mt-8 gap-3 items-center text-gold/40 text-[10px] tracking-[0.4em] uppercase">
          <span>←</span>
          <span>Scroll to explore</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}
