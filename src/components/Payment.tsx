import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Copy, Check, Mail, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { PAYMENT } from "../data/constants";

export default function Payment() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="relative py-20 sm:py-28 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Payment
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
            Bank <span className="text-gold">Transfer</span>
          </h2>
        </ScrollReveal>

        {/* Bank details card */}
        <ScrollReveal>
          <div className="glass-card p-8 sm:p-10 gold-glow mb-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <Building2 className="text-gold" size={22} />
              </div>
              <div>
                <p className="text-gold/60 text-xs uppercase tracking-wider">Bank</p>
                <p className="text-white font-semibold text-lg">{PAYMENT.bank}</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Account Name */}
              <div>
                <p className="text-gold/60 text-xs uppercase tracking-wider mb-1">Account Name</p>
                <p className="text-white font-medium text-base sm:text-lg">{PAYMENT.accountName}</p>
              </div>

              {/* Account Number — copyable */}
              <div>
                <p className="text-gold/60 text-xs uppercase tracking-wider mb-1">Account Number</p>
                <div className="flex items-center gap-3">
                  <p className="text-gold font-display text-2xl sm:text-3xl font-bold tracking-wider">
                    {PAYMENT.accountNo}
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(PAYMENT.accountNo, "account")}
                    className="p-2 rounded-lg bg-gold/10 hover:bg-gold/20 transition-colors"
                    title="Copy account number"
                  >
                    {copied === "account" ? (
                      <Check className="text-green-400" size={18} />
                    ) : (
                      <Copy className="text-gold" size={18} />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Reference */}
              <div>
                <p className="text-gold/60 text-xs uppercase tracking-wider mb-1">Reference</p>
                <div className="flex items-center gap-3">
                  <p className="text-white font-display text-xl font-bold">{PAYMENT.reference}</p>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(PAYMENT.reference, "reference")}
                    className="p-2 rounded-lg bg-gold/10 hover:bg-gold/20 transition-colors"
                    title="Copy reference"
                  >
                    {copied === "reference" ? (
                      <Check className="text-green-400" size={18} />
                    ) : (
                      <Copy className="text-gold" size={18} />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PAYMENT.steps.map((step, i) => (
              <div key={i} className="glass-card p-5 flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold font-display font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Email CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 text-center">
            <a
              href={`mailto:${PAYMENT.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all text-sm"
            >
              <Mail size={16} />
              {PAYMENT.email}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
