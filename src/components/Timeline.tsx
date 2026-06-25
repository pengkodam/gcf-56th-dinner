import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { timeline } from "../data/timeline";

function TimelineItem({ year, title, description, index }: {
  year: number;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <li className="relative pl-16 sm:pl-24">
      {/* Node centered on the rail */}
      <span className="absolute left-8 -translate-x-1/2 top-1.5 z-10 flex items-center justify-center">
        <span className="w-3 h-3 border border-gold/60 rotate-45 bg-ink" />
      </span>

      <ScrollReveal delay={index * 0.08}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-6 sm:p-7"
        >
          <div className="flex items-baseline gap-4 mb-3">
            <span className="editorial-num foil-text text-3xl sm:text-4xl font-bold leading-none">
              {year}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/65 text-sm leading-relaxed">{description}</p>
        </motion.div>
      </ScrollReveal>
    </li>
  );
}

export default function Timeline() {
  return (
    <section id="past" className="relative py-24 sm:py-32 bg-darkest overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <ScrollReveal>
          <div className="text-center">
            <SectionDivider label="Our Journey" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Honoring the <span className="foil-text">Past</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mt-6 text-sm sm:text-base font-light">
              56 years of God's faithfulness — a journey of fellowship, ministry, and transformation.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Vertical timeline */}
      <div className="relative max-w-2xl mx-auto px-4 sm:px-8">
        {/* Rail */}
        <div className="absolute left-8 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <ol className="space-y-8 sm:space-y-10">
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} {...item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
