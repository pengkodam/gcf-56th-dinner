import { motion } from "framer-motion";
import { Users, Zap, Landmark, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { GCF } from "../data/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users,
  Zap,
  Landmark,
};

export default function MinistryPillars() {
  return (
    <section id="future" className="relative py-20 sm:py-28 bg-gradient-to-b from-dark to-darker">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Our Ministries
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Building the <span className="text-gold">Future</span>
          </h2>
          <p className="text-center text-white/50 max-w-xl mx-auto mb-14 text-sm sm:text-base">
            Three pillars of ministry equipping Christians to transform society.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GCF.ministries.map((ministry, i) => {
            const Icon = iconMap[ministry.icon] || Zap;
            return (
              <ScrollReveal key={ministry.name} delay={i * 0.15}>
                <motion.a
                  href={ministry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 h-full group cursor-pointer block"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:gold-glow transition-all duration-500">
                    <Icon className="text-gold" size={28} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {ministry.name}
                    </h3>
                    <ExternalLink className="text-gold/0 group-hover:text-gold/60 transition-all" size={16} />
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {ministry.description}
                  </p>
                </motion.a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
