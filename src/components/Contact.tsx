import { motion } from "framer-motion";
import { Phone, Mail, Globe, Share2, ExternalLink, Copy, Check } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { CONTACTS, SOCIAL } from "../data/constants";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(CONTACTS.shortlink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const socialLinks = [
    { icon: Globe, href: SOCIAL.instagram, label: "Instagram" },
    { icon: Share2, href: SOCIAL.facebook, label: "Facebook" },
    { icon: ExternalLink, href: SOCIAL.linkedin, label: "LinkedIn" },
    { icon: Globe, href: SOCIAL.website, label: "Website" },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-gradient-to-b from-dark to-darker">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Get in Touch
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
            Contact <span className="text-gold">Us</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: contacts */}
          <div className="space-y-6">
            {/* Jimmy */}
            <ScrollReveal>
              <a
                href={`tel:${CONTACTS.primary.phone}`}
                className="glass-card p-6 flex items-center gap-4 group hover:gold-glow transition-all duration-300 block"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-gold/60 text-xs uppercase tracking-wider">Primary Contact</p>
                  <p className="text-white font-display font-semibold text-lg group-hover:text-gold transition-colors">
                    {CONTACTS.primary.name}
                  </p>
                  <p className="text-gold text-sm">{CONTACTS.primary.phone}</p>
                </div>
              </a>
            </ScrollReveal>

            {/* Celina */}
            <ScrollReveal delay={0.1}>
              <a
                href={`tel:${CONTACTS.secondary.phone}`}
                className="glass-card p-6 flex items-center gap-4 group hover:gold-glow transition-all duration-300 block"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-gold/60 text-xs uppercase tracking-wider">Secondary Contact</p>
                  <p className="text-white font-display font-semibold text-lg group-hover:text-gold transition-colors">
                    {CONTACTS.secondary.name}
                  </p>
                  <p className="text-gold text-sm">{CONTACTS.secondary.phone}</p>
                </div>
              </a>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={0.2}>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="glass-card p-6 flex items-center gap-4 group hover:gold-glow transition-all duration-300 block"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-gold/60 text-xs uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base group-hover:text-gold transition-colors">
                    {CONTACTS.email}
                  </p>
                </div>
              </a>
            </ScrollReveal>

            {/* Social links */}
            <ScrollReveal delay={0.3}>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gold/60 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: QR code + shortlink */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 flex flex-col items-center justify-center text-center gold-glow h-full">
              <p className="text-gold/60 text-xs uppercase tracking-wider mb-6">
                Scan to Register
              </p>

              <div className="bg-white p-4 rounded-2xl mb-6">
                <QRCodeSVG
                  value={CONTACTS.shortlink}
                  size={180}
                  bgColor="#ffffff"
                  fgColor="#1a1a2e"
                  level="M"
                />
              </div>

              <p className="text-white/40 text-xs mb-4">or share this link</p>

              <div className="flex items-center gap-2 w-full max-w-xs">
                <div className="flex-1 glass-card px-4 py-2.5 text-gold text-sm truncate">
                  {CONTACTS.shortlink}
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={copyLink}
                  className="p-2.5 rounded-xl bg-gold/10 hover:bg-gold/20 transition-colors flex-shrink-0"
                  title="Copy link"
                >
                  {copied ? (
                    <Check className="text-green-400" size={18} />
                  ) : (
                    <Copy className="text-gold" size={18} />
                  )}
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
