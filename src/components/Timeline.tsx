import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
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
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex-shrink-0 w-72 sm:w-80 group"
    >
      <div className="glass-card p-6 h-full hover:gold-glow transition-all duration-500 cursor-default">
        {/* Year badge */}
        <div className="inline-block px-3 py-1 rounded-full bg-gold/15 border border-gold/30 mb-4">
          <span className="text-gold font-display text-lg font-bold">{year}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="past" className="relative py-20 sm:py-28 bg-gradient-to-b from-dark to-darker overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Our Journey
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Honoring the <span className="text-gold">Past</span>
          </h2>
          <p className="text-center text-white/50 max-w-xl mx-auto text-sm sm:text-base">
            56 years of God's faithfulness — a journey of fellowship, ministry, and transformation.
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal scrollable timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 px-4 sm:px-8 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex-shrink-0 w-4 sm:w-8" />
          {timeline.map((item, i) => (
            <TimelineNode key={item.year} {...item} index={i} />
          ))}
          <div className="flex-shrink-0 w-4 sm:w-8" />
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-6 gap-2 items-center text-gold/40 text-xs tracking-wider">
          <span>←</span>
          <span>Scroll to explore</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}
