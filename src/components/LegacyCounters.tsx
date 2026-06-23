import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import ScrollReveal from "./ScrollReveal";

const counters = [
  { value: 56, suffix: "", label: "Years of Ministry" },
  { value: 1000, suffix: "+", label: "Graduates Impacted" },
  { value: 50, suffix: "+", label: "Years of Marketplace Ministry" },
  { value: 3, suffix: "", label: "Active Ministries" },
];

function CounterBlock({ value, suffix, label, delay }: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-2 gold-glow-text">
        {isInView ? (
          <CountUp end={value} duration={2.5} delay={delay} separator="," />
        ) : (
          "0"
        )}
        <span className="text-gold-light">{suffix}</span>
      </div>
      <p className="text-white/50 text-sm sm:text-base tracking-wider uppercase font-body">
        {label}
      </p>
    </div>
  );
}

export default function LegacyCounters() {
  return (
    <section className="relative py-20 sm:py-28 bg-darker">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            By the Numbers
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-14">
            A Legacy of <span className="text-gold">Faithfulness</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {counters.map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 0.15}>
              <CounterBlock {...c} delay={i * 0.3} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
