import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const counters = [
  { value: 56, suffix: "", label: "Years of Ministry" },
  { value: 1000, suffix: "+", label: "Graduates Impacted" },
  { value: 50, suffix: "+", label: "Years of Marketplace Ministry" },
  { value: 3, suffix: "", label: "Active Ministries" },
];

function StatFigure({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <div ref={ref} className="group">
      <div className="editorial-num foil-text text-6xl sm:text-7xl lg:text-8xl font-bold leading-none mb-3 gold-glow-text">
        {count.toLocaleString()}
        <span className="text-gold-light text-4xl sm:text-5xl align-top">{suffix}</span>
      </div>
      <p className="text-white/65 text-xs sm:text-sm tracking-[0.3em] uppercase font-body">
        {label}
      </p>
    </div>
  );
}

export default function LegacyCounters() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-gold/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionDivider label="By the Numbers" />
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            A Legacy of <span className="foil-text">Faithfulness</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <StatFigure {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
