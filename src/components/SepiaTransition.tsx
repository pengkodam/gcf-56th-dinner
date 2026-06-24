import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SepiaTransition() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const wordOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0, 1, 1, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const part1 = "From a small gathering of graduates...".split(" ");
  const part2 = "to a movement transforming a nation.".split(" ");

  return (
    <section ref={ref} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-ink py-32">
      {/* Pulsing radial glow */}
      <motion.div style={{ scale: glowScale }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-gold/5 rounded-full blur-[160px]" />
      </motion.div>

      {/* Top + bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <motion.div style={{ y }} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div style={{ opacity: wordOpacity }}>
          <p className="text-gold/75 text-xs tracking-[0.4em] uppercase font-body mb-10">
            From Past to Present
          </p>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-10 text-balance">
            {part1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="inline-block text-white/35 mr-3"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {part2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className={`inline-block mr-3 ${word === "nation." ? "foil-text" : "text-white"}`}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            What began in 1969 as an informal fellowship for Christian graduates has grown into a
            vibrant community impacting thousands across Malaysia — in the marketplace, in society,
            and for the glory of Christ.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
