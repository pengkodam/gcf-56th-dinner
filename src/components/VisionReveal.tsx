import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { GCF } from "../data/constants";

const words = GCF.vision.split(" ");

export default function VisionReveal() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <SectionDivider label="Our Vision" />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-2 mt-10">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white/85"
            >
              {word === "Christ!" ? (
                <span className="shimmer-text">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <p className="mt-10 text-white/40 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Since 1969, GCF has been mobilizing Christian graduates to live out their faith in
            the marketplace — where the daily business and economics of life take place.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
