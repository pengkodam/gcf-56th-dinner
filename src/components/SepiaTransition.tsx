import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SepiaTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative py-20 sm:py-32 overflow-hidden bg-dark">
      {/* Animated background gradient */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-darker via-dark to-darker" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </motion.div>

      <motion.div style={{ y }} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-3 h-3 border border-gold/40 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <p className="text-gold/60 text-sm tracking-[0.3em] uppercase font-body mb-6">
            From Past to Present
          </p>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            <span className="text-white/40">From a small gathering of graduates...</span>
            <br />
            <span className="text-gold">to a movement transforming a nation.</span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            What began in 1969 as an informal fellowship for Christian graduates has grown into a
            vibrant community impacting thousands across Malaysia — in the marketplace, in society,
            and for the glory of Christ.
          </p>

          {/* Photo placeholders */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card aspect-square flex items-center justify-center ${
                  i <= 3 ? "sepia(100%)" : ""
                }`}
              >
                <span className="text-gold/30 text-xs font-body">
                  {i <= 3 ? "Historical Photo" : "Recent Photo"}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-gold/40 text-xs italic">
            Photo placeholders — replace with actual GCF images
          </p>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-3 h-3 border border-gold/40 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
