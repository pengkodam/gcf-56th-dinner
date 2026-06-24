import { Phone, Mail, Globe, Share2, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { CONTACTS, SOCIAL } from "../data/constants";

export default function Contact() {
  const socialLinks = [
    { icon: Globe, href: SOCIAL.instagram, label: "Instagram" },
    { icon: Share2, href: SOCIAL.facebook, label: "Facebook" },
    { icon: ExternalLink, href: SOCIAL.linkedin, label: "LinkedIn" },
    { icon: Globe, href: SOCIAL.website, label: "Website" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-gradient-to-b from-ink to-darkest">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionDivider label="Get in Touch" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Contact <span className="foil-text">Us</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ScrollReveal>
            <a
              href={`tel:${CONTACTS.primary.phone}`}
              className="glass-card p-7 flex items-center gap-5 group hover:gold-glow transition-all duration-500 block"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                <Phone className="text-gold" size={22} />
              </div>
              <div>
                <p className="text-gold/50 text-[10px] uppercase tracking-[0.3em] mb-1">Primary Contact</p>
                <p className="text-white font-display font-semibold text-lg group-hover:text-gold transition-colors">
                  {CONTACTS.primary.name}
                </p>
                <p className="text-gold text-sm">{CONTACTS.primary.phone}</p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <a
              href={`tel:${CONTACTS.secondary.phone}`}
              className="glass-card p-7 flex items-center gap-5 group hover:gold-glow transition-all duration-500 block"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                <Phone className="text-gold" size={22} />
              </div>
              <div>
                <p className="text-gold/50 text-[10px] uppercase tracking-[0.3em] mb-1">Secondary Contact</p>
                <p className="text-white font-display font-semibold text-lg group-hover:text-gold transition-colors">
                  {CONTACTS.secondary.name}
                </p>
                <p className="text-gold text-sm">{CONTACTS.secondary.phone}</p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a
              href={`mailto:${CONTACTS.email}`}
              className="glass-card p-7 flex items-center gap-5 group hover:gold-glow transition-all duration-500 block"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                <Mail className="text-gold" size={22} />
              </div>
              <div>
                <p className="text-gold/50 text-[10px] uppercase tracking-[0.3em] mb-1">Email</p>
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-gold transition-colors">
                  {CONTACTS.email}
                </p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-7">
              <p className="text-gold/50 text-[10px] uppercase tracking-[0.3em] mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold/60 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
