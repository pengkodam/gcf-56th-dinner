import { Heart } from "lucide-react";
import { GCF, SOCIAL, DONATION } from "../data/constants";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-ink border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <a
            href={DONATION.loveGiftUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card px-7 py-3.5 hover:gold-glow transition-all duration-300"
          >
            <Heart className="text-gold" size={15} />
            <p className="text-gold/70 text-xs tracking-wider">
              Support GCF Malaysia Ministries through a Love Gift
            </p>
          </a>
        </div>

        <div className="text-center space-y-3">
          <p className="font-display text-lg font-bold foil-text">{GCF.fullName}</p>
          <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">{GCF.address}</p>
          <a
            href={SOCIAL.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/60 hover:text-gold text-sm transition-colors"
          >
            gcfmalaysia.org
          </a>
        </div>

        <div className="gold-rule max-w-xs mx-auto my-8 opacity-30" />

        <div className="text-center">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} {GCF.fullName}. All rights reserved.
          </p>
          <p className="text-white/10 text-xs mt-1">
            Persatuan Siswazah Kristian Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
