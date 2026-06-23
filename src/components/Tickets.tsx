import { motion } from "framer-motion";
import { Ticket, Users, GraduationCap, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TICKETS, CONTACTS } from "../data/constants";

const ticketCards = [
  {
    icon: Ticket,
    title: "Standard",
    price: `RM ${TICKETS.standard.price}`,
    unit: TICKETS.standard.unit,
    features: ["Dinner seat", "Full programme access", "Testimonies & sharing"],
    highlight: false,
  },
  {
    icon: Users,
    title: "Table of 10",
    price: `RM ${TICKETS.table.price}`,
    unit: TICKETS.table.unit,
    features: ["10 reserved seats", "Priority seating", "Table host recognition", "Full programme access"],
    highlight: true,
  },
  {
    icon: GraduationCap,
    title: "Young Adult",
    price: `RM ${TICKETS.youngAdult.price}`,
    unit: TICKETS.youngAdult.unit,
    features: ["Dinner seat", "Full programme access", "Below 30 years old", "ID may be required"],
    highlight: false,
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="relative py-20 sm:py-28 bg-gradient-to-b from-darkest to-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Join Us
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Your <span className="text-gold">Tickets</span>
          </h2>
          <p className="text-center text-white/50 max-w-xl mx-auto mb-4 text-sm sm:text-base">
            {TICKETS.kidsFree}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {ticketCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`glass-card p-8 h-full flex flex-col relative overflow-hidden group ${
                  card.highlight ? "border-gold/40 gold-glow" : ""
                }`}
              >
                {card.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <card.icon className="text-gold" size={22} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {card.title}
                  </h3>
                </div>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-gold">{card.price}</span>
                  <span className="text-white/40 text-sm ml-2">/ {card.unit}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={CONTACTS.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    card.highlight
                      ? "bg-gold text-darkest hover:bg-gold-light shadow-lg shadow-gold/20"
                      : "border border-gold/40 text-gold hover:bg-gold/10"
                  }`}
                >
                  Register Now
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fundraising disclaimer */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <div className="inline-block glass-card px-6 py-3">
              <p className="text-gold/60 text-xs sm:text-sm italic">
                All proceeds from this fundraising dinner will be used to finance GCF Malaysia Ministries.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
