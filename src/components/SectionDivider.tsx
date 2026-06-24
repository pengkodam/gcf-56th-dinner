import { motion } from "framer-motion";

interface SectionDividerProps {
  label?: string;
  symbol?: "diamond" | "line";
}

export default function SectionDivider({ label, symbol = "diamond" }: SectionDividerProps) {
  return (
    <div className="flex items-center justify-center gap-5 py-4">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px w-20 sm:w-28 bg-gradient-to-r from-transparent to-gold/40"
      />
      {symbol === "diamond" ? (
        <div className="w-2.5 h-2.5 border border-gold/50 rotate-45" />
      ) : (
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      )}
      {label && (
        <span className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-body">
          {label}
        </span>
      )}
      {symbol === "diamond" ? (
        <div className="w-2.5 h-2.5 border border-gold/50 rotate-45" />
      ) : (
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px w-20 sm:w-28 bg-gradient-to-l from-transparent to-gold/40"
      />
    </div>
  );
}
