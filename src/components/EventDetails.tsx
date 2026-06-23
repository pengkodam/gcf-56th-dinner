import { Calendar, Clock, MapPin, Shirt, Car } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { EVENT } from "../data/constants";

const details = [
  { icon: Calendar, label: "Date", value: EVENT.date },
  { icon: Clock, label: "Time", value: EVENT.time },
  { icon: MapPin, label: "Venue", value: EVENT.venue, link: EVENT.venueMapsUrl },
  { icon: Shirt, label: "Dress Code", value: EVENT.dressCode },
  { icon: Car, label: "Parking", value: EVENT.parking },
];

export default function EventDetails() {
  return (
    <section id="event" className="relative py-20 sm:py-28 bg-gradient-to-b from-darker to-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Save the Date
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Event <span className="text-gold">Details</span>
          </h2>
          <p className="text-center text-white/60 max-w-2xl mx-auto mb-14 text-sm sm:text-base leading-relaxed">
            {EVENT.messaging}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {details.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className="glass-card p-6 flex items-start gap-4 group transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <item.icon className="text-gold" size={22} />
                </div>
                <div>
                  <p className="text-gold/60 text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gold transition-colors font-medium text-sm sm:text-base underline decoration-gold/30 underline-offset-4 hover:decoration-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm sm:text-base">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* RSVP deadline callout */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 gold-glow">
              <Calendar className="text-gold" size={18} />
              <p className="text-sm text-white/80">
                RSVP by{" "}
                <span className="text-gold font-semibold">{EVENT.rsvpDeadline}</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
