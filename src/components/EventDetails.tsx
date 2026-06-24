import { Calendar, Clock, MapPin, Shirt, Car } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { EVENT, TICKETS } from "../data/constants";

const details = [
  { icon: Calendar, label: "Date", value: EVENT.date },
  { icon: Clock, label: "Time", value: EVENT.time },
  { icon: MapPin, label: "Venue", value: EVENT.venue, link: EVENT.venueMapsUrl },
  { icon: Shirt, label: "Dress Code", value: EVENT.dressCode },
  { icon: Car, label: "Parking", value: EVENT.parking },
];

export default function EventDetails() {
  return (
    <section id="event" className="relative py-24 sm:py-32 bg-gradient-to-b from-ink to-darkest overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold-deep/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionDivider label="Save the Date" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Event <span className="foil-text">Details</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-6 text-sm sm:text-base leading-relaxed font-light">
              {EVENT.messaging}
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {details.map((item, i) => {
            const wide = i === 2;
            return (
              <ScrollReveal
                key={item.label}
                delay={i * 0.08}
                className={wide ? "lg:col-span-6" : "lg:col-span-3"}
              >
                <div className="glass-card p-7 h-full flex items-start gap-5 group transition-all duration-500">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                    <item.icon className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="text-gold/50 text-[10px] uppercase tracking-[0.3em] mb-2">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white group-hover:text-gold transition-colors font-display text-lg leading-snug underline decoration-gold/20 underline-offset-4 hover:decoration-gold"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-display text-lg leading-snug">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Ticket panel */}
          <ScrollReveal delay={0.4} className="lg:col-span-6">
            <div className="glass-card gold-glow p-8 sm:p-10 h-full">
              <h3 className="font-display text-sm font-bold text-gold mb-8 tracking-[0.3em] uppercase">
                Dinner Tickets
              </h3>
              <div className="grid grid-cols-3 gap-4 items-end">
                <div>
                  <p className="editorial-num foil-text text-3xl sm:text-4xl font-bold">100</p>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">RM / Person</p>
                </div>
                <div>
                  <p className="editorial-num foil-text text-3xl sm:text-4xl font-bold">1,000</p>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">RM / Table</p>
                </div>
                <div>
                  <p className="editorial-num foil-text text-3xl sm:text-4xl font-bold">60</p>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">RM / Under 30</p>
                </div>
              </div>
              <p className="text-gold/40 text-xs mt-6 italic">{TICKETS.kidsFree}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
