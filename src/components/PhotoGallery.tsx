import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { GALLERY_IMAGES } from "../data/constants";

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const open = (i: number) => setSelectedIndex(i);
  const close = () => setSelectedIndex(null);
  const next = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
  const prev = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionDivider label="Memories" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              GCF <span className="foil-text">Gallery</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mt-6 text-sm sm:text-base font-light">
              Moments captured across 56 years of fellowship, ministry, and community.
            </p>
          </div>
        </ScrollReveal>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => open(i)}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <p className="text-white text-sm font-display">{img.caption}</p>
                </div>
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-md flex items-center justify-center"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 text-white/70 hover:text-gold p-2 z-50 transition-colors"
            >
              <X size={26} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-white/70 hover:text-gold p-2 z-50 transition-colors"
            >
              <ChevronLeft size={34} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] px-12"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[selectedIndex].url}
                alt={GALLERY_IMAGES[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-gold/70 text-center mt-5 text-sm font-display tracking-wide">
                {GALLERY_IMAGES[selectedIndex].caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-white/70 hover:text-gold p-2 z-50 transition-colors"
            >
              <ChevronRight size={34} />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
              {selectedIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
