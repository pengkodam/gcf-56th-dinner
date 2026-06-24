import { motion } from "framer-motion";
import { Users, Zap, Landmark, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { GCF } from "../data/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users,
  Zap,
  Landmark,
};

export default function MinistryPillars() {
  return (
    <section id="future" className="relative py-24 sm:py-32 bg-gradient-to-b from-darkest to-ink overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionDivider label="Our Ministries" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Building the <span className="foil-text">Future</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mt-6 text-sm sm:text-base font-light">
              Three pillars of ministry equipping Christians to transform society.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GCF.ministries.map((ministry, i) => {
            const Icon = iconMap[ministry.icon] || Zap;
            return (
              <ScrollReveal key={ministry.name} delay={i * 0.12}>
                <motion.a
                  href={ministry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-8 sm:p-10 h-full group block relative overflow-hidden"
                >
                  <div className="absolute top-6 right-6 text-gold/0 group-hover:text-gold/60 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                  <div className="w-14 h-14 border border-gold/25 flex items-center justify-center mb-8 group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:gold-glow transition-all duration-500">
                    <Icon className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold transition-colors mb-3">
                    {ministry.name}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {ministry.description}
                  </p>
                  <div className="mt-6 h-px w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-700" />
                </motion.a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
