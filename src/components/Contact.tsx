import { Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { InstagramIcon, FacebookIcon, LinkedInIcon, WebsiteIcon } from "./SocialIcons";
import { waLink, telLink } from "../lib/eventLinks";
import { CONTACTS, SOCIAL } from "../data/constants";

export default function Contact() {
  const socialLinks = [
    { Icon: InstagramIcon, href: SOCIAL.instagram, label: "Instagram" },
    { Icon: FacebookIcon, href: SOCIAL.facebook, label: "Facebook" },
    { Icon: LinkedInIcon, href: SOCIAL.linkedin, label: "LinkedIn" },
    { Icon: WebsiteIcon, href: SOCIAL.website, label: "Website" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-gradient-to-b from-ink to-darkest">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionDivider label="Get in Touch" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Register <span className="foil-text">Now</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mt-6 text-sm sm:text-base font-light">
              Tap WhatsApp to chat with us and reserve your seat — fastest way to register.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Jimmy — WhatsApp primary */}
          <ScrollReveal>
            <div className="glass-card p-7 flex items-center gap-5 group hover:gold-glow transition-all duration-500">
              <div className="w-14 h-14 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                <WhatsAppGlyph className="text-gold" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gold/70 text-[10px] uppercase tracking-[0.3em] mb-1">Primary · WhatsApp</p>
                <p className="text-white font-display font-semibold text-lg">{CONTACTS.primary.name}</p>
                <p className="text-gold text-sm">{CONTACTS.primary.phone}</p>
              </div>
              <a
                href={waLink(CONTACTS.primary.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-[11px] font-semibold tracking-widest uppercase bg-gradient-to-r from-gold to-gold-dark text-ink hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                Chat
              </a>
            </div>
            <a
              href={telLink(CONTACTS.primary.phone)}
              className="inline-flex items-center gap-1.5 mt-2 ml-1 text-white/70 hover:text-gold text-xs transition-colors"
            >
              <Phone size={12} /> or call {CONTACTS.primary.phone}
            </a>
          </ScrollReveal>

          {/* Celina */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-7 flex items-center gap-5 group hover:gold-glow transition-all duration-500">
              <div className="w-14 h-14 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                <WhatsAppGlyph className="text-gold" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gold/70 text-[10px] uppercase tracking-[0.3em] mb-1">Secondary · WhatsApp</p>
                <p className="text-white font-display font-semibold text-lg">{CONTACTS.secondary.name}</p>
                <p className="text-gold text-sm">{CONTACTS.secondary.phone}</p>
              </div>
              <a
                href={waLink(CONTACTS.secondary.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-[11px] font-semibold tracking-widest uppercase bg-gradient-to-r from-gold to-gold-dark text-ink hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                Chat
              </a>
            </div>
            <a
              href={telLink(CONTACTS.secondary.phone)}
              className="inline-flex items-center gap-1.5 mt-2 ml-1 text-white/70 hover:text-gold text-xs transition-colors"
            >
              <Phone size={12} /> or call {CONTACTS.secondary.phone}
            </a>
          </ScrollReveal>

          {/* Email */}
          <ScrollReveal delay={0.2}>
            <a
              href={`mailto:${CONTACTS.email}`}
              className="glass-card p-7 flex items-center gap-5 group hover:gold-glow transition-all duration-500 block"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                <EnvelopeGlyph className="text-gold" size={22} />
              </div>
              <div>
                <p className="text-gold/70 text-[10px] uppercase tracking-[0.3em] mb-1">Email</p>
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-gold transition-colors">
                  {CONTACTS.email}
                </p>
              </div>
            </a>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={0.3}>
            <div className="glass-card p-7 h-full">
              <p className="text-gold/70 text-[10px] uppercase tracking-[0.3em] mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    aria-label={label}
                    className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold/70 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
                  >
                    <Icon size={18} />
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

function WhatsAppGlyph({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

function EnvelopeGlyph({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  );
}
