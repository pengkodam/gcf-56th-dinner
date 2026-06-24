import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { DONATION } from "../data/constants";

const navLinks = [
  { label: "Event", href: "#event" },
  { label: "Our Story", href: "#past" },
  { label: "Ministry", href: "#future" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-darkest/90 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="font-display text-lg sm:text-xl font-bold text-gold tracking-wide">
            GCF <span className="text-gold-light/70 font-normal">56th</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body text-white/70 hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DONATION.loveGiftUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gold text-darkest hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/20"
            >
              <Heart size={14} />
              Support GCF
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-darkest/95 backdrop-blur-xl border-t border-gold/10"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-body text-white/80 hover:text-gold py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DONATION.loveGiftUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 mt-3 px-5 py-3 rounded-full text-sm font-semibold bg-gold text-darkest hover:bg-gold-light transition-all"
            >
              <Heart size={14} />
              Support GCF
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
